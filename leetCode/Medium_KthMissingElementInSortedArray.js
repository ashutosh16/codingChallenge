// Given a sorted array A of unique numbers, find the K-th missing number starting from the leftmost number of the array.
// https://leetcode.com/problems/missing-element-in-sorted-array/
// Example 1:
// Input: A = [4,7,9,10], K = 1
// Output: 5
// Explanation: 
// The first missing number is 5.

// Example 2:
// Input: A = [4,7,9,10], K = 3
// Output: 8
// Explanation: 
// The missing numbers are [5,6,8,...], hence the third missing number is 8.

// Example 3:
// Input: A = [1,2,4], K = 3
// Output: 6
// Explanation: 
// The missing numbers are [3,5,6,7,...], hence the third missing number is 6.
 
// we can do this using the binary serch. which is O(log(n))
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  //This will calculate number of missing elements till possition nums.length-1
  let missingNumbers = nums[nums.length-1] - nums[0] - (nums.length-1);
  
  //Thie is true when missing number is after array last index
  if(missingNumbers < k) {
      return nums[nums.length-1] + k - missingNumbers;
  }
  
  let left = 0;
  let right = nums.length-1;
  
  while (left !== right){
    let mid = Math.floor((right+left) / 2);
    //Number of missing elements till possition mid.
    let missNumAtMid = nums[mid] - nums[0] - mid;
      if(k <= missNumAtMid){
        right = mid; 
      } else {
        left = mid+1;
      }
  }
  let index = left - 1;
  let missCountAtIndex = nums[index] - nums[0] - index;   
  return nums[index] + k - missCountAtIndex;
};

missingElement([4,7,9,10], 1);
// 5

missingElement([1,2,4], 3);
// 6


// this is O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  let next = null;
  let missCount = 0;
  for(let i=0; i<nums.length-1;i++){
    if(nums[i]+1 !== nums[i+1]){
      for(let next = nums[i]+1; next < nums[i+1]; next++) {
          missCount++;
          if(missCount === k) return next;
      }
      if(missCount === k) return next;
    }
  }
  
  if(missCount < k) {
    let next = nums[nums.length-1];
    while(missCount !== k){
          next+=1;
          missCount++;
    }
    return next;  
  }  
};



missingElement([4,7,9,10], 1);
// 5


missingElement([1,2,4], 3);
// 6
