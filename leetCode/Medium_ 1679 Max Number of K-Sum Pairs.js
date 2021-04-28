// https://leetcode.com/problems/max-number-of-k-sum-pairs/
// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

// Example 1:

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
// Example 2:

// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Using Sorting 
// Time complexity is O(nlog(n))
// Space complexity O(1)
var maxOperations = function(nums, k) {
  nums = nums.sort((a,b)=>a-b);
  let left =0;
  let right = nums.length-1;
  let count = 0;
  while(left < right) {
    let sum= nums[left]+nums[right];
    if(sum === k) {
      count++;
      left++;
      right--;
    } else if(sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return count;
};

// Using map 
// Time complexity is O(n)
// Space complexity O(n)
var maxOperations = function(nums, k) {
  const map = {};
  let count = 0;
  for(let i=0; i<nums.length; i++) {
    const partSum = k - nums[i];
    if(map[partSum]) {
      map[partSum] = map[partSum] - 1;
      count++;
    } else {
      map[nums[i]] = map[nums[i]] ? map[nums[i]]+1 : 1;
    }
  }
  return count;
};


maxOperations([3,1,3,4,3], 6);
//1


