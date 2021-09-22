(function(){

  function heartbeat() {
    var time = new Date();
    var timeStr = time.toString().split(' ')[4];
    self.postMessage({ str: timeStr, ms: time.getTime() });
  }

  setInterval(function(){
    heartbeat();
  }, 200);

})();