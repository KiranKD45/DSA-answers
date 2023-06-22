var RecentCounter = function() {
    this.stream = []
};
RecentCounter.prototype.ping = function(t) {
    this.stream.push(t) 
    while(this.stream[0] < t - 3000){ 
      this.stream.shift()
  } 
    return this.stream.length
};