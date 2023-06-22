var DataStream = function (value, k) {
    this.count = [value, k];
    this.x = 0
};

DataStream.prototype.consec = function (num) {
    if(num === this.count[0]){
        this.x++
    } else{
        this.x = 0
    }
    if (this.x >= this.count[1]) {
            return true
    }
        else{
            return false
    }
};