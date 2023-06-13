var findPeakElement = function(nums) {

    let left = 0;
    let right = nums.length-1;
    
    let mid = Math.floor((left+right)/2);
    
    while(left < right){
        mid = Math.floor((left+right)/2);
        if (nums[mid] < nums[mid + 1]) {left = mid+1;continue}
        else if (nums[mid] < nums[mid-1] ) {right = mid-1;continue}
        else return mid
    }
    
    return left
    };