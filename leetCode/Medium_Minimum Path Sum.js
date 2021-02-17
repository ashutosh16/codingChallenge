// https://leetcode.com/problems/minimum-path-sum/
// https://www.youtube.com/watch?v=t1shZ8_s6jc&list=PLEJXowNB4kPwCPVjDv6KsAsThtDOCQUok&index=18

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time.

// Example 1:
// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Example 2:
// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let row = grid.length;
  let col = grid[0].length;
  
  let dp = Array(row);
  for(let i=0; i<row; i++) {
    dp[i] = Array(col);
    if(i===0) dp[i][0] = grid[i][0];
    else dp[i][0] = grid[i][0] + dp[i-1][0];
  }
  
  for(let i=1; i<col; i++) dp[0][i] = grid[0][i] + dp[0][i-1]
  
  for(let i=1; i<row; i++) {
    for(let j=1; j<col; j++) {
      dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j]) + grid[i][j];
    }
  }
  return dp[row-1][col-1];
};
