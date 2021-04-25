// Maximal Square
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
// https://leetcode.com/problems/maximal-square/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(M) {
  const rows = M.length;
  const cols = M[0].length;
  let maxSize = 0;
  const dp = Array(rows+1);
  for(let i=0; i < dp.length; i++) {
    dp[i] = Array(cols+1).fill(0);
  }

  for(let i=1; i<=rows; i++) {
    for(let j=1; j<=cols; j++) {
      if(M[i-1][j-1] === "1") {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
        maxSize = Math.max(maxSize, dp[i][j]);
      }
    }
  }
  return maxSize * maxSize;
};

maximalSquare([["1","0","1","0"],
               ["1","0","1","1"],
               ["1","0","1","1"],
               ["1","1","1","1"]]);
// 4
