// Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

// Given an array of integers nums and an integer limit, 
// return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.
// Example 1:
// Input: nums = [8,2,4,7], limit = 4
// Output: 2 
// Explanation: All subarrays are: 
// [8] with maximum absolute diff |8-8| = 0 <= 4.
// [8,2] with maximum absolute diff |8-2| = 6 > 4. 
// [8,2,4] with maximum absolute diff |8-2| = 6 > 4.
// [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
// [2] with maximum absolute diff |2-2| = 0 <= 4.
// [2,4] with maximum absolute diff |2-4| = 2 <= 4.
// [2,4,7] with maximum absolute diff |2-7| = 5 > 4.
// [4] with maximum absolute diff |4-4| = 0 <= 4.
// [4,7] with maximum absolute diff |4-7| = 3 <= 4.
// [7] with maximum absolute diff |7-7| = 0 <= 4. 
// Therefore, the size of the longest subarray is 2.

// Example 2:
// Input: nums = [10,1,2,4,7,2], limit = 5
// Output: 4 
// Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
// Example 3:

// Input: nums = [4,2,2,2,4,4,2,2], limit = 0
// Output: 3
 

// Constraints:
// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^9
// 0 <= limit <= 10^9

// Reference : https://www.youtube.com/watch?v=LDFZm4iB7tA

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let start = 0;
    let end = 0;
    let minQueue = []; 
    let maxQueue =[];
    let result = 0;
    while(end < nums.length) {
      let currentNum = nums[end];
     
      // Remove all numbers from back which are greater than or equal to currentNumber.
      // minQueue[0] should be Min from the queue.
      while(minQueue.length && nums[minQueue[minQueue.length -1]] >= currentNum) { //Important to keep >= just > will fail in example 2.
        minQueue.pop();
      }
      minQueue.push(end);

      // Remove all numbers from back which are less than or equal to currentNumber.
      // maxQueue[0] should be Max from the queue.
      while(maxQueue.length && nums[maxQueue[maxQueue.length-1]] <= currentNum) {
        maxQueue.pop();
      }
      maxQueue.push(end);
      
      if((nums[maxQueue[0]] - nums[minQueue[0]]) > limit) {
        // Remove start index if its in min or max queue.
        (minQueue[0] <= start) && minQueue.shift();
        (maxQueue[0] <= start) && maxQueue.shift();
        start++;
      } else {
        if(result < (end - start +1)) {
          result = (end - start +1);
        }
        end++;
      }
    }
  return result;
};


//Example 1
longestSubarray([8,2,4,7], 4); //Output : 2

//Example 2
longestSubarray([10,1,2,4,7,2], 5); //Output :4
