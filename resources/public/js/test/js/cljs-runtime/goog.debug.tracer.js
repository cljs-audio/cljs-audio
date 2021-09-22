goog.provide("goog.debug.StopTraceDetail");
goog.provide("goog.debug.Trace");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.debug");
goog.require("goog.debug.Logger");
goog.require("goog.iter");
goog.require("goog.log");
goog.require("goog.structs.Map");
goog.require("goog.structs.SimplePool");
goog.debug.Trace_ = function() {
  this.events_ = [];
  this.outstandingEvents_ = new goog.structs.Map;
  this.startTime_ = 0;
  this.tracerOverheadStart_ = 0;
  this.tracerOverheadEnd_ = 0;
  this.tracerOverheadComment_ = 0;
  this.stats_ = new goog.structs.Map;
  this.tracerCount_ = 0;
  this.commentCount_ = 0;
  this.nextId_ = 1;
  this.eventPool_ = new goog.structs.SimplePool(0, 4000);
  this.eventPool_.createObject = function() {
    return new goog.debug.Trace_.Event_;
  };
  this.statPool_ = new goog.structs.SimplePool(0, 50);
  this.statPool_.createObject = function() {
    return new goog.debug.Trace_.Stat_;
  };
  var self = this;
  this.idPool_ = new goog.structs.SimplePool(0, 2000);
  this.idPool_.setCreateObjectFn(function() {
    return self.nextId_++;
  });
  this.defaultThreshold_ = 3;
  this.traceCallbacks_ = {};
};
goog.debug.Trace_.prototype.logger_ = goog.log.getLogger("goog.debug.Trace");
goog.debug.Trace_.prototype.MAX_TRACE_SIZE = 1000;
goog.debug.Trace_.EventType = {START:0, STOP:1, COMMENT:2};
goog.debug.Trace_.Stat_ = function() {
  this.count = 0;
  this.time = 0;
  this.varAlloc = 0;
};
goog.debug.Trace_.Stat_.prototype.type;
goog.debug.Trace_.Stat_.prototype.toString = function() {
  var sb = [];
  sb.push(this.type, " ", this.count, " (", Math.round(this.time * 10) / 10, " ms)");
  if (this.varAlloc) {
    sb.push(" [VarAlloc \x3d ", this.varAlloc, "]");
  }
  return sb.join("");
};
goog.debug.Trace_.Event_ = function() {
};
goog.debug.Trace_.Event_.prototype.type;
goog.debug.Trace_.Event_.prototype.eventType;
goog.debug.Trace_.Event_.prototype.id;
goog.debug.Trace_.Event_.prototype.comment;
goog.debug.Trace_.Event_.prototype.eventTime;
goog.debug.Trace_.Event_.prototype.startTime;
goog.debug.Trace_.Event_.prototype.stopTime;
goog.debug.Trace_.Event_.prototype.totalVarAlloc;
goog.debug.Trace_.Event_.prototype.toTraceString = function(startTime, prevTime, indent) {
  var sb = [];
  goog.asserts.assertNumber(this.eventTime, "eventTime missing - call startTracer?");
  goog.asserts.assertNumber(this.totalVarAlloc, "totalVarAlloc missing - call startTracer?");
  if (prevTime == -1) {
    sb.push("    ");
  } else {
    sb.push(goog.debug.Trace_.longToPaddedString_(this.eventTime - prevTime));
  }
  sb.push(" ", goog.debug.Trace_.formatTime_(this.eventTime - startTime));
  if (this.eventType == goog.debug.Trace_.EventType.START) {
    sb.push(" Start        ");
  } else {
    if (this.eventType == goog.debug.Trace_.EventType.STOP) {
      sb.push(" Done ");
      goog.asserts.assertNumber(this.startTime, "startTime missing - startTracer not called?");
      goog.asserts.assertNumber(this.stopTime, "stopTime missing - stopTracer not called?");
      var delta = this.stopTime - this.startTime;
      sb.push(goog.debug.Trace_.longToPaddedString_(delta), " ms ");
    } else {
      sb.push(" Comment      ");
    }
  }
  sb.push(indent, this);
  if (this.totalVarAlloc > 0) {
    sb.push("[VarAlloc ", this.totalVarAlloc, "] ");
  }
  return sb.join("");
};
goog.debug.Trace_.Event_.prototype.toString = function() {
  if (this.type == null) {
    return goog.asserts.assert(this.comment);
  } else {
    return "[" + this.type + "] " + this.comment;
  }
};
goog.debug.Trace_.TracerCallbacks = function() {
  this.start;
  this.stop;
  this.comment;
};
goog.debug.Trace_.TRACE_CANCELLED_ = {wasCancelled:true};
goog.debug.Trace_.NORMAL_STOP_ = {};
goog.debug.Trace_.TracerCallbacks.sequence_ = function(fn1, fn2) {
  return !fn1 ? fn2 : !fn2 ? fn1 : function() {
    fn1.apply(undefined, arguments);
    fn2.apply(undefined, arguments);
  };
};
goog.debug.Trace_.prototype.removeAllListeners = function() {
  this.traceCallbacks_ = {};
};
goog.debug.Trace_.prototype.addTraceCallbacks = function(callbacks) {
  this.traceCallbacks_.start = goog.debug.Trace_.TracerCallbacks.sequence_(this.traceCallbacks_.start, callbacks.start);
  this.traceCallbacks_.stop = goog.debug.Trace_.TracerCallbacks.sequence_(this.traceCallbacks_.stop, callbacks.stop);
  this.traceCallbacks_.comment = goog.debug.Trace_.TracerCallbacks.sequence_(this.traceCallbacks_.comment, callbacks.comment);
};
goog.debug.Trace_.prototype.setStartTime = function(startTime) {
  this.startTime_ = startTime;
};
goog.debug.Trace_.prototype.initCurrentTrace = function(defaultThreshold) {
  this.reset(defaultThreshold);
};
goog.debug.Trace_.prototype.clearCurrentTrace = function() {
  this.reset(0);
};
goog.debug.Trace_.prototype.clearOutstandingEvents_ = function() {
  if (this.traceCallbacks_.stop) {
    goog.iter.forEach(this.outstandingEvents_, function(startEvent) {
      this.traceCallbacks_.stop(startEvent.id, goog.debug.Trace_.TRACE_CANCELLED_);
    }, this);
  }
  this.outstandingEvents_.clear();
};
goog.debug.Trace_.prototype.reset = function(defaultThreshold) {
  this.defaultThreshold_ = defaultThreshold;
  this.clearOutstandingEvents_();
  this.releaseEvents_();
  this.startTime_ = goog.debug.Trace_.now();
  this.tracerOverheadStart_ = 0;
  this.tracerOverheadEnd_ = 0;
  this.tracerOverheadComment_ = 0;
  this.tracerCount_ = 0;
  this.commentCount_ = 0;
  var keys = this.stats_.getKeys();
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var stat = this.stats_.get(key);
    stat.count = 0;
    stat.time = 0;
    stat.varAlloc = 0;
    this.statPool_.releaseObject(stat);
  }
  this.stats_.clear();
};
goog.debug.Trace_.prototype.releaseEvents_ = function() {
  for (var i = 0; i < this.events_.length; i++) {
    var event = this.events_[i];
    if (event.id) {
      if (!this.outstandingEvents_.containsKey(event.id)) {
        this.idPool_.releaseObject(event.id);
        this.eventPool_.releaseObject(event);
      }
    } else {
      this.eventPool_.releaseObject(event);
    }
  }
  this.events_.length = 0;
};
goog.debug.Trace_.prototype.startTracer = function(comment, opt_type) {
  var tracerStartTime = goog.debug.Trace_.now();
  var varAlloc = this.getTotalVarAlloc();
  var outstandingEventCount = this.outstandingEvents_.getCount();
  if (this.events_.length + outstandingEventCount > this.MAX_TRACE_SIZE) {
    if (outstandingEventCount > this.MAX_TRACE_SIZE / 2) {
      goog.log.warning(this.logger_, "Giant thread trace. Clearing outstanding events.");
      this.clearOutstandingEvents_();
    }
    if (this.events_.length > this.MAX_TRACE_SIZE / 2) {
      goog.log.warning(this.logger_, "Giant thread trace. Clearing to avoid memory leak.");
      this.releaseEvents_();
    }
  }
  goog.debug.Logger.logToProfilers("Start : " + comment);
  var event = this.eventPool_.getObject();
  event.stopTime = undefined;
  event.totalVarAlloc = varAlloc;
  event.eventType = goog.debug.Trace_.EventType.START;
  event.id = this.idPool_.getObject();
  event.comment = comment;
  event.type = opt_type;
  this.events_.push(event);
  this.outstandingEvents_.set(String(event.id), event);
  this.tracerCount_++;
  var now = goog.debug.Trace_.now();
  event.startTime = event.eventTime = now;
  this.tracerOverheadStart_ += now - tracerStartTime;
  if (this.traceCallbacks_.start) {
    this.traceCallbacks_.start(event.id, event.toString());
  }
  return event.id;
};
goog.debug.Trace_.prototype.stopTracer = function(id, opt_silenceThreshold) {
  var now = goog.debug.Trace_.now();
  var silenceThreshold;
  if (opt_silenceThreshold === 0) {
    silenceThreshold = 0;
  } else {
    if (opt_silenceThreshold) {
      silenceThreshold = opt_silenceThreshold;
    } else {
      silenceThreshold = this.defaultThreshold_;
    }
  }
  var startEvent = this.outstandingEvents_.get(String(id));
  if (startEvent == null) {
    return null;
  }
  goog.asserts.assertNumber(id);
  if (this.traceCallbacks_.stop) {
    this.traceCallbacks_.stop(Number(id), goog.debug.Trace_.NORMAL_STOP_);
  }
  this.outstandingEvents_.remove(String(id));
  var stopEvent;
  var elapsed = now - startEvent.startTime;
  if (elapsed < silenceThreshold) {
    var count = this.events_.length;
    for (var i = count - 1; i >= 0; i--) {
      var nextEvent = this.events_[i];
      if (nextEvent == startEvent) {
        this.events_.splice(i, 1);
        this.idPool_.releaseObject(startEvent.id);
        this.eventPool_.releaseObject(startEvent);
        break;
      }
    }
  } else {
    stopEvent = this.eventPool_.getObject();
    stopEvent.id = undefined;
    stopEvent.eventType = goog.debug.Trace_.EventType.STOP;
    stopEvent.startTime = startEvent.startTime;
    stopEvent.comment = startEvent.comment;
    stopEvent.type = startEvent.type;
    stopEvent.stopTime = stopEvent.eventTime = now;
    this.events_.push(stopEvent);
  }
  var type = startEvent.type;
  var stat = null;
  if (type) {
    stat = this.getStat_(type);
    stat.count++;
    stat.time += elapsed;
  }
  if (stopEvent) {
    goog.debug.Logger.logToProfilers("Stop : " + stopEvent.comment);
    stopEvent.totalVarAlloc = this.getTotalVarAlloc();
    if (stat) {
      stat.varAlloc += stopEvent.totalVarAlloc - startEvent.totalVarAlloc;
    }
  }
  var tracerFinishTime = goog.debug.Trace_.now();
  this.tracerOverheadEnd_ += tracerFinishTime - now;
  return elapsed;
};
goog.debug.Trace_.prototype.setGcTracer = function(gcTracer) {
  this.gcTracer_ = gcTracer;
};
goog.debug.Trace_.prototype.getTotalVarAlloc = function() {
  var gcTracer = this.gcTracer_;
  if (gcTracer && gcTracer["isTracing"]()) {
    return gcTracer["totalVarAlloc"];
  }
  return -1;
};
goog.debug.Trace_.prototype.addComment = function(comment, opt_type, opt_timeStamp) {
  var now = goog.debug.Trace_.now();
  var timeStamp = opt_timeStamp ? opt_timeStamp : now;
  var eventComment = this.eventPool_.getObject();
  eventComment.startTime = undefined;
  eventComment.stopTime = undefined;
  eventComment.id = undefined;
  eventComment.eventType = goog.debug.Trace_.EventType.COMMENT;
  eventComment.eventTime = timeStamp;
  eventComment.type = opt_type;
  eventComment.comment = comment;
  eventComment.totalVarAlloc = this.getTotalVarAlloc();
  this.commentCount_++;
  if (opt_timeStamp) {
    if (this.traceCallbacks_.comment) {
      this.traceCallbacks_.comment(eventComment.toString(), opt_timeStamp);
    }
    var numEvents = this.events_.length;
    for (var i = 0; i < numEvents; i++) {
      var event = this.events_[i];
      var eventTime = event.eventTime;
      goog.asserts.assertNumber(eventTime, "eventTime undefined - call startTracer?");
      if (eventTime > timeStamp) {
        goog.array.insertAt(this.events_, eventComment, i);
        break;
      }
    }
    if (i == numEvents) {
      this.events_.push(eventComment);
    }
  } else {
    if (this.traceCallbacks_.comment) {
      this.traceCallbacks_.comment(eventComment.toString());
    }
    this.events_.push(eventComment);
  }
  var type = eventComment.type;
  if (type) {
    var stat = this.getStat_(type);
    stat.count++;
  }
  this.tracerOverheadComment_ += goog.debug.Trace_.now() - now;
};
goog.debug.Trace_.prototype.getStat_ = function(type) {
  var stat = this.stats_.get(type);
  if (!stat) {
    stat = this.statPool_.getObject();
    stat.type = type;
    this.stats_.set(type, stat);
  }
  return stat;
};
goog.debug.Trace_.prototype.getFormattedTrace = function() {
  return this.toString();
};
goog.debug.Trace_.prototype.toString = function() {
  var sb = [];
  var etime = -1;
  var indent = [];
  for (var i = 0; i < this.events_.length; i++) {
    var e = this.events_[i];
    if (e.eventType == goog.debug.Trace_.EventType.STOP) {
      indent.pop();
    }
    sb.push(" ", e.toTraceString(this.startTime_, etime, indent.join("")));
    etime = e.eventTime;
    sb.push("\n");
    if (e.eventType == goog.debug.Trace_.EventType.START) {
      indent.push("|  ");
    }
  }
  if (this.outstandingEvents_.getCount() != 0) {
    var now = goog.debug.Trace_.now();
    sb.push(" Unstopped timers:\n");
    goog.iter.forEach(this.outstandingEvents_, function(startEvent) {
      sb.push("  ", startEvent, " (", now - startEvent.startTime, " ms, started at ", goog.debug.Trace_.formatTime_(startEvent.startTime), ")\n");
    });
  }
  var statKeys = this.stats_.getKeys();
  for (var i = 0; i < statKeys.length; i++) {
    var stat = this.stats_.get(statKeys[i]);
    if (stat.count > 1) {
      sb.push(" TOTAL ", stat, "\n");
    }
  }
  sb.push("Total tracers created ", this.tracerCount_, "\n", "Total comments created ", this.commentCount_, "\n", "Overhead start: ", this.tracerOverheadStart_, " ms\n", "Overhead end: ", this.tracerOverheadEnd_, " ms\n", "Overhead comment: ", this.tracerOverheadComment_, " ms\n");
  return sb.join("");
};
goog.debug.Trace_.longToPaddedString_ = function(v) {
  v = Math.round(v);
  var space = "";
  if (v < 1000) {
    space = " ";
  }
  if (v < 100) {
    space = "  ";
  }
  if (v < 10) {
    space = "   ";
  }
  return space + v;
};
goog.debug.Trace_.formatTime_ = function(time) {
  time = Math.round(time);
  var sec = time / 1000 % 60;
  var ms = time % 1000;
  return String(100 + sec).substring(1, 3) + "." + String(1000 + ms).substring(1, 4);
};
goog.debug.Trace_.now = function() {
  return goog.now();
};
goog.debug.Trace = new goog.debug.Trace_;
goog.debug.StopTraceDetail = function() {
  this.wasCancelled;
};

//# sourceMappingURL=goog.debug.tracer.js.map
