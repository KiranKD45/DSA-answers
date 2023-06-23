var find132pattern = function(nums) {
    len = nums.length;
    if(len <= 2){
        return false;
    }
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                if (nums[i] < nums[k] && nums[k] < nums[j]) {
                    return true;
                }
            }
        }
    }
    return false;
};