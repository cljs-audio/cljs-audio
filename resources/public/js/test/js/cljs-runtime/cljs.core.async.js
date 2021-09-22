goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43499 = arguments.length;
switch (G__43499) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43507 = (function (f,blockable,meta43508){
this.f = f;
this.blockable = blockable;
this.meta43508 = meta43508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43509,meta43508__$1){
var self__ = this;
var _43509__$1 = this;
return (new cljs.core.async.t_cljs$core$async43507(self__.f,self__.blockable,meta43508__$1));
}));

(cljs.core.async.t_cljs$core$async43507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43509){
var self__ = this;
var _43509__$1 = this;
return self__.meta43508;
}));

(cljs.core.async.t_cljs$core$async43507.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43507.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43508","meta43508",172676563,null)], null);
}));

(cljs.core.async.t_cljs$core$async43507.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43507");

(cljs.core.async.t_cljs$core$async43507.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async43507");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43507.
 */
cljs.core.async.__GT_t_cljs$core$async43507 = (function cljs$core$async$__GT_t_cljs$core$async43507(f__$1,blockable__$1,meta43508){
return (new cljs.core.async.t_cljs$core$async43507(f__$1,blockable__$1,meta43508));
});

}

return (new cljs.core.async.t_cljs$core$async43507(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43552 = arguments.length;
switch (G__43552) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43579 = arguments.length;
switch (G__43579) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43590 = arguments.length;
switch (G__43590) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47492 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47492) : fn1.call(null,val_47492));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47492) : fn1.call(null,val_47492));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43606 = arguments.length;
switch (G__43606) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___47540 = n;
var x_47541 = (0);
while(true){
if((x_47541 < n__4695__auto___47540)){
(a[x_47541] = x_47541);

var G__47542 = (x_47541 + (1));
x_47541 = G__47542;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43627 = (function (flag,meta43628){
this.flag = flag;
this.meta43628 = meta43628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43629,meta43628__$1){
var self__ = this;
var _43629__$1 = this;
return (new cljs.core.async.t_cljs$core$async43627(self__.flag,meta43628__$1));
}));

(cljs.core.async.t_cljs$core$async43627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43629){
var self__ = this;
var _43629__$1 = this;
return self__.meta43628;
}));

(cljs.core.async.t_cljs$core$async43627.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43628","meta43628",544361034,null)], null);
}));

(cljs.core.async.t_cljs$core$async43627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43627");

(cljs.core.async.t_cljs$core$async43627.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async43627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43627.
 */
cljs.core.async.__GT_t_cljs$core$async43627 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43627(flag__$1,meta43628){
return (new cljs.core.async.t_cljs$core$async43627(flag__$1,meta43628));
});

}

return (new cljs.core.async.t_cljs$core$async43627(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43640 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43640 = (function (flag,cb,meta43641){
this.flag = flag;
this.cb = cb;
this.meta43641 = meta43641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43642,meta43641__$1){
var self__ = this;
var _43642__$1 = this;
return (new cljs.core.async.t_cljs$core$async43640(self__.flag,self__.cb,meta43641__$1));
}));

(cljs.core.async.t_cljs$core$async43640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43642){
var self__ = this;
var _43642__$1 = this;
return self__.meta43641;
}));

(cljs.core.async.t_cljs$core$async43640.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43640.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43641","meta43641",52510729,null)], null);
}));

(cljs.core.async.t_cljs$core$async43640.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43640");

(cljs.core.async.t_cljs$core$async43640.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async43640");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43640.
 */
cljs.core.async.__GT_t_cljs$core$async43640 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43640(flag__$1,cb__$1,meta43641){
return (new cljs.core.async.t_cljs$core$async43640(flag__$1,cb__$1,meta43641));
});

}

return (new cljs.core.async.t_cljs$core$async43640(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43670_SHARP_){
var G__43674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43670_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43674) : fret.call(null,G__43674));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43671_SHARP_){
var G__43675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43671_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43675) : fret.call(null,G__43675));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47560 = (i + (1));
i = G__47560;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47567 = arguments.length;
var i__4819__auto___47568 = (0);
while(true){
if((i__4819__auto___47568 < len__4818__auto___47567)){
args__4824__auto__.push((arguments[i__4819__auto___47568]));

var G__47569 = (i__4819__auto___47568 + (1));
i__4819__auto___47568 = G__47569;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43684){
var map__43685 = p__43684;
var map__43685__$1 = cljs.core.__destructure_map(map__43685);
var opts = map__43685__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43677){
var G__43678 = cljs.core.first(seq43677);
var seq43677__$1 = cljs.core.next(seq43677);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43678,seq43677__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43703 = arguments.length;
switch (G__43703) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43375__auto___47580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_43797){
var state_val_43807 = (state_43797[(1)]);
if((state_val_43807 === (7))){
var inst_43783 = (state_43797[(2)]);
var state_43797__$1 = state_43797;
var statearr_43854_47581 = state_43797__$1;
(statearr_43854_47581[(2)] = inst_43783);

(statearr_43854_47581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (1))){
var state_43797__$1 = state_43797;
var statearr_43855_47582 = state_43797__$1;
(statearr_43855_47582[(2)] = null);

(statearr_43855_47582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (4))){
var inst_43747 = (state_43797[(7)]);
var inst_43747__$1 = (state_43797[(2)]);
var inst_43751 = (inst_43747__$1 == null);
var state_43797__$1 = (function (){var statearr_43872 = state_43797;
(statearr_43872[(7)] = inst_43747__$1);

return statearr_43872;
})();
if(cljs.core.truth_(inst_43751)){
var statearr_43874_47583 = state_43797__$1;
(statearr_43874_47583[(1)] = (5));

} else {
var statearr_43879_47584 = state_43797__$1;
(statearr_43879_47584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (13))){
var state_43797__$1 = state_43797;
var statearr_43881_47585 = state_43797__$1;
(statearr_43881_47585[(2)] = null);

(statearr_43881_47585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (6))){
var inst_43747 = (state_43797[(7)]);
var state_43797__$1 = state_43797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43797__$1,(11),to,inst_43747);
} else {
if((state_val_43807 === (3))){
var inst_43785 = (state_43797[(2)]);
var state_43797__$1 = state_43797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43797__$1,inst_43785);
} else {
if((state_val_43807 === (12))){
var state_43797__$1 = state_43797;
var statearr_43887_47586 = state_43797__$1;
(statearr_43887_47586[(2)] = null);

(statearr_43887_47586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (2))){
var state_43797__$1 = state_43797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43797__$1,(4),from);
} else {
if((state_val_43807 === (11))){
var inst_43773 = (state_43797[(2)]);
var state_43797__$1 = state_43797;
if(cljs.core.truth_(inst_43773)){
var statearr_43890_47594 = state_43797__$1;
(statearr_43890_47594[(1)] = (12));

} else {
var statearr_43891_47595 = state_43797__$1;
(statearr_43891_47595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (9))){
var state_43797__$1 = state_43797;
var statearr_43895_47596 = state_43797__$1;
(statearr_43895_47596[(2)] = null);

(statearr_43895_47596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (5))){
var state_43797__$1 = state_43797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43897_47598 = state_43797__$1;
(statearr_43897_47598[(1)] = (8));

} else {
var statearr_43899_47599 = state_43797__$1;
(statearr_43899_47599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (14))){
var inst_43781 = (state_43797[(2)]);
var state_43797__$1 = state_43797;
var statearr_43907_47600 = state_43797__$1;
(statearr_43907_47600[(2)] = inst_43781);

(statearr_43907_47600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (10))){
var inst_43770 = (state_43797[(2)]);
var state_43797__$1 = state_43797;
var statearr_43917_47601 = state_43797__$1;
(statearr_43917_47601[(2)] = inst_43770);

(statearr_43917_47601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (8))){
var inst_43758 = cljs.core.async.close_BANG_(to);
var state_43797__$1 = state_43797;
var statearr_43923_47602 = state_43797__$1;
(statearr_43923_47602[(2)] = inst_43758);

(statearr_43923_47602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_43926 = [null,null,null,null,null,null,null,null];
(statearr_43926[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_43926[(1)] = (1));

return statearr_43926;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_43797){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_43797);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e43927){var ex__42840__auto__ = e43927;
var statearr_43937_47609 = state_43797;
(statearr_43937_47609[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_43797[(4)]))){
var statearr_43939_47610 = state_43797;
(statearr_43939_47610[(1)] = cljs.core.first((state_43797[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47611 = state_43797;
state_43797 = G__47611;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_43797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_43797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_43940 = f__43376__auto__();
(statearr_43940[(6)] = c__43375__auto___47580);

return statearr_43940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43950){
var vec__43951 = p__43950;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43951,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43951,(1),null);
var job = vec__43951;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43375__auto___47615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_43959){
var state_val_43960 = (state_43959[(1)]);
if((state_val_43960 === (1))){
var state_43959__$1 = state_43959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43959__$1,(2),res,v);
} else {
if((state_val_43960 === (2))){
var inst_43956 = (state_43959[(2)]);
var inst_43957 = cljs.core.async.close_BANG_(res);
var state_43959__$1 = (function (){var statearr_43966 = state_43959;
(statearr_43966[(7)] = inst_43956);

return statearr_43966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43959__$1,inst_43957);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0 = (function (){
var statearr_43969 = [null,null,null,null,null,null,null,null];
(statearr_43969[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__);

(statearr_43969[(1)] = (1));

return statearr_43969;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1 = (function (state_43959){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_43959);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e43972){var ex__42840__auto__ = e43972;
var statearr_43974_47617 = state_43959;
(statearr_43974_47617[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_43959[(4)]))){
var statearr_43975_47618 = state_43959;
(statearr_43975_47618[(1)] = cljs.core.first((state_43959[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47621 = state_43959;
state_43959 = G__47621;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__ = function(state_43959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1.call(this,state_43959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_43977 = f__43376__auto__();
(statearr_43977[(6)] = c__43375__auto___47615);

return statearr_43977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43989){
var vec__43992 = p__43989;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43992,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43992,(1),null);
var job = vec__43992;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___47624 = n;
var __47625 = (0);
while(true){
if((__47625 < n__4695__auto___47624)){
var G__43996_47626 = type;
var G__43996_47627__$1 = (((G__43996_47626 instanceof cljs.core.Keyword))?G__43996_47626.fqn:null);
switch (G__43996_47627__$1) {
case "compute":
var c__43375__auto___47633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47625,c__43375__auto___47633,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async){
return (function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = ((function (__47625,c__43375__auto___47633,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async){
return (function (state_44011){
var state_val_44012 = (state_44011[(1)]);
if((state_val_44012 === (1))){
var state_44011__$1 = state_44011;
var statearr_44021_47634 = state_44011__$1;
(statearr_44021_47634[(2)] = null);

(statearr_44021_47634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (2))){
var state_44011__$1 = state_44011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44011__$1,(4),jobs);
} else {
if((state_val_44012 === (3))){
var inst_44008 = (state_44011[(2)]);
var state_44011__$1 = state_44011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44011__$1,inst_44008);
} else {
if((state_val_44012 === (4))){
var inst_43999 = (state_44011[(2)]);
var inst_44001 = process(inst_43999);
var state_44011__$1 = state_44011;
if(cljs.core.truth_(inst_44001)){
var statearr_44027_47642 = state_44011__$1;
(statearr_44027_47642[(1)] = (5));

} else {
var statearr_44030_47643 = state_44011__$1;
(statearr_44030_47643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (5))){
var state_44011__$1 = state_44011;
var statearr_44032_47649 = state_44011__$1;
(statearr_44032_47649[(2)] = null);

(statearr_44032_47649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (6))){
var state_44011__$1 = state_44011;
var statearr_44043_47652 = state_44011__$1;
(statearr_44043_47652[(2)] = null);

(statearr_44043_47652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (7))){
var inst_44006 = (state_44011[(2)]);
var state_44011__$1 = state_44011;
var statearr_44044_47653 = state_44011__$1;
(statearr_44044_47653[(2)] = inst_44006);

(statearr_44044_47653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47625,c__43375__auto___47633,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async))
;
return ((function (__47625,switch__42835__auto__,c__43375__auto___47633,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0 = (function (){
var statearr_44047 = [null,null,null,null,null,null,null];
(statearr_44047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__);

(statearr_44047[(1)] = (1));

return statearr_44047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1 = (function (state_44011){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_44011);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e44052){var ex__42840__auto__ = e44052;
var statearr_44053_47656 = state_44011;
(statearr_44053_47656[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_44011[(4)]))){
var statearr_44055_47657 = state_44011;
(statearr_44055_47657[(1)] = cljs.core.first((state_44011[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47658 = state_44011;
state_44011 = G__47658;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__ = function(state_44011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1.call(this,state_44011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__;
})()
;})(__47625,switch__42835__auto__,c__43375__auto___47633,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async))
})();
var state__43377__auto__ = (function (){var statearr_44058 = f__43376__auto__();
(statearr_44058[(6)] = c__43375__auto___47633);

return statearr_44058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
});})(__47625,c__43375__auto___47633,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async))
);


break;
case "async":
var c__43375__auto___47663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47625,c__43375__auto___47663,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async){
return (function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = ((function (__47625,c__43375__auto___47663,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async){
return (function (state_44085){
var state_val_44086 = (state_44085[(1)]);
if((state_val_44086 === (1))){
var state_44085__$1 = state_44085;
var statearr_44095_47668 = state_44085__$1;
(statearr_44095_47668[(2)] = null);

(statearr_44095_47668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44086 === (2))){
var state_44085__$1 = state_44085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44085__$1,(4),jobs);
} else {
if((state_val_44086 === (3))){
var inst_44081 = (state_44085[(2)]);
var state_44085__$1 = state_44085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44085__$1,inst_44081);
} else {
if((state_val_44086 === (4))){
var inst_44072 = (state_44085[(2)]);
var inst_44073 = async(inst_44072);
var state_44085__$1 = state_44085;
if(cljs.core.truth_(inst_44073)){
var statearr_44101_47670 = state_44085__$1;
(statearr_44101_47670[(1)] = (5));

} else {
var statearr_44106_47671 = state_44085__$1;
(statearr_44106_47671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44086 === (5))){
var state_44085__$1 = state_44085;
var statearr_44109_47673 = state_44085__$1;
(statearr_44109_47673[(2)] = null);

(statearr_44109_47673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44086 === (6))){
var state_44085__$1 = state_44085;
var statearr_44110_47674 = state_44085__$1;
(statearr_44110_47674[(2)] = null);

(statearr_44110_47674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44086 === (7))){
var inst_44079 = (state_44085[(2)]);
var state_44085__$1 = state_44085;
var statearr_44114_47675 = state_44085__$1;
(statearr_44114_47675[(2)] = inst_44079);

(statearr_44114_47675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47625,c__43375__auto___47663,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async))
;
return ((function (__47625,switch__42835__auto__,c__43375__auto___47663,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0 = (function (){
var statearr_44121 = [null,null,null,null,null,null,null];
(statearr_44121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__);

(statearr_44121[(1)] = (1));

return statearr_44121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1 = (function (state_44085){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_44085);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e44124){var ex__42840__auto__ = e44124;
var statearr_44126_47684 = state_44085;
(statearr_44126_47684[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_44085[(4)]))){
var statearr_44129_47685 = state_44085;
(statearr_44129_47685[(1)] = cljs.core.first((state_44085[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47686 = state_44085;
state_44085 = G__47686;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__ = function(state_44085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1.call(this,state_44085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__;
})()
;})(__47625,switch__42835__auto__,c__43375__auto___47663,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async))
})();
var state__43377__auto__ = (function (){var statearr_44136 = f__43376__auto__();
(statearr_44136[(6)] = c__43375__auto___47663);

return statearr_44136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
});})(__47625,c__43375__auto___47663,G__43996_47626,G__43996_47627__$1,n__4695__auto___47624,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43996_47627__$1)].join('')));

}

var G__47691 = (__47625 + (1));
__47625 = G__47691;
continue;
} else {
}
break;
}

var c__43375__auto___47692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_44165){
var state_val_44166 = (state_44165[(1)]);
if((state_val_44166 === (7))){
var inst_44161 = (state_44165[(2)]);
var state_44165__$1 = state_44165;
var statearr_44179_47693 = state_44165__$1;
(statearr_44179_47693[(2)] = inst_44161);

(statearr_44179_47693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44166 === (1))){
var state_44165__$1 = state_44165;
var statearr_44191_47698 = state_44165__$1;
(statearr_44191_47698[(2)] = null);

(statearr_44191_47698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44166 === (4))){
var inst_44144 = (state_44165[(7)]);
var inst_44144__$1 = (state_44165[(2)]);
var inst_44145 = (inst_44144__$1 == null);
var state_44165__$1 = (function (){var statearr_44197 = state_44165;
(statearr_44197[(7)] = inst_44144__$1);

return statearr_44197;
})();
if(cljs.core.truth_(inst_44145)){
var statearr_44198_47699 = state_44165__$1;
(statearr_44198_47699[(1)] = (5));

} else {
var statearr_44199_47700 = state_44165__$1;
(statearr_44199_47700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44166 === (6))){
var inst_44149 = (state_44165[(8)]);
var inst_44144 = (state_44165[(7)]);
var inst_44149__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44152 = [inst_44144,inst_44149__$1];
var inst_44153 = (new cljs.core.PersistentVector(null,2,(5),inst_44151,inst_44152,null));
var state_44165__$1 = (function (){var statearr_44200 = state_44165;
(statearr_44200[(8)] = inst_44149__$1);

return statearr_44200;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44165__$1,(8),jobs,inst_44153);
} else {
if((state_val_44166 === (3))){
var inst_44163 = (state_44165[(2)]);
var state_44165__$1 = state_44165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44165__$1,inst_44163);
} else {
if((state_val_44166 === (2))){
var state_44165__$1 = state_44165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44165__$1,(4),from);
} else {
if((state_val_44166 === (9))){
var inst_44157 = (state_44165[(2)]);
var state_44165__$1 = (function (){var statearr_44211 = state_44165;
(statearr_44211[(9)] = inst_44157);

return statearr_44211;
})();
var statearr_44213_47703 = state_44165__$1;
(statearr_44213_47703[(2)] = null);

(statearr_44213_47703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44166 === (5))){
var inst_44147 = cljs.core.async.close_BANG_(jobs);
var state_44165__$1 = state_44165;
var statearr_44240_47704 = state_44165__$1;
(statearr_44240_47704[(2)] = inst_44147);

(statearr_44240_47704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44166 === (8))){
var inst_44149 = (state_44165[(8)]);
var inst_44155 = (state_44165[(2)]);
var state_44165__$1 = (function (){var statearr_44242 = state_44165;
(statearr_44242[(10)] = inst_44155);

return statearr_44242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44165__$1,(9),results,inst_44149);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0 = (function (){
var statearr_44247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__);

(statearr_44247[(1)] = (1));

return statearr_44247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1 = (function (state_44165){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_44165);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e44248){var ex__42840__auto__ = e44248;
var statearr_44249_47711 = state_44165;
(statearr_44249_47711[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_44165[(4)]))){
var statearr_44250_47713 = state_44165;
(statearr_44250_47713[(1)] = cljs.core.first((state_44165[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47714 = state_44165;
state_44165 = G__47714;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__ = function(state_44165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1.call(this,state_44165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_44251 = f__43376__auto__();
(statearr_44251[(6)] = c__43375__auto___47692);

return statearr_44251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


var c__43375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_44295){
var state_val_44296 = (state_44295[(1)]);
if((state_val_44296 === (7))){
var inst_44291 = (state_44295[(2)]);
var state_44295__$1 = state_44295;
var statearr_44299_47716 = state_44295__$1;
(statearr_44299_47716[(2)] = inst_44291);

(statearr_44299_47716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (20))){
var state_44295__$1 = state_44295;
var statearr_44301_47717 = state_44295__$1;
(statearr_44301_47717[(2)] = null);

(statearr_44301_47717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (1))){
var state_44295__$1 = state_44295;
var statearr_44306_47719 = state_44295__$1;
(statearr_44306_47719[(2)] = null);

(statearr_44306_47719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (4))){
var inst_44255 = (state_44295[(7)]);
var inst_44255__$1 = (state_44295[(2)]);
var inst_44256 = (inst_44255__$1 == null);
var state_44295__$1 = (function (){var statearr_44307 = state_44295;
(statearr_44307[(7)] = inst_44255__$1);

return statearr_44307;
})();
if(cljs.core.truth_(inst_44256)){
var statearr_44308_47721 = state_44295__$1;
(statearr_44308_47721[(1)] = (5));

} else {
var statearr_44311_47726 = state_44295__$1;
(statearr_44311_47726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (15))){
var inst_44273 = (state_44295[(8)]);
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44295__$1,(18),to,inst_44273);
} else {
if((state_val_44296 === (21))){
var inst_44286 = (state_44295[(2)]);
var state_44295__$1 = state_44295;
var statearr_44312_47732 = state_44295__$1;
(statearr_44312_47732[(2)] = inst_44286);

(statearr_44312_47732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (13))){
var inst_44288 = (state_44295[(2)]);
var state_44295__$1 = (function (){var statearr_44313 = state_44295;
(statearr_44313[(9)] = inst_44288);

return statearr_44313;
})();
var statearr_44314_47737 = state_44295__$1;
(statearr_44314_47737[(2)] = null);

(statearr_44314_47737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (6))){
var inst_44255 = (state_44295[(7)]);
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44295__$1,(11),inst_44255);
} else {
if((state_val_44296 === (17))){
var inst_44281 = (state_44295[(2)]);
var state_44295__$1 = state_44295;
if(cljs.core.truth_(inst_44281)){
var statearr_44315_47738 = state_44295__$1;
(statearr_44315_47738[(1)] = (19));

} else {
var statearr_44316_47739 = state_44295__$1;
(statearr_44316_47739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (3))){
var inst_44293 = (state_44295[(2)]);
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44295__$1,inst_44293);
} else {
if((state_val_44296 === (12))){
var inst_44270 = (state_44295[(10)]);
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44295__$1,(14),inst_44270);
} else {
if((state_val_44296 === (2))){
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44295__$1,(4),results);
} else {
if((state_val_44296 === (19))){
var state_44295__$1 = state_44295;
var statearr_44330_47741 = state_44295__$1;
(statearr_44330_47741[(2)] = null);

(statearr_44330_47741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (11))){
var inst_44270 = (state_44295[(2)]);
var state_44295__$1 = (function (){var statearr_44332 = state_44295;
(statearr_44332[(10)] = inst_44270);

return statearr_44332;
})();
var statearr_44333_47743 = state_44295__$1;
(statearr_44333_47743[(2)] = null);

(statearr_44333_47743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (9))){
var state_44295__$1 = state_44295;
var statearr_44337_47744 = state_44295__$1;
(statearr_44337_47744[(2)] = null);

(statearr_44337_47744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (5))){
var state_44295__$1 = state_44295;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44339_47745 = state_44295__$1;
(statearr_44339_47745[(1)] = (8));

} else {
var statearr_44342_47746 = state_44295__$1;
(statearr_44342_47746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (14))){
var inst_44273 = (state_44295[(8)]);
var inst_44275 = (state_44295[(11)]);
var inst_44273__$1 = (state_44295[(2)]);
var inst_44274 = (inst_44273__$1 == null);
var inst_44275__$1 = cljs.core.not(inst_44274);
var state_44295__$1 = (function (){var statearr_44345 = state_44295;
(statearr_44345[(8)] = inst_44273__$1);

(statearr_44345[(11)] = inst_44275__$1);

return statearr_44345;
})();
if(inst_44275__$1){
var statearr_44346_47747 = state_44295__$1;
(statearr_44346_47747[(1)] = (15));

} else {
var statearr_44347_47748 = state_44295__$1;
(statearr_44347_47748[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (16))){
var inst_44275 = (state_44295[(11)]);
var state_44295__$1 = state_44295;
var statearr_44348_47750 = state_44295__$1;
(statearr_44348_47750[(2)] = inst_44275);

(statearr_44348_47750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (10))){
var inst_44263 = (state_44295[(2)]);
var state_44295__$1 = state_44295;
var statearr_44352_47751 = state_44295__$1;
(statearr_44352_47751[(2)] = inst_44263);

(statearr_44352_47751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (18))){
var inst_44278 = (state_44295[(2)]);
var state_44295__$1 = state_44295;
var statearr_44357_47752 = state_44295__$1;
(statearr_44357_47752[(2)] = inst_44278);

(statearr_44357_47752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (8))){
var inst_44260 = cljs.core.async.close_BANG_(to);
var state_44295__$1 = state_44295;
var statearr_44358_47753 = state_44295__$1;
(statearr_44358_47753[(2)] = inst_44260);

(statearr_44358_47753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0 = (function (){
var statearr_44361 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44361[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__);

(statearr_44361[(1)] = (1));

return statearr_44361;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1 = (function (state_44295){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_44295);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e44363){var ex__42840__auto__ = e44363;
var statearr_44365_47756 = state_44295;
(statearr_44365_47756[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_44295[(4)]))){
var statearr_44366_47763 = state_44295;
(statearr_44366_47763[(1)] = cljs.core.first((state_44295[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47767 = state_44295;
state_44295 = G__47767;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__ = function(state_44295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1.call(this,state_44295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_44370 = f__43376__auto__();
(statearr_44370[(6)] = c__43375__auto__);

return statearr_44370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));

return c__43375__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44376 = arguments.length;
switch (G__44376) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44383 = arguments.length;
switch (G__44383) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44397 = arguments.length;
switch (G__44397) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43375__auto___47776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_44441){
var state_val_44442 = (state_44441[(1)]);
if((state_val_44442 === (7))){
var inst_44437 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44446_47778 = state_44441__$1;
(statearr_44446_47778[(2)] = inst_44437);

(statearr_44446_47778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (1))){
var state_44441__$1 = state_44441;
var statearr_44449_47780 = state_44441__$1;
(statearr_44449_47780[(2)] = null);

(statearr_44449_47780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (4))){
var inst_44417 = (state_44441[(7)]);
var inst_44417__$1 = (state_44441[(2)]);
var inst_44418 = (inst_44417__$1 == null);
var state_44441__$1 = (function (){var statearr_44450 = state_44441;
(statearr_44450[(7)] = inst_44417__$1);

return statearr_44450;
})();
if(cljs.core.truth_(inst_44418)){
var statearr_44452_47785 = state_44441__$1;
(statearr_44452_47785[(1)] = (5));

} else {
var statearr_44453_47786 = state_44441__$1;
(statearr_44453_47786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (13))){
var state_44441__$1 = state_44441;
var statearr_44454_47787 = state_44441__$1;
(statearr_44454_47787[(2)] = null);

(statearr_44454_47787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (6))){
var inst_44417 = (state_44441[(7)]);
var inst_44424 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44417) : p.call(null,inst_44417));
var state_44441__$1 = state_44441;
if(cljs.core.truth_(inst_44424)){
var statearr_44459_47789 = state_44441__$1;
(statearr_44459_47789[(1)] = (9));

} else {
var statearr_44460_47795 = state_44441__$1;
(statearr_44460_47795[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (3))){
var inst_44439 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44441__$1,inst_44439);
} else {
if((state_val_44442 === (12))){
var state_44441__$1 = state_44441;
var statearr_44465_47797 = state_44441__$1;
(statearr_44465_47797[(2)] = null);

(statearr_44465_47797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (2))){
var state_44441__$1 = state_44441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44441__$1,(4),ch);
} else {
if((state_val_44442 === (11))){
var inst_44417 = (state_44441[(7)]);
var inst_44428 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44441__$1,(8),inst_44428,inst_44417);
} else {
if((state_val_44442 === (9))){
var state_44441__$1 = state_44441;
var statearr_44467_47801 = state_44441__$1;
(statearr_44467_47801[(2)] = tc);

(statearr_44467_47801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (5))){
var inst_44421 = cljs.core.async.close_BANG_(tc);
var inst_44422 = cljs.core.async.close_BANG_(fc);
var state_44441__$1 = (function (){var statearr_44474 = state_44441;
(statearr_44474[(8)] = inst_44421);

return statearr_44474;
})();
var statearr_44476_47802 = state_44441__$1;
(statearr_44476_47802[(2)] = inst_44422);

(statearr_44476_47802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (14))){
var inst_44435 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44478_47803 = state_44441__$1;
(statearr_44478_47803[(2)] = inst_44435);

(statearr_44478_47803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (10))){
var state_44441__$1 = state_44441;
var statearr_44480_47805 = state_44441__$1;
(statearr_44480_47805[(2)] = fc);

(statearr_44480_47805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (8))){
var inst_44430 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
if(cljs.core.truth_(inst_44430)){
var statearr_44482_47820 = state_44441__$1;
(statearr_44482_47820[(1)] = (12));

} else {
var statearr_44485_47821 = state_44441__$1;
(statearr_44485_47821[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_44488 = [null,null,null,null,null,null,null,null,null];
(statearr_44488[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_44488[(1)] = (1));

return statearr_44488;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_44441){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_44441);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e44492){var ex__42840__auto__ = e44492;
var statearr_44494_47842 = state_44441;
(statearr_44494_47842[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_44441[(4)]))){
var statearr_44497_47847 = state_44441;
(statearr_44497_47847[(1)] = cljs.core.first((state_44441[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47849 = state_44441;
state_44441 = G__47849;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_44441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_44441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_44501 = f__43376__auto__();
(statearr_44501[(6)] = c__43375__auto___47776);

return statearr_44501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_44529){
var state_val_44530 = (state_44529[(1)]);
if((state_val_44530 === (7))){
var inst_44525 = (state_44529[(2)]);
var state_44529__$1 = state_44529;
var statearr_44538_47867 = state_44529__$1;
(statearr_44538_47867[(2)] = inst_44525);

(statearr_44538_47867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (1))){
var inst_44507 = init;
var inst_44508 = inst_44507;
var state_44529__$1 = (function (){var statearr_44540 = state_44529;
(statearr_44540[(7)] = inst_44508);

return statearr_44540;
})();
var statearr_44541_47869 = state_44529__$1;
(statearr_44541_47869[(2)] = null);

(statearr_44541_47869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (4))){
var inst_44511 = (state_44529[(8)]);
var inst_44511__$1 = (state_44529[(2)]);
var inst_44512 = (inst_44511__$1 == null);
var state_44529__$1 = (function (){var statearr_44544 = state_44529;
(statearr_44544[(8)] = inst_44511__$1);

return statearr_44544;
})();
if(cljs.core.truth_(inst_44512)){
var statearr_44545_47871 = state_44529__$1;
(statearr_44545_47871[(1)] = (5));

} else {
var statearr_44546_47872 = state_44529__$1;
(statearr_44546_47872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (6))){
var inst_44511 = (state_44529[(8)]);
var inst_44515 = (state_44529[(9)]);
var inst_44508 = (state_44529[(7)]);
var inst_44515__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44508,inst_44511) : f.call(null,inst_44508,inst_44511));
var inst_44516 = cljs.core.reduced_QMARK_(inst_44515__$1);
var state_44529__$1 = (function (){var statearr_44549 = state_44529;
(statearr_44549[(9)] = inst_44515__$1);

return statearr_44549;
})();
if(inst_44516){
var statearr_44553_47876 = state_44529__$1;
(statearr_44553_47876[(1)] = (8));

} else {
var statearr_44554_47878 = state_44529__$1;
(statearr_44554_47878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (3))){
var inst_44527 = (state_44529[(2)]);
var state_44529__$1 = state_44529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44529__$1,inst_44527);
} else {
if((state_val_44530 === (2))){
var state_44529__$1 = state_44529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44529__$1,(4),ch);
} else {
if((state_val_44530 === (9))){
var inst_44515 = (state_44529[(9)]);
var inst_44508 = inst_44515;
var state_44529__$1 = (function (){var statearr_44559 = state_44529;
(statearr_44559[(7)] = inst_44508);

return statearr_44559;
})();
var statearr_44561_47879 = state_44529__$1;
(statearr_44561_47879[(2)] = null);

(statearr_44561_47879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (5))){
var inst_44508 = (state_44529[(7)]);
var state_44529__$1 = state_44529;
var statearr_44563_47880 = state_44529__$1;
(statearr_44563_47880[(2)] = inst_44508);

(statearr_44563_47880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (10))){
var inst_44523 = (state_44529[(2)]);
var state_44529__$1 = state_44529;
var statearr_44564_47881 = state_44529__$1;
(statearr_44564_47881[(2)] = inst_44523);

(statearr_44564_47881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (8))){
var inst_44515 = (state_44529[(9)]);
var inst_44519 = cljs.core.deref(inst_44515);
var state_44529__$1 = state_44529;
var statearr_44568_47882 = state_44529__$1;
(statearr_44568_47882[(2)] = inst_44519);

(statearr_44568_47882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42837__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42837__auto____0 = (function (){
var statearr_44574 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44574[(0)] = cljs$core$async$reduce_$_state_machine__42837__auto__);

(statearr_44574[(1)] = (1));

return statearr_44574;
});
var cljs$core$async$reduce_$_state_machine__42837__auto____1 = (function (state_44529){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_44529);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e44578){var ex__42840__auto__ = e44578;
var statearr_44580_47885 = state_44529;
(statearr_44580_47885[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_44529[(4)]))){
var statearr_44583_47886 = state_44529;
(statearr_44583_47886[(1)] = cljs.core.first((state_44529[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47887 = state_44529;
state_44529 = G__47887;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42837__auto__ = function(state_44529){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42837__auto____1.call(this,state_44529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42837__auto____0;
cljs$core$async$reduce_$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42837__auto____1;
return cljs$core$async$reduce_$_state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_44588 = f__43376__auto__();
(statearr_44588[(6)] = c__43375__auto__);

return statearr_44588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));

return c__43375__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_44596){
var state_val_44598 = (state_44596[(1)]);
if((state_val_44598 === (1))){
var inst_44591 = cljs.core.async.reduce(f__$1,init,ch);
var state_44596__$1 = state_44596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44596__$1,(2),inst_44591);
} else {
if((state_val_44598 === (2))){
var inst_44593 = (state_44596[(2)]);
var inst_44594 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44593) : f__$1.call(null,inst_44593));
var state_44596__$1 = state_44596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44596__$1,inst_44594);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42837__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42837__auto____0 = (function (){
var statearr_44602 = [null,null,null,null,null,null,null];
(statearr_44602[(0)] = cljs$core$async$transduce_$_state_machine__42837__auto__);

(statearr_44602[(1)] = (1));

return statearr_44602;
});
var cljs$core$async$transduce_$_state_machine__42837__auto____1 = (function (state_44596){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_44596);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e44607){var ex__42840__auto__ = e44607;
var statearr_44609_47894 = state_44596;
(statearr_44609_47894[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_44596[(4)]))){
var statearr_44615_47897 = state_44596;
(statearr_44615_47897[(1)] = cljs.core.first((state_44596[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47900 = state_44596;
state_44596 = G__47900;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42837__auto__ = function(state_44596){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42837__auto____1.call(this,state_44596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42837__auto____0;
cljs$core$async$transduce_$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42837__auto____1;
return cljs$core$async$transduce_$_state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_44635 = f__43376__auto__();
(statearr_44635[(6)] = c__43375__auto__);

return statearr_44635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));

return c__43375__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44648 = arguments.length;
switch (G__44648) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_44683){
var state_val_44684 = (state_44683[(1)]);
if((state_val_44684 === (7))){
var inst_44665 = (state_44683[(2)]);
var state_44683__$1 = state_44683;
var statearr_44687_47908 = state_44683__$1;
(statearr_44687_47908[(2)] = inst_44665);

(statearr_44687_47908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44684 === (1))){
var inst_44658 = cljs.core.seq(coll);
var inst_44659 = inst_44658;
var state_44683__$1 = (function (){var statearr_44688 = state_44683;
(statearr_44688[(7)] = inst_44659);

return statearr_44688;
})();
var statearr_44689_47909 = state_44683__$1;
(statearr_44689_47909[(2)] = null);

(statearr_44689_47909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44684 === (4))){
var inst_44659 = (state_44683[(7)]);
var inst_44663 = cljs.core.first(inst_44659);
var state_44683__$1 = state_44683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44683__$1,(7),ch,inst_44663);
} else {
if((state_val_44684 === (13))){
var inst_44677 = (state_44683[(2)]);
var state_44683__$1 = state_44683;
var statearr_44692_47910 = state_44683__$1;
(statearr_44692_47910[(2)] = inst_44677);

(statearr_44692_47910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44684 === (6))){
var inst_44668 = (state_44683[(2)]);
var state_44683__$1 = state_44683;
if(cljs.core.truth_(inst_44668)){
var statearr_44697_47912 = state_44683__$1;
(statearr_44697_47912[(1)] = (8));

} else {
var statearr_44699_47919 = state_44683__$1;
(statearr_44699_47919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44684 === (3))){
var inst_44681 = (state_44683[(2)]);
var state_44683__$1 = state_44683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44683__$1,inst_44681);
} else {
if((state_val_44684 === (12))){
var state_44683__$1 = state_44683;
var statearr_44700_47924 = state_44683__$1;
(statearr_44700_47924[(2)] = null);

(statearr_44700_47924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44684 === (2))){
var inst_44659 = (state_44683[(7)]);
var state_44683__$1 = state_44683;
if(cljs.core.truth_(inst_44659)){
var statearr_44701_47931 = state_44683__$1;
(statearr_44701_47931[(1)] = (4));

} else {
var statearr_44703_47934 = state_44683__$1;
(statearr_44703_47934[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44684 === (11))){
var inst_44674 = cljs.core.async.close_BANG_(ch);
var state_44683__$1 = state_44683;
var statearr_44708_47936 = state_44683__$1;
(statearr_44708_47936[(2)] = inst_44674);

(statearr_44708_47936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44684 === (9))){
var state_44683__$1 = state_44683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44709_47939 = state_44683__$1;
(statearr_44709_47939[(1)] = (11));

} else {
var statearr_44710_47941 = state_44683__$1;
(statearr_44710_47941[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44684 === (5))){
var inst_44659 = (state_44683[(7)]);
var state_44683__$1 = state_44683;
var statearr_44712_47942 = state_44683__$1;
(statearr_44712_47942[(2)] = inst_44659);

(statearr_44712_47942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44684 === (10))){
var inst_44679 = (state_44683[(2)]);
var state_44683__$1 = state_44683;
var statearr_44713_47947 = state_44683__$1;
(statearr_44713_47947[(2)] = inst_44679);

(statearr_44713_47947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44684 === (8))){
var inst_44659 = (state_44683[(7)]);
var inst_44670 = cljs.core.next(inst_44659);
var inst_44659__$1 = inst_44670;
var state_44683__$1 = (function (){var statearr_44719 = state_44683;
(statearr_44719[(7)] = inst_44659__$1);

return statearr_44719;
})();
var statearr_44720_47948 = state_44683__$1;
(statearr_44720_47948[(2)] = null);

(statearr_44720_47948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_44723 = [null,null,null,null,null,null,null,null];
(statearr_44723[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_44723[(1)] = (1));

return statearr_44723;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_44683){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_44683);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e44724){var ex__42840__auto__ = e44724;
var statearr_44726_47952 = state_44683;
(statearr_44726_47952[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_44683[(4)]))){
var statearr_44727_47953 = state_44683;
(statearr_44727_47953[(1)] = cljs.core.first((state_44683[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47954 = state_44683;
state_44683 = G__47954;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_44683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_44683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_44733 = f__43376__auto__();
(statearr_44733[(6)] = c__43375__auto__);

return statearr_44733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));

return c__43375__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44741 = arguments.length;
switch (G__44741) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47966 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47966(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47969 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47969(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47978 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47978(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47984 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47984(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44776 = (function (ch,cs,meta44777){
this.ch = ch;
this.cs = cs;
this.meta44777 = meta44777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44778,meta44777__$1){
var self__ = this;
var _44778__$1 = this;
return (new cljs.core.async.t_cljs$core$async44776(self__.ch,self__.cs,meta44777__$1));
}));

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44778){
var self__ = this;
var _44778__$1 = this;
return self__.meta44777;
}));

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44777","meta44777",476218445,null)], null);
}));

(cljs.core.async.t_cljs$core$async44776.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44776");

(cljs.core.async.t_cljs$core$async44776.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async44776");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44776.
 */
cljs.core.async.__GT_t_cljs$core$async44776 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44776(ch__$1,cs__$1,meta44777){
return (new cljs.core.async.t_cljs$core$async44776(ch__$1,cs__$1,meta44777));
});

}

return (new cljs.core.async.t_cljs$core$async44776(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43375__auto___48007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_44970){
var state_val_44971 = (state_44970[(1)]);
if((state_val_44971 === (7))){
var inst_44959 = (state_44970[(2)]);
var state_44970__$1 = state_44970;
var statearr_44987_48008 = state_44970__$1;
(statearr_44987_48008[(2)] = inst_44959);

(statearr_44987_48008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (20))){
var inst_44837 = (state_44970[(7)]);
var inst_44860 = cljs.core.first(inst_44837);
var inst_44861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44860,(0),null);
var inst_44862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44860,(1),null);
var state_44970__$1 = (function (){var statearr_44993 = state_44970;
(statearr_44993[(8)] = inst_44861);

return statearr_44993;
})();
if(cljs.core.truth_(inst_44862)){
var statearr_44998_48013 = state_44970__$1;
(statearr_44998_48013[(1)] = (22));

} else {
var statearr_44999_48014 = state_44970__$1;
(statearr_44999_48014[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (27))){
var inst_44892 = (state_44970[(9)]);
var inst_44901 = (state_44970[(10)]);
var inst_44890 = (state_44970[(11)]);
var inst_44798 = (state_44970[(12)]);
var inst_44901__$1 = cljs.core._nth(inst_44890,inst_44892);
var inst_44902 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44901__$1,inst_44798,done);
var state_44970__$1 = (function (){var statearr_45004 = state_44970;
(statearr_45004[(10)] = inst_44901__$1);

return statearr_45004;
})();
if(cljs.core.truth_(inst_44902)){
var statearr_45006_48018 = state_44970__$1;
(statearr_45006_48018[(1)] = (30));

} else {
var statearr_45011_48019 = state_44970__$1;
(statearr_45011_48019[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (1))){
var state_44970__$1 = state_44970;
var statearr_45012_48021 = state_44970__$1;
(statearr_45012_48021[(2)] = null);

(statearr_45012_48021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (24))){
var inst_44837 = (state_44970[(7)]);
var inst_44867 = (state_44970[(2)]);
var inst_44868 = cljs.core.next(inst_44837);
var inst_44810 = inst_44868;
var inst_44812 = null;
var inst_44814 = (0);
var inst_44815 = (0);
var state_44970__$1 = (function (){var statearr_45016 = state_44970;
(statearr_45016[(13)] = inst_44810);

(statearr_45016[(14)] = inst_44812);

(statearr_45016[(15)] = inst_44815);

(statearr_45016[(16)] = inst_44814);

(statearr_45016[(17)] = inst_44867);

return statearr_45016;
})();
var statearr_45018_48022 = state_44970__$1;
(statearr_45018_48022[(2)] = null);

(statearr_45018_48022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (39))){
var state_44970__$1 = state_44970;
var statearr_45026_48023 = state_44970__$1;
(statearr_45026_48023[(2)] = null);

(statearr_45026_48023[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (4))){
var inst_44798 = (state_44970[(12)]);
var inst_44798__$1 = (state_44970[(2)]);
var inst_44799 = (inst_44798__$1 == null);
var state_44970__$1 = (function (){var statearr_45029 = state_44970;
(statearr_45029[(12)] = inst_44798__$1);

return statearr_45029;
})();
if(cljs.core.truth_(inst_44799)){
var statearr_45031_48025 = state_44970__$1;
(statearr_45031_48025[(1)] = (5));

} else {
var statearr_45032_48026 = state_44970__$1;
(statearr_45032_48026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (15))){
var inst_44810 = (state_44970[(13)]);
var inst_44812 = (state_44970[(14)]);
var inst_44815 = (state_44970[(15)]);
var inst_44814 = (state_44970[(16)]);
var inst_44833 = (state_44970[(2)]);
var inst_44834 = (inst_44815 + (1));
var tmp45022 = inst_44810;
var tmp45023 = inst_44812;
var tmp45024 = inst_44814;
var inst_44810__$1 = tmp45022;
var inst_44812__$1 = tmp45023;
var inst_44814__$1 = tmp45024;
var inst_44815__$1 = inst_44834;
var state_44970__$1 = (function (){var statearr_45041 = state_44970;
(statearr_45041[(13)] = inst_44810__$1);

(statearr_45041[(18)] = inst_44833);

(statearr_45041[(14)] = inst_44812__$1);

(statearr_45041[(15)] = inst_44815__$1);

(statearr_45041[(16)] = inst_44814__$1);

return statearr_45041;
})();
var statearr_45042_48027 = state_44970__$1;
(statearr_45042_48027[(2)] = null);

(statearr_45042_48027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (21))){
var inst_44871 = (state_44970[(2)]);
var state_44970__$1 = state_44970;
var statearr_45053_48028 = state_44970__$1;
(statearr_45053_48028[(2)] = inst_44871);

(statearr_45053_48028[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (31))){
var inst_44901 = (state_44970[(10)]);
var inst_44905 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44901);
var state_44970__$1 = state_44970;
var statearr_45060_48029 = state_44970__$1;
(statearr_45060_48029[(2)] = inst_44905);

(statearr_45060_48029[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (32))){
var inst_44892 = (state_44970[(9)]);
var inst_44891 = (state_44970[(19)]);
var inst_44890 = (state_44970[(11)]);
var inst_44889 = (state_44970[(20)]);
var inst_44907 = (state_44970[(2)]);
var inst_44909 = (inst_44892 + (1));
var tmp45046 = inst_44891;
var tmp45047 = inst_44890;
var tmp45048 = inst_44889;
var inst_44889__$1 = tmp45048;
var inst_44890__$1 = tmp45047;
var inst_44891__$1 = tmp45046;
var inst_44892__$1 = inst_44909;
var state_44970__$1 = (function (){var statearr_45065 = state_44970;
(statearr_45065[(9)] = inst_44892__$1);

(statearr_45065[(19)] = inst_44891__$1);

(statearr_45065[(21)] = inst_44907);

(statearr_45065[(11)] = inst_44890__$1);

(statearr_45065[(20)] = inst_44889__$1);

return statearr_45065;
})();
var statearr_45067_48032 = state_44970__$1;
(statearr_45067_48032[(2)] = null);

(statearr_45067_48032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (40))){
var inst_44926 = (state_44970[(22)]);
var inst_44930 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44926);
var state_44970__$1 = state_44970;
var statearr_45071_48033 = state_44970__$1;
(statearr_45071_48033[(2)] = inst_44930);

(statearr_45071_48033[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (33))){
var inst_44912 = (state_44970[(23)]);
var inst_44917 = cljs.core.chunked_seq_QMARK_(inst_44912);
var state_44970__$1 = state_44970;
if(inst_44917){
var statearr_45073_48034 = state_44970__$1;
(statearr_45073_48034[(1)] = (36));

} else {
var statearr_45074_48035 = state_44970__$1;
(statearr_45074_48035[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (13))){
var inst_44825 = (state_44970[(24)]);
var inst_44830 = cljs.core.async.close_BANG_(inst_44825);
var state_44970__$1 = state_44970;
var statearr_45082_48036 = state_44970__$1;
(statearr_45082_48036[(2)] = inst_44830);

(statearr_45082_48036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (22))){
var inst_44861 = (state_44970[(8)]);
var inst_44864 = cljs.core.async.close_BANG_(inst_44861);
var state_44970__$1 = state_44970;
var statearr_45086_48038 = state_44970__$1;
(statearr_45086_48038[(2)] = inst_44864);

(statearr_45086_48038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (36))){
var inst_44912 = (state_44970[(23)]);
var inst_44919 = cljs.core.chunk_first(inst_44912);
var inst_44920 = cljs.core.chunk_rest(inst_44912);
var inst_44922 = cljs.core.count(inst_44919);
var inst_44889 = inst_44920;
var inst_44890 = inst_44919;
var inst_44891 = inst_44922;
var inst_44892 = (0);
var state_44970__$1 = (function (){var statearr_45100 = state_44970;
(statearr_45100[(9)] = inst_44892);

(statearr_45100[(19)] = inst_44891);

(statearr_45100[(11)] = inst_44890);

(statearr_45100[(20)] = inst_44889);

return statearr_45100;
})();
var statearr_45105_48039 = state_44970__$1;
(statearr_45105_48039[(2)] = null);

(statearr_45105_48039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (41))){
var inst_44912 = (state_44970[(23)]);
var inst_44932 = (state_44970[(2)]);
var inst_44935 = cljs.core.next(inst_44912);
var inst_44889 = inst_44935;
var inst_44890 = null;
var inst_44891 = (0);
var inst_44892 = (0);
var state_44970__$1 = (function (){var statearr_45113 = state_44970;
(statearr_45113[(9)] = inst_44892);

(statearr_45113[(19)] = inst_44891);

(statearr_45113[(25)] = inst_44932);

(statearr_45113[(11)] = inst_44890);

(statearr_45113[(20)] = inst_44889);

return statearr_45113;
})();
var statearr_45114_48043 = state_44970__$1;
(statearr_45114_48043[(2)] = null);

(statearr_45114_48043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (43))){
var state_44970__$1 = state_44970;
var statearr_45118_48044 = state_44970__$1;
(statearr_45118_48044[(2)] = null);

(statearr_45118_48044[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (29))){
var inst_44944 = (state_44970[(2)]);
var state_44970__$1 = state_44970;
var statearr_45122_48045 = state_44970__$1;
(statearr_45122_48045[(2)] = inst_44944);

(statearr_45122_48045[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (44))){
var inst_44953 = (state_44970[(2)]);
var state_44970__$1 = (function (){var statearr_45124 = state_44970;
(statearr_45124[(26)] = inst_44953);

return statearr_45124;
})();
var statearr_45127_48046 = state_44970__$1;
(statearr_45127_48046[(2)] = null);

(statearr_45127_48046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (6))){
var inst_44881 = (state_44970[(27)]);
var inst_44880 = cljs.core.deref(cs);
var inst_44881__$1 = cljs.core.keys(inst_44880);
var inst_44882 = cljs.core.count(inst_44881__$1);
var inst_44883 = cljs.core.reset_BANG_(dctr,inst_44882);
var inst_44888 = cljs.core.seq(inst_44881__$1);
var inst_44889 = inst_44888;
var inst_44890 = null;
var inst_44891 = (0);
var inst_44892 = (0);
var state_44970__$1 = (function (){var statearr_45142 = state_44970;
(statearr_45142[(9)] = inst_44892);

(statearr_45142[(19)] = inst_44891);

(statearr_45142[(27)] = inst_44881__$1);

(statearr_45142[(11)] = inst_44890);

(statearr_45142[(28)] = inst_44883);

(statearr_45142[(20)] = inst_44889);

return statearr_45142;
})();
var statearr_45143_48048 = state_44970__$1;
(statearr_45143_48048[(2)] = null);

(statearr_45143_48048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (28))){
var inst_44912 = (state_44970[(23)]);
var inst_44889 = (state_44970[(20)]);
var inst_44912__$1 = cljs.core.seq(inst_44889);
var state_44970__$1 = (function (){var statearr_45148 = state_44970;
(statearr_45148[(23)] = inst_44912__$1);

return statearr_45148;
})();
if(inst_44912__$1){
var statearr_45149_48050 = state_44970__$1;
(statearr_45149_48050[(1)] = (33));

} else {
var statearr_45150_48051 = state_44970__$1;
(statearr_45150_48051[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (25))){
var inst_44892 = (state_44970[(9)]);
var inst_44891 = (state_44970[(19)]);
var inst_44895 = (inst_44892 < inst_44891);
var inst_44896 = inst_44895;
var state_44970__$1 = state_44970;
if(cljs.core.truth_(inst_44896)){
var statearr_45155_48052 = state_44970__$1;
(statearr_45155_48052[(1)] = (27));

} else {
var statearr_45158_48053 = state_44970__$1;
(statearr_45158_48053[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (34))){
var state_44970__$1 = state_44970;
var statearr_45160_48055 = state_44970__$1;
(statearr_45160_48055[(2)] = null);

(statearr_45160_48055[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (17))){
var state_44970__$1 = state_44970;
var statearr_45162_48057 = state_44970__$1;
(statearr_45162_48057[(2)] = null);

(statearr_45162_48057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (3))){
var inst_44961 = (state_44970[(2)]);
var state_44970__$1 = state_44970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44970__$1,inst_44961);
} else {
if((state_val_44971 === (12))){
var inst_44876 = (state_44970[(2)]);
var state_44970__$1 = state_44970;
var statearr_45165_48059 = state_44970__$1;
(statearr_45165_48059[(2)] = inst_44876);

(statearr_45165_48059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (2))){
var state_44970__$1 = state_44970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44970__$1,(4),ch);
} else {
if((state_val_44971 === (23))){
var state_44970__$1 = state_44970;
var statearr_45169_48061 = state_44970__$1;
(statearr_45169_48061[(2)] = null);

(statearr_45169_48061[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (35))){
var inst_44941 = (state_44970[(2)]);
var state_44970__$1 = state_44970;
var statearr_45172_48064 = state_44970__$1;
(statearr_45172_48064[(2)] = inst_44941);

(statearr_45172_48064[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (19))){
var inst_44837 = (state_44970[(7)]);
var inst_44847 = cljs.core.chunk_first(inst_44837);
var inst_44849 = cljs.core.chunk_rest(inst_44837);
var inst_44850 = cljs.core.count(inst_44847);
var inst_44810 = inst_44849;
var inst_44812 = inst_44847;
var inst_44814 = inst_44850;
var inst_44815 = (0);
var state_44970__$1 = (function (){var statearr_45176 = state_44970;
(statearr_45176[(13)] = inst_44810);

(statearr_45176[(14)] = inst_44812);

(statearr_45176[(15)] = inst_44815);

(statearr_45176[(16)] = inst_44814);

return statearr_45176;
})();
var statearr_45178_48071 = state_44970__$1;
(statearr_45178_48071[(2)] = null);

(statearr_45178_48071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (11))){
var inst_44810 = (state_44970[(13)]);
var inst_44837 = (state_44970[(7)]);
var inst_44837__$1 = cljs.core.seq(inst_44810);
var state_44970__$1 = (function (){var statearr_45188 = state_44970;
(statearr_45188[(7)] = inst_44837__$1);

return statearr_45188;
})();
if(inst_44837__$1){
var statearr_45192_48073 = state_44970__$1;
(statearr_45192_48073[(1)] = (16));

} else {
var statearr_45193_48074 = state_44970__$1;
(statearr_45193_48074[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (9))){
var inst_44878 = (state_44970[(2)]);
var state_44970__$1 = state_44970;
var statearr_45200_48076 = state_44970__$1;
(statearr_45200_48076[(2)] = inst_44878);

(statearr_45200_48076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (5))){
var inst_44808 = cljs.core.deref(cs);
var inst_44809 = cljs.core.seq(inst_44808);
var inst_44810 = inst_44809;
var inst_44812 = null;
var inst_44814 = (0);
var inst_44815 = (0);
var state_44970__$1 = (function (){var statearr_45205 = state_44970;
(statearr_45205[(13)] = inst_44810);

(statearr_45205[(14)] = inst_44812);

(statearr_45205[(15)] = inst_44815);

(statearr_45205[(16)] = inst_44814);

return statearr_45205;
})();
var statearr_45209_48078 = state_44970__$1;
(statearr_45209_48078[(2)] = null);

(statearr_45209_48078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (14))){
var state_44970__$1 = state_44970;
var statearr_45211_48080 = state_44970__$1;
(statearr_45211_48080[(2)] = null);

(statearr_45211_48080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (45))){
var inst_44950 = (state_44970[(2)]);
var state_44970__$1 = state_44970;
var statearr_45214_48081 = state_44970__$1;
(statearr_45214_48081[(2)] = inst_44950);

(statearr_45214_48081[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (26))){
var inst_44881 = (state_44970[(27)]);
var inst_44946 = (state_44970[(2)]);
var inst_44947 = cljs.core.seq(inst_44881);
var state_44970__$1 = (function (){var statearr_45216 = state_44970;
(statearr_45216[(29)] = inst_44946);

return statearr_45216;
})();
if(inst_44947){
var statearr_45218_48084 = state_44970__$1;
(statearr_45218_48084[(1)] = (42));

} else {
var statearr_45219_48085 = state_44970__$1;
(statearr_45219_48085[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (16))){
var inst_44837 = (state_44970[(7)]);
var inst_44842 = cljs.core.chunked_seq_QMARK_(inst_44837);
var state_44970__$1 = state_44970;
if(inst_44842){
var statearr_45221_48086 = state_44970__$1;
(statearr_45221_48086[(1)] = (19));

} else {
var statearr_45223_48087 = state_44970__$1;
(statearr_45223_48087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (38))){
var inst_44938 = (state_44970[(2)]);
var state_44970__$1 = state_44970;
var statearr_45227_48088 = state_44970__$1;
(statearr_45227_48088[(2)] = inst_44938);

(statearr_45227_48088[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (30))){
var state_44970__$1 = state_44970;
var statearr_45228_48089 = state_44970__$1;
(statearr_45228_48089[(2)] = null);

(statearr_45228_48089[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (10))){
var inst_44812 = (state_44970[(14)]);
var inst_44815 = (state_44970[(15)]);
var inst_44823 = cljs.core._nth(inst_44812,inst_44815);
var inst_44825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44823,(0),null);
var inst_44827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44823,(1),null);
var state_44970__$1 = (function (){var statearr_45230 = state_44970;
(statearr_45230[(24)] = inst_44825);

return statearr_45230;
})();
if(cljs.core.truth_(inst_44827)){
var statearr_45233_48090 = state_44970__$1;
(statearr_45233_48090[(1)] = (13));

} else {
var statearr_45238_48091 = state_44970__$1;
(statearr_45238_48091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (18))){
var inst_44874 = (state_44970[(2)]);
var state_44970__$1 = state_44970;
var statearr_45240_48092 = state_44970__$1;
(statearr_45240_48092[(2)] = inst_44874);

(statearr_45240_48092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (42))){
var state_44970__$1 = state_44970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44970__$1,(45),dchan);
} else {
if((state_val_44971 === (37))){
var inst_44926 = (state_44970[(22)]);
var inst_44912 = (state_44970[(23)]);
var inst_44798 = (state_44970[(12)]);
var inst_44926__$1 = cljs.core.first(inst_44912);
var inst_44927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44926__$1,inst_44798,done);
var state_44970__$1 = (function (){var statearr_45251 = state_44970;
(statearr_45251[(22)] = inst_44926__$1);

return statearr_45251;
})();
if(cljs.core.truth_(inst_44927)){
var statearr_45253_48095 = state_44970__$1;
(statearr_45253_48095[(1)] = (39));

} else {
var statearr_45254_48096 = state_44970__$1;
(statearr_45254_48096[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44971 === (8))){
var inst_44815 = (state_44970[(15)]);
var inst_44814 = (state_44970[(16)]);
var inst_44817 = (inst_44815 < inst_44814);
var inst_44818 = inst_44817;
var state_44970__$1 = state_44970;
if(cljs.core.truth_(inst_44818)){
var statearr_45258_48097 = state_44970__$1;
(statearr_45258_48097[(1)] = (10));

} else {
var statearr_45260_48098 = state_44970__$1;
(statearr_45260_48098[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42837__auto__ = null;
var cljs$core$async$mult_$_state_machine__42837__auto____0 = (function (){
var statearr_45266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45266[(0)] = cljs$core$async$mult_$_state_machine__42837__auto__);

(statearr_45266[(1)] = (1));

return statearr_45266;
});
var cljs$core$async$mult_$_state_machine__42837__auto____1 = (function (state_44970){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_44970);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e45267){var ex__42840__auto__ = e45267;
var statearr_45275_48106 = state_44970;
(statearr_45275_48106[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_44970[(4)]))){
var statearr_45277_48108 = state_44970;
(statearr_45277_48108[(1)] = cljs.core.first((state_44970[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48111 = state_44970;
state_44970 = G__48111;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42837__auto__ = function(state_44970){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42837__auto____1.call(this,state_44970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42837__auto____0;
cljs$core$async$mult_$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42837__auto____1;
return cljs$core$async$mult_$_state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_45283 = f__43376__auto__();
(statearr_45283[(6)] = c__43375__auto___48007);

return statearr_45283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45294 = arguments.length;
switch (G__45294) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_48120 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48120(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48121 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48121(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48129 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48129(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48138 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48138(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48140 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48140(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48141 = arguments.length;
var i__4819__auto___48142 = (0);
while(true){
if((i__4819__auto___48142 < len__4818__auto___48141)){
args__4824__auto__.push((arguments[i__4819__auto___48142]));

var G__48143 = (i__4819__auto___48142 + (1));
i__4819__auto___48142 = G__48143;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45371){
var map__45372 = p__45371;
var map__45372__$1 = cljs.core.__destructure_map(map__45372);
var opts = map__45372__$1;
var statearr_45374_48145 = state;
(statearr_45374_48145[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45383_48146 = state;
(statearr_45383_48146[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45386_48147 = state;
(statearr_45386_48147[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45362){
var G__45363 = cljs.core.first(seq45362);
var seq45362__$1 = cljs.core.next(seq45362);
var G__45364 = cljs.core.first(seq45362__$1);
var seq45362__$2 = cljs.core.next(seq45362__$1);
var G__45365 = cljs.core.first(seq45362__$2);
var seq45362__$3 = cljs.core.next(seq45362__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45363,G__45364,G__45365,seq45362__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45402 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45403){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45403 = meta45403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45404,meta45403__$1){
var self__ = this;
var _45404__$1 = this;
return (new cljs.core.async.t_cljs$core$async45402(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45403__$1));
}));

(cljs.core.async.t_cljs$core$async45402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45404){
var self__ = this;
var _45404__$1 = this;
return self__.meta45403;
}));

(cljs.core.async.t_cljs$core$async45402.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45402.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45402.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45402.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45402.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45402.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45402.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45403","meta45403",1554020901,null)], null);
}));

(cljs.core.async.t_cljs$core$async45402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45402");

(cljs.core.async.t_cljs$core$async45402.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45402.
 */
cljs.core.async.__GT_t_cljs$core$async45402 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45402(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45403){
return (new cljs.core.async.t_cljs$core$async45402(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45403));
});

}

return (new cljs.core.async.t_cljs$core$async45402(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43375__auto___48188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_45523){
var state_val_45524 = (state_45523[(1)]);
if((state_val_45524 === (7))){
var inst_45475 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
if(cljs.core.truth_(inst_45475)){
var statearr_45527_48190 = state_45523__$1;
(statearr_45527_48190[(1)] = (8));

} else {
var statearr_45529_48191 = state_45523__$1;
(statearr_45529_48191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (20))){
var inst_45468 = (state_45523[(7)]);
var state_45523__$1 = state_45523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45523__$1,(23),out,inst_45468);
} else {
if((state_val_45524 === (1))){
var inst_45447 = calc_state();
var inst_45448 = cljs.core.__destructure_map(inst_45447);
var inst_45450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45448,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45448,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45448,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45453 = inst_45447;
var state_45523__$1 = (function (){var statearr_45533 = state_45523;
(statearr_45533[(8)] = inst_45451);

(statearr_45533[(9)] = inst_45453);

(statearr_45533[(10)] = inst_45450);

(statearr_45533[(11)] = inst_45452);

return statearr_45533;
})();
var statearr_45536_48198 = state_45523__$1;
(statearr_45536_48198[(2)] = null);

(statearr_45536_48198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (24))){
var inst_45456 = (state_45523[(12)]);
var inst_45453 = inst_45456;
var state_45523__$1 = (function (){var statearr_45538 = state_45523;
(statearr_45538[(9)] = inst_45453);

return statearr_45538;
})();
var statearr_45539_48205 = state_45523__$1;
(statearr_45539_48205[(2)] = null);

(statearr_45539_48205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (4))){
var inst_45468 = (state_45523[(7)]);
var inst_45470 = (state_45523[(13)]);
var inst_45464 = (state_45523[(2)]);
var inst_45468__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45464,(0),null);
var inst_45469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45464,(1),null);
var inst_45470__$1 = (inst_45468__$1 == null);
var state_45523__$1 = (function (){var statearr_45550 = state_45523;
(statearr_45550[(14)] = inst_45469);

(statearr_45550[(7)] = inst_45468__$1);

(statearr_45550[(13)] = inst_45470__$1);

return statearr_45550;
})();
if(cljs.core.truth_(inst_45470__$1)){
var statearr_45552_48218 = state_45523__$1;
(statearr_45552_48218[(1)] = (5));

} else {
var statearr_45554_48220 = state_45523__$1;
(statearr_45554_48220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (15))){
var inst_45490 = (state_45523[(15)]);
var inst_45457 = (state_45523[(16)]);
var inst_45490__$1 = cljs.core.empty_QMARK_(inst_45457);
var state_45523__$1 = (function (){var statearr_45556 = state_45523;
(statearr_45556[(15)] = inst_45490__$1);

return statearr_45556;
})();
if(inst_45490__$1){
var statearr_45557_48229 = state_45523__$1;
(statearr_45557_48229[(1)] = (17));

} else {
var statearr_45561_48230 = state_45523__$1;
(statearr_45561_48230[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (21))){
var inst_45456 = (state_45523[(12)]);
var inst_45453 = inst_45456;
var state_45523__$1 = (function (){var statearr_45564 = state_45523;
(statearr_45564[(9)] = inst_45453);

return statearr_45564;
})();
var statearr_45565_48231 = state_45523__$1;
(statearr_45565_48231[(2)] = null);

(statearr_45565_48231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (13))){
var inst_45483 = (state_45523[(2)]);
var inst_45484 = calc_state();
var inst_45453 = inst_45484;
var state_45523__$1 = (function (){var statearr_45570 = state_45523;
(statearr_45570[(9)] = inst_45453);

(statearr_45570[(17)] = inst_45483);

return statearr_45570;
})();
var statearr_45571_48232 = state_45523__$1;
(statearr_45571_48232[(2)] = null);

(statearr_45571_48232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (22))){
var inst_45514 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45572_48233 = state_45523__$1;
(statearr_45572_48233[(2)] = inst_45514);

(statearr_45572_48233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (6))){
var inst_45469 = (state_45523[(14)]);
var inst_45473 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45469,change);
var state_45523__$1 = state_45523;
var statearr_45577_48237 = state_45523__$1;
(statearr_45577_48237[(2)] = inst_45473);

(statearr_45577_48237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (25))){
var state_45523__$1 = state_45523;
var statearr_45579_48238 = state_45523__$1;
(statearr_45579_48238[(2)] = null);

(statearr_45579_48238[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (17))){
var inst_45469 = (state_45523[(14)]);
var inst_45458 = (state_45523[(18)]);
var inst_45492 = (inst_45458.cljs$core$IFn$_invoke$arity$1 ? inst_45458.cljs$core$IFn$_invoke$arity$1(inst_45469) : inst_45458.call(null,inst_45469));
var inst_45493 = cljs.core.not(inst_45492);
var state_45523__$1 = state_45523;
var statearr_45580_48239 = state_45523__$1;
(statearr_45580_48239[(2)] = inst_45493);

(statearr_45580_48239[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (3))){
var inst_45518 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45523__$1,inst_45518);
} else {
if((state_val_45524 === (12))){
var state_45523__$1 = state_45523;
var statearr_45588_48240 = state_45523__$1;
(statearr_45588_48240[(2)] = null);

(statearr_45588_48240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (2))){
var inst_45453 = (state_45523[(9)]);
var inst_45456 = (state_45523[(12)]);
var inst_45456__$1 = cljs.core.__destructure_map(inst_45453);
var inst_45457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45456__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45456__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45456__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45523__$1 = (function (){var statearr_45594 = state_45523;
(statearr_45594[(18)] = inst_45458);

(statearr_45594[(16)] = inst_45457);

(statearr_45594[(12)] = inst_45456__$1);

return statearr_45594;
})();
return cljs.core.async.ioc_alts_BANG_(state_45523__$1,(4),inst_45459);
} else {
if((state_val_45524 === (23))){
var inst_45501 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
if(cljs.core.truth_(inst_45501)){
var statearr_45600_48241 = state_45523__$1;
(statearr_45600_48241[(1)] = (24));

} else {
var statearr_45601_48242 = state_45523__$1;
(statearr_45601_48242[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (19))){
var inst_45496 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45605_48243 = state_45523__$1;
(statearr_45605_48243[(2)] = inst_45496);

(statearr_45605_48243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (11))){
var inst_45469 = (state_45523[(14)]);
var inst_45480 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45469);
var state_45523__$1 = state_45523;
var statearr_45610_48244 = state_45523__$1;
(statearr_45610_48244[(2)] = inst_45480);

(statearr_45610_48244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (9))){
var inst_45469 = (state_45523[(14)]);
var inst_45487 = (state_45523[(19)]);
var inst_45457 = (state_45523[(16)]);
var inst_45487__$1 = (inst_45457.cljs$core$IFn$_invoke$arity$1 ? inst_45457.cljs$core$IFn$_invoke$arity$1(inst_45469) : inst_45457.call(null,inst_45469));
var state_45523__$1 = (function (){var statearr_45615 = state_45523;
(statearr_45615[(19)] = inst_45487__$1);

return statearr_45615;
})();
if(cljs.core.truth_(inst_45487__$1)){
var statearr_45616_48245 = state_45523__$1;
(statearr_45616_48245[(1)] = (14));

} else {
var statearr_45620_48250 = state_45523__$1;
(statearr_45620_48250[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (5))){
var inst_45470 = (state_45523[(13)]);
var state_45523__$1 = state_45523;
var statearr_45625_48257 = state_45523__$1;
(statearr_45625_48257[(2)] = inst_45470);

(statearr_45625_48257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (14))){
var inst_45487 = (state_45523[(19)]);
var state_45523__$1 = state_45523;
var statearr_45626_48259 = state_45523__$1;
(statearr_45626_48259[(2)] = inst_45487);

(statearr_45626_48259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (26))){
var inst_45508 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45630_48263 = state_45523__$1;
(statearr_45630_48263[(2)] = inst_45508);

(statearr_45630_48263[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (16))){
var inst_45498 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
if(cljs.core.truth_(inst_45498)){
var statearr_45632_48264 = state_45523__$1;
(statearr_45632_48264[(1)] = (20));

} else {
var statearr_45633_48265 = state_45523__$1;
(statearr_45633_48265[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (10))){
var inst_45516 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45634_48268 = state_45523__$1;
(statearr_45634_48268[(2)] = inst_45516);

(statearr_45634_48268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (18))){
var inst_45490 = (state_45523[(15)]);
var state_45523__$1 = state_45523;
var statearr_45638_48274 = state_45523__$1;
(statearr_45638_48274[(2)] = inst_45490);

(statearr_45638_48274[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (8))){
var inst_45468 = (state_45523[(7)]);
var inst_45478 = (inst_45468 == null);
var state_45523__$1 = state_45523;
if(cljs.core.truth_(inst_45478)){
var statearr_45648_48279 = state_45523__$1;
(statearr_45648_48279[(1)] = (11));

} else {
var statearr_45649_48280 = state_45523__$1;
(statearr_45649_48280[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42837__auto__ = null;
var cljs$core$async$mix_$_state_machine__42837__auto____0 = (function (){
var statearr_45654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45654[(0)] = cljs$core$async$mix_$_state_machine__42837__auto__);

(statearr_45654[(1)] = (1));

return statearr_45654;
});
var cljs$core$async$mix_$_state_machine__42837__auto____1 = (function (state_45523){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_45523);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e45657){var ex__42840__auto__ = e45657;
var statearr_45658_48285 = state_45523;
(statearr_45658_48285[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_45523[(4)]))){
var statearr_45659_48286 = state_45523;
(statearr_45659_48286[(1)] = cljs.core.first((state_45523[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48287 = state_45523;
state_45523 = G__48287;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42837__auto__ = function(state_45523){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42837__auto____1.call(this,state_45523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42837__auto____0;
cljs$core$async$mix_$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42837__auto____1;
return cljs$core$async$mix_$_state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_45660 = f__43376__auto__();
(statearr_45660[(6)] = c__43375__auto___48188);

return statearr_45660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48292 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48292(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48298 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48298(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48303 = (function() {
var G__48304 = null;
var G__48304__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48304__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48304 = function(p,v){
switch(arguments.length){
case 1:
return G__48304__1.call(this,p);
case 2:
return G__48304__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48304.cljs$core$IFn$_invoke$arity$1 = G__48304__1;
G__48304.cljs$core$IFn$_invoke$arity$2 = G__48304__2;
return G__48304;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45707 = arguments.length;
switch (G__45707) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48303(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48303(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45716 = arguments.length;
switch (G__45716) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45712_SHARP_){
if(cljs.core.truth_((p1__45712_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45712_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45712_SHARP_.call(null,topic)))){
return p1__45712_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45712_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45732 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45733){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45733 = meta45733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45734,meta45733__$1){
var self__ = this;
var _45734__$1 = this;
return (new cljs.core.async.t_cljs$core$async45732(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45733__$1));
}));

(cljs.core.async.t_cljs$core$async45732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45734){
var self__ = this;
var _45734__$1 = this;
return self__.meta45733;
}));

(cljs.core.async.t_cljs$core$async45732.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45732.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45732.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45732.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45732.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45732.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45733","meta45733",934031106,null)], null);
}));

(cljs.core.async.t_cljs$core$async45732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45732");

(cljs.core.async.t_cljs$core$async45732.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45732.
 */
cljs.core.async.__GT_t_cljs$core$async45732 = (function cljs$core$async$__GT_t_cljs$core$async45732(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45733){
return (new cljs.core.async.t_cljs$core$async45732(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45733));
});

}

return (new cljs.core.async.t_cljs$core$async45732(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43375__auto___48327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_45849){
var state_val_45850 = (state_45849[(1)]);
if((state_val_45850 === (7))){
var inst_45841 = (state_45849[(2)]);
var state_45849__$1 = state_45849;
var statearr_45856_48330 = state_45849__$1;
(statearr_45856_48330[(2)] = inst_45841);

(statearr_45856_48330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (20))){
var state_45849__$1 = state_45849;
var statearr_45858_48332 = state_45849__$1;
(statearr_45858_48332[(2)] = null);

(statearr_45858_48332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (1))){
var state_45849__$1 = state_45849;
var statearr_45860_48334 = state_45849__$1;
(statearr_45860_48334[(2)] = null);

(statearr_45860_48334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (24))){
var inst_45820 = (state_45849[(7)]);
var inst_45829 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45820);
var state_45849__$1 = state_45849;
var statearr_45862_48339 = state_45849__$1;
(statearr_45862_48339[(2)] = inst_45829);

(statearr_45862_48339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (4))){
var inst_45754 = (state_45849[(8)]);
var inst_45754__$1 = (state_45849[(2)]);
var inst_45755 = (inst_45754__$1 == null);
var state_45849__$1 = (function (){var statearr_45865 = state_45849;
(statearr_45865[(8)] = inst_45754__$1);

return statearr_45865;
})();
if(cljs.core.truth_(inst_45755)){
var statearr_45866_48343 = state_45849__$1;
(statearr_45866_48343[(1)] = (5));

} else {
var statearr_45867_48344 = state_45849__$1;
(statearr_45867_48344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (15))){
var inst_45814 = (state_45849[(2)]);
var state_45849__$1 = state_45849;
var statearr_45872_48346 = state_45849__$1;
(statearr_45872_48346[(2)] = inst_45814);

(statearr_45872_48346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (21))){
var inst_45838 = (state_45849[(2)]);
var state_45849__$1 = (function (){var statearr_45879 = state_45849;
(statearr_45879[(9)] = inst_45838);

return statearr_45879;
})();
var statearr_45880_48349 = state_45849__$1;
(statearr_45880_48349[(2)] = null);

(statearr_45880_48349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (13))){
var inst_45788 = (state_45849[(10)]);
var inst_45793 = cljs.core.chunked_seq_QMARK_(inst_45788);
var state_45849__$1 = state_45849;
if(inst_45793){
var statearr_45885_48352 = state_45849__$1;
(statearr_45885_48352[(1)] = (16));

} else {
var statearr_45886_48354 = state_45849__$1;
(statearr_45886_48354[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (22))){
var inst_45826 = (state_45849[(2)]);
var state_45849__$1 = state_45849;
if(cljs.core.truth_(inst_45826)){
var statearr_45891_48357 = state_45849__$1;
(statearr_45891_48357[(1)] = (23));

} else {
var statearr_45892_48358 = state_45849__$1;
(statearr_45892_48358[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (6))){
var inst_45820 = (state_45849[(7)]);
var inst_45754 = (state_45849[(8)]);
var inst_45822 = (state_45849[(11)]);
var inst_45820__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45754) : topic_fn.call(null,inst_45754));
var inst_45821 = cljs.core.deref(mults);
var inst_45822__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45821,inst_45820__$1);
var state_45849__$1 = (function (){var statearr_45897 = state_45849;
(statearr_45897[(7)] = inst_45820__$1);

(statearr_45897[(11)] = inst_45822__$1);

return statearr_45897;
})();
if(cljs.core.truth_(inst_45822__$1)){
var statearr_45898_48362 = state_45849__$1;
(statearr_45898_48362[(1)] = (19));

} else {
var statearr_45899_48364 = state_45849__$1;
(statearr_45899_48364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (25))){
var inst_45835 = (state_45849[(2)]);
var state_45849__$1 = state_45849;
var statearr_45913_48366 = state_45849__$1;
(statearr_45913_48366[(2)] = inst_45835);

(statearr_45913_48366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (17))){
var inst_45788 = (state_45849[(10)]);
var inst_45805 = cljs.core.first(inst_45788);
var inst_45806 = cljs.core.async.muxch_STAR_(inst_45805);
var inst_45807 = cljs.core.async.close_BANG_(inst_45806);
var inst_45808 = cljs.core.next(inst_45788);
var inst_45770 = inst_45808;
var inst_45771 = null;
var inst_45772 = (0);
var inst_45773 = (0);
var state_45849__$1 = (function (){var statearr_45922 = state_45849;
(statearr_45922[(12)] = inst_45773);

(statearr_45922[(13)] = inst_45772);

(statearr_45922[(14)] = inst_45807);

(statearr_45922[(15)] = inst_45771);

(statearr_45922[(16)] = inst_45770);

return statearr_45922;
})();
var statearr_45925_48371 = state_45849__$1;
(statearr_45925_48371[(2)] = null);

(statearr_45925_48371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (3))){
var inst_45843 = (state_45849[(2)]);
var state_45849__$1 = state_45849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45849__$1,inst_45843);
} else {
if((state_val_45850 === (12))){
var inst_45816 = (state_45849[(2)]);
var state_45849__$1 = state_45849;
var statearr_45926_48376 = state_45849__$1;
(statearr_45926_48376[(2)] = inst_45816);

(statearr_45926_48376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (2))){
var state_45849__$1 = state_45849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45849__$1,(4),ch);
} else {
if((state_val_45850 === (23))){
var state_45849__$1 = state_45849;
var statearr_45934_48379 = state_45849__$1;
(statearr_45934_48379[(2)] = null);

(statearr_45934_48379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (19))){
var inst_45754 = (state_45849[(8)]);
var inst_45822 = (state_45849[(11)]);
var inst_45824 = cljs.core.async.muxch_STAR_(inst_45822);
var state_45849__$1 = state_45849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45849__$1,(22),inst_45824,inst_45754);
} else {
if((state_val_45850 === (11))){
var inst_45788 = (state_45849[(10)]);
var inst_45770 = (state_45849[(16)]);
var inst_45788__$1 = cljs.core.seq(inst_45770);
var state_45849__$1 = (function (){var statearr_45938 = state_45849;
(statearr_45938[(10)] = inst_45788__$1);

return statearr_45938;
})();
if(inst_45788__$1){
var statearr_45943_48389 = state_45849__$1;
(statearr_45943_48389[(1)] = (13));

} else {
var statearr_45944_48392 = state_45849__$1;
(statearr_45944_48392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (9))){
var inst_45818 = (state_45849[(2)]);
var state_45849__$1 = state_45849;
var statearr_45949_48396 = state_45849__$1;
(statearr_45949_48396[(2)] = inst_45818);

(statearr_45949_48396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (5))){
var inst_45767 = cljs.core.deref(mults);
var inst_45768 = cljs.core.vals(inst_45767);
var inst_45769 = cljs.core.seq(inst_45768);
var inst_45770 = inst_45769;
var inst_45771 = null;
var inst_45772 = (0);
var inst_45773 = (0);
var state_45849__$1 = (function (){var statearr_45951 = state_45849;
(statearr_45951[(12)] = inst_45773);

(statearr_45951[(13)] = inst_45772);

(statearr_45951[(15)] = inst_45771);

(statearr_45951[(16)] = inst_45770);

return statearr_45951;
})();
var statearr_45952_48397 = state_45849__$1;
(statearr_45952_48397[(2)] = null);

(statearr_45952_48397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (14))){
var state_45849__$1 = state_45849;
var statearr_45956_48402 = state_45849__$1;
(statearr_45956_48402[(2)] = null);

(statearr_45956_48402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (16))){
var inst_45788 = (state_45849[(10)]);
var inst_45798 = cljs.core.chunk_first(inst_45788);
var inst_45799 = cljs.core.chunk_rest(inst_45788);
var inst_45800 = cljs.core.count(inst_45798);
var inst_45770 = inst_45799;
var inst_45771 = inst_45798;
var inst_45772 = inst_45800;
var inst_45773 = (0);
var state_45849__$1 = (function (){var statearr_45961 = state_45849;
(statearr_45961[(12)] = inst_45773);

(statearr_45961[(13)] = inst_45772);

(statearr_45961[(15)] = inst_45771);

(statearr_45961[(16)] = inst_45770);

return statearr_45961;
})();
var statearr_45962_48409 = state_45849__$1;
(statearr_45962_48409[(2)] = null);

(statearr_45962_48409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (10))){
var inst_45773 = (state_45849[(12)]);
var inst_45772 = (state_45849[(13)]);
var inst_45771 = (state_45849[(15)]);
var inst_45770 = (state_45849[(16)]);
var inst_45780 = cljs.core._nth(inst_45771,inst_45773);
var inst_45783 = cljs.core.async.muxch_STAR_(inst_45780);
var inst_45784 = cljs.core.async.close_BANG_(inst_45783);
var inst_45785 = (inst_45773 + (1));
var tmp45953 = inst_45772;
var tmp45954 = inst_45771;
var tmp45955 = inst_45770;
var inst_45770__$1 = tmp45955;
var inst_45771__$1 = tmp45954;
var inst_45772__$1 = tmp45953;
var inst_45773__$1 = inst_45785;
var state_45849__$1 = (function (){var statearr_45963 = state_45849;
(statearr_45963[(12)] = inst_45773__$1);

(statearr_45963[(13)] = inst_45772__$1);

(statearr_45963[(15)] = inst_45771__$1);

(statearr_45963[(16)] = inst_45770__$1);

(statearr_45963[(17)] = inst_45784);

return statearr_45963;
})();
var statearr_45968_48416 = state_45849__$1;
(statearr_45968_48416[(2)] = null);

(statearr_45968_48416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (18))){
var inst_45811 = (state_45849[(2)]);
var state_45849__$1 = state_45849;
var statearr_45970_48424 = state_45849__$1;
(statearr_45970_48424[(2)] = inst_45811);

(statearr_45970_48424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45850 === (8))){
var inst_45773 = (state_45849[(12)]);
var inst_45772 = (state_45849[(13)]);
var inst_45777 = (inst_45773 < inst_45772);
var inst_45778 = inst_45777;
var state_45849__$1 = state_45849;
if(cljs.core.truth_(inst_45778)){
var statearr_45971_48426 = state_45849__$1;
(statearr_45971_48426[(1)] = (10));

} else {
var statearr_45972_48428 = state_45849__$1;
(statearr_45972_48428[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_45976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45976[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_45976[(1)] = (1));

return statearr_45976;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_45849){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_45849);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e45977){var ex__42840__auto__ = e45977;
var statearr_45978_48434 = state_45849;
(statearr_45978_48434[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_45849[(4)]))){
var statearr_45979_48437 = state_45849;
(statearr_45979_48437[(1)] = cljs.core.first((state_45849[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48438 = state_45849;
state_45849 = G__48438;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_45849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_45849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_45981 = f__43376__auto__();
(statearr_45981[(6)] = c__43375__auto___48327);

return statearr_45981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45987 = arguments.length;
switch (G__45987) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45996 = arguments.length;
switch (G__45996) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46001 = arguments.length;
switch (G__46001) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43375__auto___48477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_46071){
var state_val_46072 = (state_46071[(1)]);
if((state_val_46072 === (7))){
var state_46071__$1 = state_46071;
var statearr_46077_48485 = state_46071__$1;
(statearr_46077_48485[(2)] = null);

(statearr_46077_48485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (1))){
var state_46071__$1 = state_46071;
var statearr_46089_48486 = state_46071__$1;
(statearr_46089_48486[(2)] = null);

(statearr_46089_48486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (4))){
var inst_46014 = (state_46071[(7)]);
var inst_46016 = (state_46071[(8)]);
var inst_46018 = (inst_46016 < inst_46014);
var state_46071__$1 = state_46071;
if(cljs.core.truth_(inst_46018)){
var statearr_46097_48491 = state_46071__$1;
(statearr_46097_48491[(1)] = (6));

} else {
var statearr_46098_48492 = state_46071__$1;
(statearr_46098_48492[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (15))){
var inst_46057 = (state_46071[(9)]);
var inst_46062 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46057);
var state_46071__$1 = state_46071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46071__$1,(17),out,inst_46062);
} else {
if((state_val_46072 === (13))){
var inst_46057 = (state_46071[(9)]);
var inst_46057__$1 = (state_46071[(2)]);
var inst_46058 = cljs.core.some(cljs.core.nil_QMARK_,inst_46057__$1);
var state_46071__$1 = (function (){var statearr_46099 = state_46071;
(statearr_46099[(9)] = inst_46057__$1);

return statearr_46099;
})();
if(cljs.core.truth_(inst_46058)){
var statearr_46100_48495 = state_46071__$1;
(statearr_46100_48495[(1)] = (14));

} else {
var statearr_46105_48496 = state_46071__$1;
(statearr_46105_48496[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (6))){
var state_46071__$1 = state_46071;
var statearr_46106_48497 = state_46071__$1;
(statearr_46106_48497[(2)] = null);

(statearr_46106_48497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (17))){
var inst_46064 = (state_46071[(2)]);
var state_46071__$1 = (function (){var statearr_46115 = state_46071;
(statearr_46115[(10)] = inst_46064);

return statearr_46115;
})();
var statearr_46116_48504 = state_46071__$1;
(statearr_46116_48504[(2)] = null);

(statearr_46116_48504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (3))){
var inst_46069 = (state_46071[(2)]);
var state_46071__$1 = state_46071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46071__$1,inst_46069);
} else {
if((state_val_46072 === (12))){
var _ = (function (){var statearr_46117 = state_46071;
(statearr_46117[(4)] = cljs.core.rest((state_46071[(4)])));

return statearr_46117;
})();
var state_46071__$1 = state_46071;
var ex46112 = (state_46071__$1[(2)]);
var statearr_46118_48507 = state_46071__$1;
(statearr_46118_48507[(5)] = ex46112);


if((ex46112 instanceof Object)){
var statearr_46123_48509 = state_46071__$1;
(statearr_46123_48509[(1)] = (11));

(statearr_46123_48509[(5)] = null);

} else {
throw ex46112;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (2))){
var inst_46013 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46014 = cnt;
var inst_46016 = (0);
var state_46071__$1 = (function (){var statearr_46128 = state_46071;
(statearr_46128[(7)] = inst_46014);

(statearr_46128[(8)] = inst_46016);

(statearr_46128[(11)] = inst_46013);

return statearr_46128;
})();
var statearr_46131_48515 = state_46071__$1;
(statearr_46131_48515[(2)] = null);

(statearr_46131_48515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (11))){
var inst_46033 = (state_46071[(2)]);
var inst_46034 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46071__$1 = (function (){var statearr_46134 = state_46071;
(statearr_46134[(12)] = inst_46033);

return statearr_46134;
})();
var statearr_46135_48519 = state_46071__$1;
(statearr_46135_48519[(2)] = inst_46034);

(statearr_46135_48519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (9))){
var inst_46016 = (state_46071[(8)]);
var _ = (function (){var statearr_46137 = state_46071;
(statearr_46137[(4)] = cljs.core.cons((12),(state_46071[(4)])));

return statearr_46137;
})();
var inst_46040 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46016) : chs__$1.call(null,inst_46016));
var inst_46041 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46016) : done.call(null,inst_46016));
var inst_46042 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46040,inst_46041);
var ___$1 = (function (){var statearr_46139 = state_46071;
(statearr_46139[(4)] = cljs.core.rest((state_46071[(4)])));

return statearr_46139;
})();
var state_46071__$1 = state_46071;
var statearr_46140_48523 = state_46071__$1;
(statearr_46140_48523[(2)] = inst_46042);

(statearr_46140_48523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (5))){
var inst_46055 = (state_46071[(2)]);
var state_46071__$1 = (function (){var statearr_46141 = state_46071;
(statearr_46141[(13)] = inst_46055);

return statearr_46141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46071__$1,(13),dchan);
} else {
if((state_val_46072 === (14))){
var inst_46060 = cljs.core.async.close_BANG_(out);
var state_46071__$1 = state_46071;
var statearr_46144_48525 = state_46071__$1;
(statearr_46144_48525[(2)] = inst_46060);

(statearr_46144_48525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (16))){
var inst_46067 = (state_46071[(2)]);
var state_46071__$1 = state_46071;
var statearr_46145_48526 = state_46071__$1;
(statearr_46145_48526[(2)] = inst_46067);

(statearr_46145_48526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (10))){
var inst_46016 = (state_46071[(8)]);
var inst_46045 = (state_46071[(2)]);
var inst_46049 = (inst_46016 + (1));
var inst_46016__$1 = inst_46049;
var state_46071__$1 = (function (){var statearr_46146 = state_46071;
(statearr_46146[(8)] = inst_46016__$1);

(statearr_46146[(14)] = inst_46045);

return statearr_46146;
})();
var statearr_46149_48529 = state_46071__$1;
(statearr_46149_48529[(2)] = null);

(statearr_46149_48529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46072 === (8))){
var inst_46053 = (state_46071[(2)]);
var state_46071__$1 = state_46071;
var statearr_46150_48530 = state_46071__$1;
(statearr_46150_48530[(2)] = inst_46053);

(statearr_46150_48530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_46152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46152[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_46152[(1)] = (1));

return statearr_46152;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_46071){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_46071);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e46153){var ex__42840__auto__ = e46153;
var statearr_46156_48533 = state_46071;
(statearr_46156_48533[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_46071[(4)]))){
var statearr_46161_48534 = state_46071;
(statearr_46161_48534[(1)] = cljs.core.first((state_46071[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48535 = state_46071;
state_46071 = G__48535;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_46071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_46071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_46163 = f__43376__auto__();
(statearr_46163[(6)] = c__43375__auto___48477);

return statearr_46163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46174 = arguments.length;
switch (G__46174) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43375__auto___48547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_46221){
var state_val_46222 = (state_46221[(1)]);
if((state_val_46222 === (7))){
var inst_46191 = (state_46221[(7)]);
var inst_46190 = (state_46221[(8)]);
var inst_46190__$1 = (state_46221[(2)]);
var inst_46191__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46190__$1,(0),null);
var inst_46192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46190__$1,(1),null);
var inst_46193 = (inst_46191__$1 == null);
var state_46221__$1 = (function (){var statearr_46225 = state_46221;
(statearr_46225[(9)] = inst_46192);

(statearr_46225[(7)] = inst_46191__$1);

(statearr_46225[(8)] = inst_46190__$1);

return statearr_46225;
})();
if(cljs.core.truth_(inst_46193)){
var statearr_46226_48552 = state_46221__$1;
(statearr_46226_48552[(1)] = (8));

} else {
var statearr_46227_48553 = state_46221__$1;
(statearr_46227_48553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46222 === (1))){
var inst_46180 = cljs.core.vec(chs);
var inst_46181 = inst_46180;
var state_46221__$1 = (function (){var statearr_46228 = state_46221;
(statearr_46228[(10)] = inst_46181);

return statearr_46228;
})();
var statearr_46232_48555 = state_46221__$1;
(statearr_46232_48555[(2)] = null);

(statearr_46232_48555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46222 === (4))){
var inst_46181 = (state_46221[(10)]);
var state_46221__$1 = state_46221;
return cljs.core.async.ioc_alts_BANG_(state_46221__$1,(7),inst_46181);
} else {
if((state_val_46222 === (6))){
var inst_46209 = (state_46221[(2)]);
var state_46221__$1 = state_46221;
var statearr_46233_48561 = state_46221__$1;
(statearr_46233_48561[(2)] = inst_46209);

(statearr_46233_48561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46222 === (3))){
var inst_46211 = (state_46221[(2)]);
var state_46221__$1 = state_46221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46221__$1,inst_46211);
} else {
if((state_val_46222 === (2))){
var inst_46181 = (state_46221[(10)]);
var inst_46183 = cljs.core.count(inst_46181);
var inst_46184 = (inst_46183 > (0));
var state_46221__$1 = state_46221;
if(cljs.core.truth_(inst_46184)){
var statearr_46235_48562 = state_46221__$1;
(statearr_46235_48562[(1)] = (4));

} else {
var statearr_46236_48563 = state_46221__$1;
(statearr_46236_48563[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46222 === (11))){
var inst_46181 = (state_46221[(10)]);
var inst_46201 = (state_46221[(2)]);
var tmp46234 = inst_46181;
var inst_46181__$1 = tmp46234;
var state_46221__$1 = (function (){var statearr_46239 = state_46221;
(statearr_46239[(10)] = inst_46181__$1);

(statearr_46239[(11)] = inst_46201);

return statearr_46239;
})();
var statearr_46243_48564 = state_46221__$1;
(statearr_46243_48564[(2)] = null);

(statearr_46243_48564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46222 === (9))){
var inst_46191 = (state_46221[(7)]);
var state_46221__$1 = state_46221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46221__$1,(11),out,inst_46191);
} else {
if((state_val_46222 === (5))){
var inst_46207 = cljs.core.async.close_BANG_(out);
var state_46221__$1 = state_46221;
var statearr_46253_48570 = state_46221__$1;
(statearr_46253_48570[(2)] = inst_46207);

(statearr_46253_48570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46222 === (10))){
var inst_46204 = (state_46221[(2)]);
var state_46221__$1 = state_46221;
var statearr_46255_48571 = state_46221__$1;
(statearr_46255_48571[(2)] = inst_46204);

(statearr_46255_48571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46222 === (8))){
var inst_46192 = (state_46221[(9)]);
var inst_46191 = (state_46221[(7)]);
var inst_46181 = (state_46221[(10)]);
var inst_46190 = (state_46221[(8)]);
var inst_46195 = (function (){var cs = inst_46181;
var vec__46186 = inst_46190;
var v = inst_46191;
var c = inst_46192;
return (function (p1__46168_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46168_SHARP_);
});
})();
var inst_46196 = cljs.core.filterv(inst_46195,inst_46181);
var inst_46181__$1 = inst_46196;
var state_46221__$1 = (function (){var statearr_46268 = state_46221;
(statearr_46268[(10)] = inst_46181__$1);

return statearr_46268;
})();
var statearr_46269_48572 = state_46221__$1;
(statearr_46269_48572[(2)] = null);

(statearr_46269_48572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_46276 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46276[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_46276[(1)] = (1));

return statearr_46276;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_46221){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_46221);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e46277){var ex__42840__auto__ = e46277;
var statearr_46278_48590 = state_46221;
(statearr_46278_48590[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_46221[(4)]))){
var statearr_46279_48592 = state_46221;
(statearr_46279_48592[(1)] = cljs.core.first((state_46221[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48600 = state_46221;
state_46221 = G__48600;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_46221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_46221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_46283 = f__43376__auto__();
(statearr_46283[(6)] = c__43375__auto___48547);

return statearr_46283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46295 = arguments.length;
switch (G__46295) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43375__auto___48610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_46336){
var state_val_46337 = (state_46336[(1)]);
if((state_val_46337 === (7))){
var inst_46317 = (state_46336[(7)]);
var inst_46317__$1 = (state_46336[(2)]);
var inst_46318 = (inst_46317__$1 == null);
var inst_46319 = cljs.core.not(inst_46318);
var state_46336__$1 = (function (){var statearr_46340 = state_46336;
(statearr_46340[(7)] = inst_46317__$1);

return statearr_46340;
})();
if(inst_46319){
var statearr_46343_48614 = state_46336__$1;
(statearr_46343_48614[(1)] = (8));

} else {
var statearr_46345_48615 = state_46336__$1;
(statearr_46345_48615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (1))){
var inst_46310 = (0);
var state_46336__$1 = (function (){var statearr_46347 = state_46336;
(statearr_46347[(8)] = inst_46310);

return statearr_46347;
})();
var statearr_46352_48616 = state_46336__$1;
(statearr_46352_48616[(2)] = null);

(statearr_46352_48616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (4))){
var state_46336__$1 = state_46336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46336__$1,(7),ch);
} else {
if((state_val_46337 === (6))){
var inst_46330 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
var statearr_46357_48617 = state_46336__$1;
(statearr_46357_48617[(2)] = inst_46330);

(statearr_46357_48617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (3))){
var inst_46332 = (state_46336[(2)]);
var inst_46333 = cljs.core.async.close_BANG_(out);
var state_46336__$1 = (function (){var statearr_46362 = state_46336;
(statearr_46362[(9)] = inst_46332);

return statearr_46362;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46336__$1,inst_46333);
} else {
if((state_val_46337 === (2))){
var inst_46310 = (state_46336[(8)]);
var inst_46314 = (inst_46310 < n);
var state_46336__$1 = state_46336;
if(cljs.core.truth_(inst_46314)){
var statearr_46364_48622 = state_46336__$1;
(statearr_46364_48622[(1)] = (4));

} else {
var statearr_46365_48623 = state_46336__$1;
(statearr_46365_48623[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (11))){
var inst_46310 = (state_46336[(8)]);
var inst_46322 = (state_46336[(2)]);
var inst_46323 = (inst_46310 + (1));
var inst_46310__$1 = inst_46323;
var state_46336__$1 = (function (){var statearr_46368 = state_46336;
(statearr_46368[(8)] = inst_46310__$1);

(statearr_46368[(10)] = inst_46322);

return statearr_46368;
})();
var statearr_46369_48625 = state_46336__$1;
(statearr_46369_48625[(2)] = null);

(statearr_46369_48625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (9))){
var state_46336__$1 = state_46336;
var statearr_46374_48630 = state_46336__$1;
(statearr_46374_48630[(2)] = null);

(statearr_46374_48630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (5))){
var state_46336__$1 = state_46336;
var statearr_46376_48631 = state_46336__$1;
(statearr_46376_48631[(2)] = null);

(statearr_46376_48631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (10))){
var inst_46327 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
var statearr_46380_48632 = state_46336__$1;
(statearr_46380_48632[(2)] = inst_46327);

(statearr_46380_48632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (8))){
var inst_46317 = (state_46336[(7)]);
var state_46336__$1 = state_46336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46336__$1,(11),out,inst_46317);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_46383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46383[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_46383[(1)] = (1));

return statearr_46383;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_46336){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_46336);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e46390){var ex__42840__auto__ = e46390;
var statearr_46392_48633 = state_46336;
(statearr_46392_48633[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_46336[(4)]))){
var statearr_46393_48634 = state_46336;
(statearr_46393_48634[(1)] = cljs.core.first((state_46336[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48635 = state_46336;
state_46336 = G__48635;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_46336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_46336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_46396 = f__43376__auto__();
(statearr_46396[(6)] = c__43375__auto___48610);

return statearr_46396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46409 = (function (f,ch,meta46410){
this.f = f;
this.ch = ch;
this.meta46410 = meta46410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46411,meta46410__$1){
var self__ = this;
var _46411__$1 = this;
return (new cljs.core.async.t_cljs$core$async46409(self__.f,self__.ch,meta46410__$1));
}));

(cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46411){
var self__ = this;
var _46411__$1 = this;
return self__.meta46410;
}));

(cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46413 = (function (f,ch,meta46410,_,fn1,meta46414){
this.f = f;
this.ch = ch;
this.meta46410 = meta46410;
this._ = _;
this.fn1 = fn1;
this.meta46414 = meta46414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46415,meta46414__$1){
var self__ = this;
var _46415__$1 = this;
return (new cljs.core.async.t_cljs$core$async46413(self__.f,self__.ch,self__.meta46410,self__._,self__.fn1,meta46414__$1));
}));

(cljs.core.async.t_cljs$core$async46413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46415){
var self__ = this;
var _46415__$1 = this;
return self__.meta46414;
}));

(cljs.core.async.t_cljs$core$async46413.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46413.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46403_SHARP_){
var G__46439 = (((p1__46403_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46403_SHARP_) : self__.f.call(null,p1__46403_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46439) : f1.call(null,G__46439));
});
}));

(cljs.core.async.t_cljs$core$async46413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46410","meta46410",209262393,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46409","cljs.core.async/t_cljs$core$async46409",1159072014,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46414","meta46414",-633388080,null)], null);
}));

(cljs.core.async.t_cljs$core$async46413.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46413");

(cljs.core.async.t_cljs$core$async46413.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46413");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46413.
 */
cljs.core.async.__GT_t_cljs$core$async46413 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46413(f__$1,ch__$1,meta46410__$1,___$2,fn1__$1,meta46414){
return (new cljs.core.async.t_cljs$core$async46413(f__$1,ch__$1,meta46410__$1,___$2,fn1__$1,meta46414));
});

}

return (new cljs.core.async.t_cljs$core$async46413(self__.f,self__.ch,self__.meta46410,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46486 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46486) : self__.f.call(null,G__46486));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46410","meta46410",209262393,null)], null);
}));

(cljs.core.async.t_cljs$core$async46409.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46409");

(cljs.core.async.t_cljs$core$async46409.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46409");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46409.
 */
cljs.core.async.__GT_t_cljs$core$async46409 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46409(f__$1,ch__$1,meta46410){
return (new cljs.core.async.t_cljs$core$async46409(f__$1,ch__$1,meta46410));
});

}

return (new cljs.core.async.t_cljs$core$async46409(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46518 = (function (f,ch,meta46519){
this.f = f;
this.ch = ch;
this.meta46519 = meta46519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46520,meta46519__$1){
var self__ = this;
var _46520__$1 = this;
return (new cljs.core.async.t_cljs$core$async46518(self__.f,self__.ch,meta46519__$1));
}));

(cljs.core.async.t_cljs$core$async46518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46520){
var self__ = this;
var _46520__$1 = this;
return self__.meta46519;
}));

(cljs.core.async.t_cljs$core$async46518.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46518.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46518.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46519","meta46519",-1743194769,null)], null);
}));

(cljs.core.async.t_cljs$core$async46518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46518");

(cljs.core.async.t_cljs$core$async46518.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46518.
 */
cljs.core.async.__GT_t_cljs$core$async46518 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46518(f__$1,ch__$1,meta46519){
return (new cljs.core.async.t_cljs$core$async46518(f__$1,ch__$1,meta46519));
});

}

return (new cljs.core.async.t_cljs$core$async46518(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46559 = (function (p,ch,meta46560){
this.p = p;
this.ch = ch;
this.meta46560 = meta46560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46561,meta46560__$1){
var self__ = this;
var _46561__$1 = this;
return (new cljs.core.async.t_cljs$core$async46559(self__.p,self__.ch,meta46560__$1));
}));

(cljs.core.async.t_cljs$core$async46559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46561){
var self__ = this;
var _46561__$1 = this;
return self__.meta46560;
}));

(cljs.core.async.t_cljs$core$async46559.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46559.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46559.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46559.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46559.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46559.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46559.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46560","meta46560",1165443901,null)], null);
}));

(cljs.core.async.t_cljs$core$async46559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46559");

(cljs.core.async.t_cljs$core$async46559.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46559.
 */
cljs.core.async.__GT_t_cljs$core$async46559 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46559(p__$1,ch__$1,meta46560){
return (new cljs.core.async.t_cljs$core$async46559(p__$1,ch__$1,meta46560));
});

}

return (new cljs.core.async.t_cljs$core$async46559(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46600 = arguments.length;
switch (G__46600) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43375__auto___48720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_46623){
var state_val_46624 = (state_46623[(1)]);
if((state_val_46624 === (7))){
var inst_46619 = (state_46623[(2)]);
var state_46623__$1 = state_46623;
var statearr_46629_48727 = state_46623__$1;
(statearr_46629_48727[(2)] = inst_46619);

(statearr_46629_48727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46624 === (1))){
var state_46623__$1 = state_46623;
var statearr_46631_48730 = state_46623__$1;
(statearr_46631_48730[(2)] = null);

(statearr_46631_48730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46624 === (4))){
var inst_46605 = (state_46623[(7)]);
var inst_46605__$1 = (state_46623[(2)]);
var inst_46606 = (inst_46605__$1 == null);
var state_46623__$1 = (function (){var statearr_46634 = state_46623;
(statearr_46634[(7)] = inst_46605__$1);

return statearr_46634;
})();
if(cljs.core.truth_(inst_46606)){
var statearr_46636_48739 = state_46623__$1;
(statearr_46636_48739[(1)] = (5));

} else {
var statearr_46637_48740 = state_46623__$1;
(statearr_46637_48740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46624 === (6))){
var inst_46605 = (state_46623[(7)]);
var inst_46610 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46605) : p.call(null,inst_46605));
var state_46623__$1 = state_46623;
if(cljs.core.truth_(inst_46610)){
var statearr_46638_48742 = state_46623__$1;
(statearr_46638_48742[(1)] = (8));

} else {
var statearr_46639_48747 = state_46623__$1;
(statearr_46639_48747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46624 === (3))){
var inst_46621 = (state_46623[(2)]);
var state_46623__$1 = state_46623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46623__$1,inst_46621);
} else {
if((state_val_46624 === (2))){
var state_46623__$1 = state_46623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46623__$1,(4),ch);
} else {
if((state_val_46624 === (11))){
var inst_46613 = (state_46623[(2)]);
var state_46623__$1 = state_46623;
var statearr_46663_48753 = state_46623__$1;
(statearr_46663_48753[(2)] = inst_46613);

(statearr_46663_48753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46624 === (9))){
var state_46623__$1 = state_46623;
var statearr_46664_48754 = state_46623__$1;
(statearr_46664_48754[(2)] = null);

(statearr_46664_48754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46624 === (5))){
var inst_46608 = cljs.core.async.close_BANG_(out);
var state_46623__$1 = state_46623;
var statearr_46668_48759 = state_46623__$1;
(statearr_46668_48759[(2)] = inst_46608);

(statearr_46668_48759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46624 === (10))){
var inst_46616 = (state_46623[(2)]);
var state_46623__$1 = (function (){var statearr_46669 = state_46623;
(statearr_46669[(8)] = inst_46616);

return statearr_46669;
})();
var statearr_46670_48763 = state_46623__$1;
(statearr_46670_48763[(2)] = null);

(statearr_46670_48763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46624 === (8))){
var inst_46605 = (state_46623[(7)]);
var state_46623__$1 = state_46623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46623__$1,(11),out,inst_46605);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_46679 = [null,null,null,null,null,null,null,null,null];
(statearr_46679[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_46679[(1)] = (1));

return statearr_46679;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_46623){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_46623);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e46684){var ex__42840__auto__ = e46684;
var statearr_46685_48766 = state_46623;
(statearr_46685_48766[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_46623[(4)]))){
var statearr_46686_48771 = state_46623;
(statearr_46686_48771[(1)] = cljs.core.first((state_46623[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48772 = state_46623;
state_46623 = G__48772;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_46623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_46623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_46694 = f__43376__auto__();
(statearr_46694[(6)] = c__43375__auto___48720);

return statearr_46694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46696 = arguments.length;
switch (G__46696) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_46777){
var state_val_46778 = (state_46777[(1)]);
if((state_val_46778 === (7))){
var inst_46772 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
var statearr_46780_48780 = state_46777__$1;
(statearr_46780_48780[(2)] = inst_46772);

(statearr_46780_48780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (20))){
var inst_46738 = (state_46777[(7)]);
var inst_46753 = (state_46777[(2)]);
var inst_46754 = cljs.core.next(inst_46738);
var inst_46716 = inst_46754;
var inst_46718 = null;
var inst_46719 = (0);
var inst_46721 = (0);
var state_46777__$1 = (function (){var statearr_46787 = state_46777;
(statearr_46787[(8)] = inst_46721);

(statearr_46787[(9)] = inst_46718);

(statearr_46787[(10)] = inst_46716);

(statearr_46787[(11)] = inst_46719);

(statearr_46787[(12)] = inst_46753);

return statearr_46787;
})();
var statearr_46788_48782 = state_46777__$1;
(statearr_46788_48782[(2)] = null);

(statearr_46788_48782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (1))){
var state_46777__$1 = state_46777;
var statearr_46794_48784 = state_46777__$1;
(statearr_46794_48784[(2)] = null);

(statearr_46794_48784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (4))){
var inst_46703 = (state_46777[(13)]);
var inst_46703__$1 = (state_46777[(2)]);
var inst_46704 = (inst_46703__$1 == null);
var state_46777__$1 = (function (){var statearr_46799 = state_46777;
(statearr_46799[(13)] = inst_46703__$1);

return statearr_46799;
})();
if(cljs.core.truth_(inst_46704)){
var statearr_46800_48785 = state_46777__$1;
(statearr_46800_48785[(1)] = (5));

} else {
var statearr_46801_48786 = state_46777__$1;
(statearr_46801_48786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (15))){
var state_46777__$1 = state_46777;
var statearr_46805_48787 = state_46777__$1;
(statearr_46805_48787[(2)] = null);

(statearr_46805_48787[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (21))){
var state_46777__$1 = state_46777;
var statearr_46806_48789 = state_46777__$1;
(statearr_46806_48789[(2)] = null);

(statearr_46806_48789[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (13))){
var inst_46721 = (state_46777[(8)]);
var inst_46718 = (state_46777[(9)]);
var inst_46716 = (state_46777[(10)]);
var inst_46719 = (state_46777[(11)]);
var inst_46733 = (state_46777[(2)]);
var inst_46734 = (inst_46721 + (1));
var tmp46802 = inst_46718;
var tmp46803 = inst_46716;
var tmp46804 = inst_46719;
var inst_46716__$1 = tmp46803;
var inst_46718__$1 = tmp46802;
var inst_46719__$1 = tmp46804;
var inst_46721__$1 = inst_46734;
var state_46777__$1 = (function (){var statearr_46807 = state_46777;
(statearr_46807[(8)] = inst_46721__$1);

(statearr_46807[(14)] = inst_46733);

(statearr_46807[(9)] = inst_46718__$1);

(statearr_46807[(10)] = inst_46716__$1);

(statearr_46807[(11)] = inst_46719__$1);

return statearr_46807;
})();
var statearr_46808_48794 = state_46777__$1;
(statearr_46808_48794[(2)] = null);

(statearr_46808_48794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (22))){
var state_46777__$1 = state_46777;
var statearr_46811_48795 = state_46777__$1;
(statearr_46811_48795[(2)] = null);

(statearr_46811_48795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (6))){
var inst_46703 = (state_46777[(13)]);
var inst_46714 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46703) : f.call(null,inst_46703));
var inst_46715 = cljs.core.seq(inst_46714);
var inst_46716 = inst_46715;
var inst_46718 = null;
var inst_46719 = (0);
var inst_46721 = (0);
var state_46777__$1 = (function (){var statearr_46816 = state_46777;
(statearr_46816[(8)] = inst_46721);

(statearr_46816[(9)] = inst_46718);

(statearr_46816[(10)] = inst_46716);

(statearr_46816[(11)] = inst_46719);

return statearr_46816;
})();
var statearr_46818_48798 = state_46777__$1;
(statearr_46818_48798[(2)] = null);

(statearr_46818_48798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (17))){
var inst_46738 = (state_46777[(7)]);
var inst_46743 = cljs.core.chunk_first(inst_46738);
var inst_46744 = cljs.core.chunk_rest(inst_46738);
var inst_46745 = cljs.core.count(inst_46743);
var inst_46716 = inst_46744;
var inst_46718 = inst_46743;
var inst_46719 = inst_46745;
var inst_46721 = (0);
var state_46777__$1 = (function (){var statearr_46819 = state_46777;
(statearr_46819[(8)] = inst_46721);

(statearr_46819[(9)] = inst_46718);

(statearr_46819[(10)] = inst_46716);

(statearr_46819[(11)] = inst_46719);

return statearr_46819;
})();
var statearr_46820_48801 = state_46777__$1;
(statearr_46820_48801[(2)] = null);

(statearr_46820_48801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (3))){
var inst_46774 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46777__$1,inst_46774);
} else {
if((state_val_46778 === (12))){
var inst_46762 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
var statearr_46832_48803 = state_46777__$1;
(statearr_46832_48803[(2)] = inst_46762);

(statearr_46832_48803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (2))){
var state_46777__$1 = state_46777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46777__$1,(4),in$);
} else {
if((state_val_46778 === (23))){
var inst_46770 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
var statearr_46848_48805 = state_46777__$1;
(statearr_46848_48805[(2)] = inst_46770);

(statearr_46848_48805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (19))){
var inst_46757 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
var statearr_46853_48806 = state_46777__$1;
(statearr_46853_48806[(2)] = inst_46757);

(statearr_46853_48806[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (11))){
var inst_46738 = (state_46777[(7)]);
var inst_46716 = (state_46777[(10)]);
var inst_46738__$1 = cljs.core.seq(inst_46716);
var state_46777__$1 = (function (){var statearr_46861 = state_46777;
(statearr_46861[(7)] = inst_46738__$1);

return statearr_46861;
})();
if(inst_46738__$1){
var statearr_46868_48807 = state_46777__$1;
(statearr_46868_48807[(1)] = (14));

} else {
var statearr_46870_48808 = state_46777__$1;
(statearr_46870_48808[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (9))){
var inst_46764 = (state_46777[(2)]);
var inst_46765 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46777__$1 = (function (){var statearr_46874 = state_46777;
(statearr_46874[(15)] = inst_46764);

return statearr_46874;
})();
if(cljs.core.truth_(inst_46765)){
var statearr_46878_48809 = state_46777__$1;
(statearr_46878_48809[(1)] = (21));

} else {
var statearr_46879_48810 = state_46777__$1;
(statearr_46879_48810[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (5))){
var inst_46706 = cljs.core.async.close_BANG_(out);
var state_46777__$1 = state_46777;
var statearr_46881_48812 = state_46777__$1;
(statearr_46881_48812[(2)] = inst_46706);

(statearr_46881_48812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (14))){
var inst_46738 = (state_46777[(7)]);
var inst_46741 = cljs.core.chunked_seq_QMARK_(inst_46738);
var state_46777__$1 = state_46777;
if(inst_46741){
var statearr_46882_48813 = state_46777__$1;
(statearr_46882_48813[(1)] = (17));

} else {
var statearr_46883_48814 = state_46777__$1;
(statearr_46883_48814[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (16))){
var inst_46760 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
var statearr_46888_48815 = state_46777__$1;
(statearr_46888_48815[(2)] = inst_46760);

(statearr_46888_48815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (10))){
var inst_46721 = (state_46777[(8)]);
var inst_46718 = (state_46777[(9)]);
var inst_46731 = cljs.core._nth(inst_46718,inst_46721);
var state_46777__$1 = state_46777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46777__$1,(13),out,inst_46731);
} else {
if((state_val_46778 === (18))){
var inst_46738 = (state_46777[(7)]);
var inst_46751 = cljs.core.first(inst_46738);
var state_46777__$1 = state_46777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46777__$1,(20),out,inst_46751);
} else {
if((state_val_46778 === (8))){
var inst_46721 = (state_46777[(8)]);
var inst_46719 = (state_46777[(11)]);
var inst_46723 = (inst_46721 < inst_46719);
var inst_46724 = inst_46723;
var state_46777__$1 = state_46777;
if(cljs.core.truth_(inst_46724)){
var statearr_46899_48821 = state_46777__$1;
(statearr_46899_48821[(1)] = (10));

} else {
var statearr_46900_48826 = state_46777__$1;
(statearr_46900_48826[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42837__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42837__auto____0 = (function (){
var statearr_46912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46912[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42837__auto__);

(statearr_46912[(1)] = (1));

return statearr_46912;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42837__auto____1 = (function (state_46777){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_46777);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e46920){var ex__42840__auto__ = e46920;
var statearr_46921_48827 = state_46777;
(statearr_46921_48827[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_46777[(4)]))){
var statearr_46926_48828 = state_46777;
(statearr_46926_48828[(1)] = cljs.core.first((state_46777[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48829 = state_46777;
state_46777 = G__48829;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42837__auto__ = function(state_46777){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42837__auto____1.call(this,state_46777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42837__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42837__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_46934 = f__43376__auto__();
(statearr_46934[(6)] = c__43375__auto__);

return statearr_46934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));

return c__43375__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46949 = arguments.length;
switch (G__46949) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46967 = arguments.length;
switch (G__46967) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46973 = arguments.length;
switch (G__46973) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43375__auto___48864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_47001){
var state_val_47002 = (state_47001[(1)]);
if((state_val_47002 === (7))){
var inst_46996 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47007_48865 = state_47001__$1;
(statearr_47007_48865[(2)] = inst_46996);

(statearr_47007_48865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (1))){
var inst_46977 = null;
var state_47001__$1 = (function (){var statearr_47008 = state_47001;
(statearr_47008[(7)] = inst_46977);

return statearr_47008;
})();
var statearr_47009_48870 = state_47001__$1;
(statearr_47009_48870[(2)] = null);

(statearr_47009_48870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (4))){
var inst_46980 = (state_47001[(8)]);
var inst_46980__$1 = (state_47001[(2)]);
var inst_46982 = (inst_46980__$1 == null);
var inst_46983 = cljs.core.not(inst_46982);
var state_47001__$1 = (function (){var statearr_47010 = state_47001;
(statearr_47010[(8)] = inst_46980__$1);

return statearr_47010;
})();
if(inst_46983){
var statearr_47011_48876 = state_47001__$1;
(statearr_47011_48876[(1)] = (5));

} else {
var statearr_47012_48877 = state_47001__$1;
(statearr_47012_48877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (6))){
var state_47001__$1 = state_47001;
var statearr_47013_48878 = state_47001__$1;
(statearr_47013_48878[(2)] = null);

(statearr_47013_48878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (3))){
var inst_46998 = (state_47001[(2)]);
var inst_46999 = cljs.core.async.close_BANG_(out);
var state_47001__$1 = (function (){var statearr_47016 = state_47001;
(statearr_47016[(9)] = inst_46998);

return statearr_47016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47001__$1,inst_46999);
} else {
if((state_val_47002 === (2))){
var state_47001__$1 = state_47001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47001__$1,(4),ch);
} else {
if((state_val_47002 === (11))){
var inst_46980 = (state_47001[(8)]);
var inst_46990 = (state_47001[(2)]);
var inst_46977 = inst_46980;
var state_47001__$1 = (function (){var statearr_47019 = state_47001;
(statearr_47019[(7)] = inst_46977);

(statearr_47019[(10)] = inst_46990);

return statearr_47019;
})();
var statearr_47020_48879 = state_47001__$1;
(statearr_47020_48879[(2)] = null);

(statearr_47020_48879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (9))){
var inst_46980 = (state_47001[(8)]);
var state_47001__$1 = state_47001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47001__$1,(11),out,inst_46980);
} else {
if((state_val_47002 === (5))){
var inst_46977 = (state_47001[(7)]);
var inst_46980 = (state_47001[(8)]);
var inst_46985 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46980,inst_46977);
var state_47001__$1 = state_47001;
if(inst_46985){
var statearr_47026_48880 = state_47001__$1;
(statearr_47026_48880[(1)] = (8));

} else {
var statearr_47027_48881 = state_47001__$1;
(statearr_47027_48881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (10))){
var inst_46993 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47038_48882 = state_47001__$1;
(statearr_47038_48882[(2)] = inst_46993);

(statearr_47038_48882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (8))){
var inst_46977 = (state_47001[(7)]);
var tmp47021 = inst_46977;
var inst_46977__$1 = tmp47021;
var state_47001__$1 = (function (){var statearr_47039 = state_47001;
(statearr_47039[(7)] = inst_46977__$1);

return statearr_47039;
})();
var statearr_47040_48883 = state_47001__$1;
(statearr_47040_48883[(2)] = null);

(statearr_47040_48883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_47042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47042[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_47042[(1)] = (1));

return statearr_47042;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_47001){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_47001);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e47049){var ex__42840__auto__ = e47049;
var statearr_47050_48884 = state_47001;
(statearr_47050_48884[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_47001[(4)]))){
var statearr_47053_48885 = state_47001;
(statearr_47053_48885[(1)] = cljs.core.first((state_47001[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48887 = state_47001;
state_47001 = G__48887;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_47001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_47001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_47059 = f__43376__auto__();
(statearr_47059[(6)] = c__43375__auto___48864);

return statearr_47059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47066 = arguments.length;
switch (G__47066) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43375__auto___48908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_47114){
var state_val_47115 = (state_47114[(1)]);
if((state_val_47115 === (7))){
var inst_47110 = (state_47114[(2)]);
var state_47114__$1 = state_47114;
var statearr_47122_48912 = state_47114__$1;
(statearr_47122_48912[(2)] = inst_47110);

(statearr_47122_48912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (1))){
var inst_47072 = (new Array(n));
var inst_47073 = inst_47072;
var inst_47074 = (0);
var state_47114__$1 = (function (){var statearr_47126 = state_47114;
(statearr_47126[(7)] = inst_47074);

(statearr_47126[(8)] = inst_47073);

return statearr_47126;
})();
var statearr_47129_48914 = state_47114__$1;
(statearr_47129_48914[(2)] = null);

(statearr_47129_48914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (4))){
var inst_47077 = (state_47114[(9)]);
var inst_47077__$1 = (state_47114[(2)]);
var inst_47080 = (inst_47077__$1 == null);
var inst_47081 = cljs.core.not(inst_47080);
var state_47114__$1 = (function (){var statearr_47133 = state_47114;
(statearr_47133[(9)] = inst_47077__$1);

return statearr_47133;
})();
if(inst_47081){
var statearr_47135_48919 = state_47114__$1;
(statearr_47135_48919[(1)] = (5));

} else {
var statearr_47138_48920 = state_47114__$1;
(statearr_47138_48920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (15))){
var inst_47104 = (state_47114[(2)]);
var state_47114__$1 = state_47114;
var statearr_47140_48927 = state_47114__$1;
(statearr_47140_48927[(2)] = inst_47104);

(statearr_47140_48927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (13))){
var state_47114__$1 = state_47114;
var statearr_47141_48928 = state_47114__$1;
(statearr_47141_48928[(2)] = null);

(statearr_47141_48928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (6))){
var inst_47074 = (state_47114[(7)]);
var inst_47100 = (inst_47074 > (0));
var state_47114__$1 = state_47114;
if(cljs.core.truth_(inst_47100)){
var statearr_47148_48934 = state_47114__$1;
(statearr_47148_48934[(1)] = (12));

} else {
var statearr_47149_48936 = state_47114__$1;
(statearr_47149_48936[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (3))){
var inst_47112 = (state_47114[(2)]);
var state_47114__$1 = state_47114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47114__$1,inst_47112);
} else {
if((state_val_47115 === (12))){
var inst_47073 = (state_47114[(8)]);
var inst_47102 = cljs.core.vec(inst_47073);
var state_47114__$1 = state_47114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47114__$1,(15),out,inst_47102);
} else {
if((state_val_47115 === (2))){
var state_47114__$1 = state_47114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47114__$1,(4),ch);
} else {
if((state_val_47115 === (11))){
var inst_47093 = (state_47114[(2)]);
var inst_47095 = (new Array(n));
var inst_47073 = inst_47095;
var inst_47074 = (0);
var state_47114__$1 = (function (){var statearr_47153 = state_47114;
(statearr_47153[(10)] = inst_47093);

(statearr_47153[(7)] = inst_47074);

(statearr_47153[(8)] = inst_47073);

return statearr_47153;
})();
var statearr_47154_48963 = state_47114__$1;
(statearr_47154_48963[(2)] = null);

(statearr_47154_48963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (9))){
var inst_47073 = (state_47114[(8)]);
var inst_47091 = cljs.core.vec(inst_47073);
var state_47114__$1 = state_47114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47114__$1,(11),out,inst_47091);
} else {
if((state_val_47115 === (5))){
var inst_47086 = (state_47114[(11)]);
var inst_47074 = (state_47114[(7)]);
var inst_47073 = (state_47114[(8)]);
var inst_47077 = (state_47114[(9)]);
var inst_47084 = (inst_47073[inst_47074] = inst_47077);
var inst_47086__$1 = (inst_47074 + (1));
var inst_47087 = (inst_47086__$1 < n);
var state_47114__$1 = (function (){var statearr_47163 = state_47114;
(statearr_47163[(11)] = inst_47086__$1);

(statearr_47163[(12)] = inst_47084);

return statearr_47163;
})();
if(cljs.core.truth_(inst_47087)){
var statearr_47164_48971 = state_47114__$1;
(statearr_47164_48971[(1)] = (8));

} else {
var statearr_47165_48972 = state_47114__$1;
(statearr_47165_48972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (14))){
var inst_47107 = (state_47114[(2)]);
var inst_47108 = cljs.core.async.close_BANG_(out);
var state_47114__$1 = (function (){var statearr_47179 = state_47114;
(statearr_47179[(13)] = inst_47107);

return statearr_47179;
})();
var statearr_47181_48979 = state_47114__$1;
(statearr_47181_48979[(2)] = inst_47108);

(statearr_47181_48979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (10))){
var inst_47098 = (state_47114[(2)]);
var state_47114__$1 = state_47114;
var statearr_47183_48981 = state_47114__$1;
(statearr_47183_48981[(2)] = inst_47098);

(statearr_47183_48981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (8))){
var inst_47086 = (state_47114[(11)]);
var inst_47073 = (state_47114[(8)]);
var tmp47166 = inst_47073;
var inst_47073__$1 = tmp47166;
var inst_47074 = inst_47086;
var state_47114__$1 = (function (){var statearr_47184 = state_47114;
(statearr_47184[(7)] = inst_47074);

(statearr_47184[(8)] = inst_47073__$1);

return statearr_47184;
})();
var statearr_47185_48987 = state_47114__$1;
(statearr_47185_48987[(2)] = null);

(statearr_47185_48987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_47188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47188[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_47188[(1)] = (1));

return statearr_47188;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_47114){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_47114);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e47189){var ex__42840__auto__ = e47189;
var statearr_47190_48991 = state_47114;
(statearr_47190_48991[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_47114[(4)]))){
var statearr_47191_48992 = state_47114;
(statearr_47191_48992[(1)] = cljs.core.first((state_47114[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48993 = state_47114;
state_47114 = G__48993;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_47114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_47114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_47193 = f__43376__auto__();
(statearr_47193[(6)] = c__43375__auto___48908);

return statearr_47193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47199 = arguments.length;
switch (G__47199) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43375__auto___49006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_47258){
var state_val_47259 = (state_47258[(1)]);
if((state_val_47259 === (7))){
var inst_47254 = (state_47258[(2)]);
var state_47258__$1 = state_47258;
var statearr_47268_49007 = state_47258__$1;
(statearr_47268_49007[(2)] = inst_47254);

(statearr_47268_49007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (1))){
var inst_47207 = [];
var inst_47208 = inst_47207;
var inst_47209 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47258__$1 = (function (){var statearr_47271 = state_47258;
(statearr_47271[(7)] = inst_47208);

(statearr_47271[(8)] = inst_47209);

return statearr_47271;
})();
var statearr_47272_49009 = state_47258__$1;
(statearr_47272_49009[(2)] = null);

(statearr_47272_49009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (4))){
var inst_47213 = (state_47258[(9)]);
var inst_47213__$1 = (state_47258[(2)]);
var inst_47214 = (inst_47213__$1 == null);
var inst_47216 = cljs.core.not(inst_47214);
var state_47258__$1 = (function (){var statearr_47275 = state_47258;
(statearr_47275[(9)] = inst_47213__$1);

return statearr_47275;
})();
if(inst_47216){
var statearr_47277_49010 = state_47258__$1;
(statearr_47277_49010[(1)] = (5));

} else {
var statearr_47278_49013 = state_47258__$1;
(statearr_47278_49013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (15))){
var inst_47208 = (state_47258[(7)]);
var inst_47246 = cljs.core.vec(inst_47208);
var state_47258__$1 = state_47258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47258__$1,(18),out,inst_47246);
} else {
if((state_val_47259 === (13))){
var inst_47241 = (state_47258[(2)]);
var state_47258__$1 = state_47258;
var statearr_47285_49015 = state_47258__$1;
(statearr_47285_49015[(2)] = inst_47241);

(statearr_47285_49015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (6))){
var inst_47208 = (state_47258[(7)]);
var inst_47243 = inst_47208.length;
var inst_47244 = (inst_47243 > (0));
var state_47258__$1 = state_47258;
if(cljs.core.truth_(inst_47244)){
var statearr_47286_49016 = state_47258__$1;
(statearr_47286_49016[(1)] = (15));

} else {
var statearr_47288_49017 = state_47258__$1;
(statearr_47288_49017[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (17))){
var inst_47251 = (state_47258[(2)]);
var inst_47252 = cljs.core.async.close_BANG_(out);
var state_47258__$1 = (function (){var statearr_47293 = state_47258;
(statearr_47293[(10)] = inst_47251);

return statearr_47293;
})();
var statearr_47294_49018 = state_47258__$1;
(statearr_47294_49018[(2)] = inst_47252);

(statearr_47294_49018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (3))){
var inst_47256 = (state_47258[(2)]);
var state_47258__$1 = state_47258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47258__$1,inst_47256);
} else {
if((state_val_47259 === (12))){
var inst_47208 = (state_47258[(7)]);
var inst_47233 = cljs.core.vec(inst_47208);
var state_47258__$1 = state_47258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47258__$1,(14),out,inst_47233);
} else {
if((state_val_47259 === (2))){
var state_47258__$1 = state_47258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47258__$1,(4),ch);
} else {
if((state_val_47259 === (11))){
var inst_47213 = (state_47258[(9)]);
var inst_47208 = (state_47258[(7)]);
var inst_47219 = (state_47258[(11)]);
var inst_47229 = inst_47208.push(inst_47213);
var tmp47297 = inst_47208;
var inst_47208__$1 = tmp47297;
var inst_47209 = inst_47219;
var state_47258__$1 = (function (){var statearr_47315 = state_47258;
(statearr_47315[(7)] = inst_47208__$1);

(statearr_47315[(12)] = inst_47229);

(statearr_47315[(8)] = inst_47209);

return statearr_47315;
})();
var statearr_47316_49020 = state_47258__$1;
(statearr_47316_49020[(2)] = null);

(statearr_47316_49020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (9))){
var inst_47209 = (state_47258[(8)]);
var inst_47224 = cljs.core.keyword_identical_QMARK_(inst_47209,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47258__$1 = state_47258;
var statearr_47326_49021 = state_47258__$1;
(statearr_47326_49021[(2)] = inst_47224);

(statearr_47326_49021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (5))){
var inst_47213 = (state_47258[(9)]);
var inst_47221 = (state_47258[(13)]);
var inst_47219 = (state_47258[(11)]);
var inst_47209 = (state_47258[(8)]);
var inst_47219__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47213) : f.call(null,inst_47213));
var inst_47221__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47219__$1,inst_47209);
var state_47258__$1 = (function (){var statearr_47327 = state_47258;
(statearr_47327[(13)] = inst_47221__$1);

(statearr_47327[(11)] = inst_47219__$1);

return statearr_47327;
})();
if(inst_47221__$1){
var statearr_47328_49022 = state_47258__$1;
(statearr_47328_49022[(1)] = (8));

} else {
var statearr_47329_49023 = state_47258__$1;
(statearr_47329_49023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (14))){
var inst_47213 = (state_47258[(9)]);
var inst_47219 = (state_47258[(11)]);
var inst_47235 = (state_47258[(2)]);
var inst_47237 = [];
var inst_47238 = inst_47237.push(inst_47213);
var inst_47208 = inst_47237;
var inst_47209 = inst_47219;
var state_47258__$1 = (function (){var statearr_47330 = state_47258;
(statearr_47330[(7)] = inst_47208);

(statearr_47330[(14)] = inst_47235);

(statearr_47330[(15)] = inst_47238);

(statearr_47330[(8)] = inst_47209);

return statearr_47330;
})();
var statearr_47331_49024 = state_47258__$1;
(statearr_47331_49024[(2)] = null);

(statearr_47331_49024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (16))){
var state_47258__$1 = state_47258;
var statearr_47337_49025 = state_47258__$1;
(statearr_47337_49025[(2)] = null);

(statearr_47337_49025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (10))){
var inst_47226 = (state_47258[(2)]);
var state_47258__$1 = state_47258;
if(cljs.core.truth_(inst_47226)){
var statearr_47345_49026 = state_47258__$1;
(statearr_47345_49026[(1)] = (11));

} else {
var statearr_47348_49027 = state_47258__$1;
(statearr_47348_49027[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (18))){
var inst_47248 = (state_47258[(2)]);
var state_47258__$1 = state_47258;
var statearr_47349_49028 = state_47258__$1;
(statearr_47349_49028[(2)] = inst_47248);

(statearr_47349_49028[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47259 === (8))){
var inst_47221 = (state_47258[(13)]);
var state_47258__$1 = state_47258;
var statearr_47357_49030 = state_47258__$1;
(statearr_47357_49030[(2)] = inst_47221);

(statearr_47357_49030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42837__auto__ = null;
var cljs$core$async$state_machine__42837__auto____0 = (function (){
var statearr_47381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47381[(0)] = cljs$core$async$state_machine__42837__auto__);

(statearr_47381[(1)] = (1));

return statearr_47381;
});
var cljs$core$async$state_machine__42837__auto____1 = (function (state_47258){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_47258);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e47382){var ex__42840__auto__ = e47382;
var statearr_47384_49032 = state_47258;
(statearr_47384_49032[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_47258[(4)]))){
var statearr_47385_49033 = state_47258;
(statearr_47385_49033[(1)] = cljs.core.first((state_47258[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49034 = state_47258;
state_47258 = G__49034;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
cljs$core$async$state_machine__42837__auto__ = function(state_47258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42837__auto____1.call(this,state_47258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42837__auto____0;
cljs$core$async$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42837__auto____1;
return cljs$core$async$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_47386 = f__43376__auto__();
(statearr_47386[(6)] = c__43375__auto___49006);

return statearr_47386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
