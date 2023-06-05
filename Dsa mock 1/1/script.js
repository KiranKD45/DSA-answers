var moveZeroes = function(nums) {
    let gap = 0;
for(let i=0; i<nums.length; i++) {
    if(nums[i] === 0) {
        gap++;
    }
    else {
        [nums[i-gap], nums[i]] = [nums[i], nums[i-gap]]
    }
}
};

//T.C O(n);
//S.C O(1);