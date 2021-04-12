// Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

/**
 * @param {number[]} nums
 * @return {number}
 */
// HINT: Create map or set with each number from nums array.
// then travel the arr
// if(set.has(arr[i-1])) then i is not a starting point. skip
// Else continue till arr[i+len] is present in Set.
var longestConsecutive = function(nums) {
  const s = new Set(nums);
  let resultLen = 0;
  for(let num of nums) {
    if(s.has(num-1)) continue;
    let len=1;
    while(s.has(num+len)){
      len++;
    }
    resultLen = Math.max(len, resultLen);
  }
  return resultLen;
};

longestConsecutive([100,4,200,1,3,2]);
// 4
