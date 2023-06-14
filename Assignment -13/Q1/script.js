var mySqrt = function(x) {
    if(x == 1 || x == 0) {
        return x;
    }
    let low = 1, high = parseInt(x/2)+1, mid;
    while (low <= high) {
        mid = low + parseInt((high-low)/2);
        
        if (mid * mid == x) {
            return mid;
        } else if (mid * mid < x) {
            low = mid + 1;
        } else {
            high = mid-1;
        }
    }
    return low - 1;
}
