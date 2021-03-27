// 
// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

// Find out how many ways to assign symbols to make sum of integers equal to target S.

// Example 1:

// Input: nums is [1, 1, 1, 1, 1], S is 3. 
// Output: 5
// Explanation: 

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3

// There are 5 ways to assign symbols to make the sum of nums be target 3.

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// Consider we are adding all +value in s1 and -ve value in s2. such that S1+S2 = targetSum

// Other way of thinking without doing -ve for S2 if we consider all positive then S1-S2 = targetSum
// S1+S2 = Total
// S1 - S2 = targetSum
// S1 - (Total - S1) = targetSum
// S1 - Total + S1 = targetSum
// 2S1 = targetSum + Total
// S1 = (targetSum + Total) / 2;

// Just as previous problem find number of subarray with given sum S1.

var findTargetSumWays = function(nums, S) {
  const sum = nums.reduce((acc, item) => acc+item, 0);
  const s1 = (S+sum) / 2;
  const rows= nums.length+1;
  const col = s1+1;
  const dp = Array(rows);
  for(let i=0; i < rows; i++){
    dp[i] = Array(col);
    dp[i][0] = 1;
  }
  
  for(let i=1; i <col; i++) {
    dp[0][i] = 0;
  }
  
  for(let i=1; i<rows; i++){
    for(let j=1; j<col; j++) {
      dp[i][j] = dp[i-1][j-nums[i-1]] + dp[i-1][j];
    }
  }
  return dp[rows-1][col-1];
  
};

const result = findTargetSumWays([1,1,1,1,1], 3);

console.log(result);
// [
//   [ 1, 0, 0, 0, 0 ],
//   [ 1, 1, 0, 0, 0 ],
//   [ 1, 2, 1, 0, 0 ],
//   [ 1, 3, 3, 1, 0 ],
//   [ 1, 4, 6, 4, 1 ],
//   [ 1, 5, 10, 10, 5 ]
// ]

