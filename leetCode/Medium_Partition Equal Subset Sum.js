// Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/

// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Example 1:
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].


// Example 2:
// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Time complexity O(n * (sum/2))

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  
  if(sum % 2 !== 0) return false;
  
  sum = sum / 2;
  
  let row = nums.length+1;
  let col = sum + 1;
  
  let m = Array(row);
  for(let i = 0; i< row; i++) {
    m[i] = Array(col);
    m[i][0] = true; // sum 0 is always true for all number of items
  }
  
  for(let i=1; i < col; i++) {
    m[0][i] = false; //including 0 items all sum other than 0 is false;
  }
  
  for(let i=1; i < row; i++){
    for(let j=1; j < col; j++){
      m[i][j] = (
        m[i-1][j] ||
        (j >= nums[i-1] && m[i-1][j-nums[i-1]]) ||
        false
      );
    }
  }
  return m[row-1][col-1];
};


