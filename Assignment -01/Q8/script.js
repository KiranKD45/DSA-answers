{/* **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]
*/}

//solution:
var findErrorNums = function(nums) {
    let N = nums.length, ans = [,]
    for (let i = 0; i < N; i++)
        nums[(nums[i] - 1) % 10000] += 10000
    for (let i = 0; i < N; i++)
        if (nums[i] > 20000) ans[0] = i + 1
        else if (nums[i] < 10001) ans[1] = i + 1
    return ans
};

//   Time complexity : O(n)
//   Space complexity :O(1)