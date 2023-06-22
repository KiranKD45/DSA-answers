var FrontMiddleBackQueue = function() {
    this.frontDeque = [];
    this.backDeque = [];
};

FrontMiddleBackQueue.prototype.pushFront = function(val) {
    if(this.frontDeque.length > this.backDeque.length)
        this.backDeque.unshift(this.frontDeque.pop());
    
    this.frontDeque.unshift(val);
};

FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    if(this.frontDeque.length !== this.backDeque.length)
        this.backDeque.unshift(this.frontDeque.pop());
    
    this.frontDeque.push(val);
};

FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.backDeque.push(val);
    
    if(this.backDeque.length > this.frontDeque.length)
        this.frontDeque.push(this.backDeque.shift());
};

FrontMiddleBackQueue.prototype.popFront = function() {
    if(this.frontDeque.length == 0 && this.backDeque.length == 0) return -1;
    
    let res = this.frontDeque.shift();
    
    if(this.backDeque.length > this.frontDeque.length)
        this.frontDeque.push(this.backDeque.shift());
    
    return res;
};

FrontMiddleBackQueue.prototype.popMiddle = function() {
    if(this.frontDeque.length == 0 && this.backDeque.length == 0) return -1;
    
    let res = this.frontDeque.pop();
    
    if(this.frontDeque.length < this.backDeque.length)
        this.frontDeque.push(this.backDeque.shift());
    
    return res;
};

FrontMiddleBackQueue.prototype.popBack = function() {
    if(this.frontDeque.length == 0 && this.backDeque.length == 0) return -1;
    
    let res;
    
    if(this.backDeque.length == 0)
        res = this.frontDeque.pop();
    else
        res = this.backDeque.pop();

    if(this.frontDeque.length - this.backDeque.length == 2)
        this.backDeque.unshift(this.frontDeque.pop());

    
    return res;    
};
