var maximumGap = function (nums) {
    if (nums.length < 2) {
      return 0;
    }
  
    let max = -Infinity;
    for (let num of nums) {
      max = Math.max(max, num);
    }
  
    let place = 1;
    const sorted = Array(nums.length);
  
    while (max / place > 0) {
      const count = Array(10).fill(0);
  
      for (let num of nums) {
        count[Math.floor(num / place) % 10]++;
      }
  
      for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
      }
  
      for (let i = nums.length - 1; i >= 0; i--) {
        sorted[--count[Math.floor(nums[i] / place) % 10]] = nums[i];
      }
  
      for (let i = 0; i < nums.length; i++) {
        nums[i] = sorted[i];
      }
  
      place *= 10;
    }
  
    max = -Infinity;
    for (let i = 1; i < sorted.length; i++) {
      max = Math.max(max, sorted[i] - sorted[i - 1]);
    }
    return max;
  };