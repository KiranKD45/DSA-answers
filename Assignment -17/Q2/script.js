var maxSubarraySumCircular = function(nums) {
    let total = 0; 
    let maxSum = -Infinity; 
    let curMax = 0; 
    let minSum = Infinity; 
    let curMin = 0;
    for (let i = 0; i < nums.length; i++) { 
      const currNum = nums[i];
      total += currNum; 
      curMax = Math.max(curMax + currNum, currNum);
      maxSum = Math.max(curMax, maxSum);
      curMin = Math.min(curMin + currNum, currNum);
      minSum = Math.min(curMin, minSum);
    } 
   return minSum === total ? maxSum : Math.max(maxSum, total - minSum);
}
