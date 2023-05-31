{/* **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2
*/}

// solution:

var searchInsert = function(nums, target) {
    let start = 0, end = nums.length - 1;
    let ans = nums.length; // Default answer when target is greater than all elements
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            ans = mid; // Update the answer to the current index
            end = mid - 1;
        }
    }
    
    return ans;
};