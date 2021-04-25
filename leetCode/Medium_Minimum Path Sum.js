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

var minPathSum = function(g) {
  const rows = g.length;
  const cols = g[0].length;
  
  const dp = Array(g[0].length).fill(Number.MAX_SAFE_INTEGER); //We just need to store calculated path prevRow and prevCell.
  dp[0] = 0;
  let cell = Number.MAX_SAFE_INTEGER;
  
  for(let i=0; i<rows; i++){
    cell = Number.MAX_SAFE_INTEGER;
    for(let j=0; j<cols; j++){
      dp[j] = Math.min(dp[j]+g[i][j], cell+g[i][j]);
      cell = dp[j] ;
    }
  }
  return dp[cols-1];
};
