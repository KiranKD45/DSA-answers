{/*
💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true
*/}

// solution:
var containsDuplicate = function(nums) {
    const set = new Set(nums)
    if(set.size == nums.length){
        return false
    }  
    return true
  };

//   Time complexity : O(n)
//   Space complexity :O(n)