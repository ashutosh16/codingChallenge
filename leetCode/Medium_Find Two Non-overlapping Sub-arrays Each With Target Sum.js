// https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/
// Given an array of integers arr and an integer target.
// You have to find two non-overlapping sub-arrays of arr each with sum equal target.
// There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum.
// Return the minimum sum of the lengths of the two required sub-arrays, or return -1 if you cannot find such two sub-arrays.

// Example 1:
// Input: arr = [3,2,2,4,3], target = 3
// Output: 2
// Explanation: Only two sub-arrays have sum = 3 ([3] and [3]). The sum of their lengths is 2.

// Example 2:
// Input: arr = [7,3,4,7], target = 7
// Output: 2
// Explanation: Although we have three non-overlapping sub-arrays of sum = 7 ([7], [3,4] and [7]), but we will choose the first and third sub-arrays as the sum of their lengths is 2.

// Example 3:
// Input: arr = [4,3,2,6,2,3,4], target = 6
// Output: -1
// Explanation: We have only one sub-array of sum = 6.

// Example 4:
// Input: arr = [5,5,4,4,5], target = 3
// Output: -1
// Explanation: We cannot find a sub-array of sum = 3.

// Example 5:
// Input: arr = [3,1,1,1,5,1,2,1], target = 3
// Output: 3
// Explanation: Note that sub-arrays [1,2] and [2,1] cannot be an answer because they overlap.
 
// Constraints:
// 1 <= arr.length <= 10^5
// 1 <= arr[i] <= 1000
// 1 <= target <= 10^8

// HINT:
// Find target sum sub arr with min length from LeftToRight
// Find target sum sub arr with min length from RightToLeft
// Find min of LeftToRight[i] + RightToLeft[i+1]
 

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

var minSumOfLengths = function(arr, target) {debugger;
  let map = {};
  let sum = 0;
  let leftToRight = Array(arr.length).fill(arr.length);
  let rightToLeft = Array(arr.length).fill(arr.length);
  
  for(let i=0; i < arr.length; i++){
    if(arr[i] === target) {
      leftToRight[i] = 1; // length of the sub array with sum == target
    } else {
      sum += arr[i];
      if(sum === target) {
        leftToRight[i] = (i + 1);
      } else if(typeof map[sum - target] !== 'undefined'){
        leftToRight[i] = (i - map[sum - target] +1); // length of the sub array with sum == target
      }
      !map[sum] && (map[sum] = i+1);
      
      if(i > 0) {
        leftToRight[i] = Math.min(leftToRight[i-1],  leftToRight[i]); // Min length of the sub array with sum == target
      }
    }
  }
  map = {};
  sum = 0;
  for(let i=arr.length-1; i >= 0; i--){
    if(arr[i] === target) {
      rightToLeft[i] = 1; 
    } else {
      sum += arr[i];
      if(sum === target) {
        rightToLeft[i] = (arr.length-1 - i + 1);
      } else if(typeof map[sum - target] !== 'undefined'){
        rightToLeft[i] = (map[sum - target] - i + 1);
      }

        !map[sum] && (map[sum] = i-1);
      
      if(i < arr.length-1) {
        rightToLeft[i] = Math.min(rightToLeft[i+1],  rightToLeft[i]);
      }
    }
  }
  let minLength = -1;
  for(let i =1; i < arr.length-1; i++){
    if(leftToRight[i] && rightToLeft[i+1]) {
      if(minLength === -1) {
        minLength = leftToRight[i] + rightToLeft[i+1];
      } else {
        minLength = Math.min(minLength, leftToRight[i] + rightToLeft[i+1]);
      }
    }
  }
                                             
  return minLength > arr.length ? -1 : minLength;
}
minSumOfLengths([3,2,2,4,3], 3); 
//Output: 2

minSumOfLengths([4,3,2,6,2,3,4], 6); 
//Output: 8

minSumOfLengths([11], 11);
//Output: -1


minSumOfLengths([64,5,20,9,1,39], 69);
//Output: 6


minSumOfLengths([43,5,4,4,37,5,3,3,42,9,1,4,30,18,24,4,11,11,1,1,52,33,7,8,2,1,1,21,6], 52);
//Output : 4

minSumOfLengths([12,12,3,1,15,4,2,5,2,12,12,1,6,4,5,4,6,1,1,4,7,11,5,15,12,18,1,1,4,1,1,1,19,3,4], 27);
// Output : 5
