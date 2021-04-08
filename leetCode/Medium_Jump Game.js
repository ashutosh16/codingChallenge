// https://leetcode.com/problems/jump-game/
// https://www.youtube.com/watch?v=muDPTDrpS28&list=PLEJXowNB4kPwCPVjDv6KsAsThtDOCQUok&index=25

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.


/**
 * @param {number[]} nums
 * @return {boolean}
 */


function canJump(arr){
  let curr = 0;
  let reachable = 0;
  while(curr < arr.length || reachable < arr.length) {
    if(reachable < curr) return false;
    reachable = Math.max(reachable, curr+arr[curr]);
	  if(reachable >= arr.length-1) return true;
    curr++;
  }
  return false;
}


var canJump = function(nums) {
  if(nums.length === 1) return true;
  let reachable = 0;
  for(let i=0; i<nums.length-1; i++) {
    if(i>reachable) return false; //Current index is never reachable for you.
    let jumpToIndex = i + nums[i];
    if(jumpToIndex >= nums.length-1) return true;
    if(jumpToIndex > reachable) reachable = jumpToIndex;
  }
  
  return false;
};


// Hint: Find the maximum index till you can jump (reachable)
// If your i <= reachable means you can reach the i using some jump combinations.
// If i is reachable then keep on cal culating the new reachable until reachable >= length-1
// If reachable >= length-1 that means you can reach the end else you can not reach the end.
