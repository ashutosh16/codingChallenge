// https://leetcode.com/problems/next-permutation/solution/
// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
// The replacement must be in place and use only constant extra memory.
 
// Example 1:
// Input: nums = [1,2,3]
// Output: [1,3,2]

// Example 2:
// Input: nums = [3,2,1]
// Output: [1,2,3]

// Example 3:
// Input: nums = [1,1,5]
// Output: [1,5,1]

// Example 4:
// Input: nums = [1]
// Output: [1]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if(nums.length < 2) return nums;
  let n = nums.length-1;
  
  while(i>0){
    
  }
  
  return nums.sort((a,b)=>a-b);
};

[1, 3, 2, 4] 

[1, 3, 4, 2]


