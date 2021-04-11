// Maximum Points You Can Obtain from Cards [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/]
// There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

// Example 1:
// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

// Example 2:
// Input: cardPoints = [2,2,2], k = 2
// Output: 4
// Explanation: Regardless of which two cards you take, your score will always be 4.

// Example 3:
// Input: cardPoints = [9,7,7,9,7,7,9], k = 7
// Output: 55
// Explanation: You have to take all the cards. Your score is the sum of points of all cards.

// Example 4:
// Input: cardPoints = [1,1000,1], k = 1
// Output: 1
// Explanation: You cannot take the card in the middle. Your best score is 1. 

// Example 5:
// Input: cardPoints = [1,79,80,1,1,1,200,1], k = 3
// Output: 202
 

// Constraints:

// 1 <= cardPoints.length <= 10^5
// 1 <= cardPoints[i] <= 10^4
// 1 <= k <= cardPoints.length

// HINT: Calculate the min sum subArray of length n-k;
// remaining subarray will be max sum subarray of size k;
// [1,2,3,4,5,6,1]  k = 3 n-k = 7-3 = 4
// TotalSum = 22
// SubArray of length n-k start from 0 to 3  --> result arr [5,6,1] indexes: 4,5,6
// SubArray of length n-k start from 1 to 4  --> result arr [1,6,1] indexes: 1,5,6
// SubArray of length n-k start from 2 to 5  --> result arr [1,2,1] indexes: 1,2,6
// SubArray of length n-k start from 3 to 6  --> result arr [1,2,3] indexes: 1,2,3


/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

var maxScore = function(cardPoints, k) {
  let totalSum = 0;
  let currentSum = 0; //Sum of the inner subarray
  let n = cardPoints.length;
  let subArrayLength = n-k; //length of inner subarray
  for(let i=0; i< n; i++){
    totalSum += cardPoints[i];
    if(i < (n - k)){
      currentSum += cardPoints[i];
    }
  }
  let resultSum = totalSum - currentSum;
  for(let i= n-k; i < n; i++){
    currentSum = currentSum + cardPoints[i] - cardPoints[i - (subArrayLength)];
    if((totalSum - currentSum) > resultSum) {
      resultSum = totalSum - currentSum;
    }
  }
  
 return resultSum;
};

maxScore([1,2,3,4,5,6,1],3);
// 12
----------------------------------------------------------------------------------------------------------------------------
 // Find the sub array with min count with length n-k
// result = totalCount - minSumSubArrayCount
 function maxScore(arr, k) {
    let totalCount = 0;
    let excludedCount = 0;
    const n = arr.length;
    for(let i=0; i<arr.length; i++) {
      totalCount += arr[i];
      if(i< n-k) excludedCount += arr[i];
    }
    let end = n-k;
    let start = 0;
    let sum = excludedCount;
    while(end < n) {
      sum = sum-arr[start]+arr[end];
      excludedCount = Math.min(excludedCount, sum);
      end++;
      start++;
    }
    return totalCount - excludedCount;
  }
 

maxScore([1,2,3,4,5,6,1],3);
// 12

