// Maximal Square
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
// https://leetcode.com/problems/maximal-square/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let m = Array(matrix.length+1);
    for(let i=0; i< m.length; i++) {
      m[i] = Array(matrix[0].length+1);
      m[i][0] = 0; 
    }
    for(let i=0; i < m[0].length; i++) {
      m[0][i] = 0;
    }
    let result = 0;
    for(let i=1; i < m.length; i++){
      for(let j=1; j < m[i].length; j++){
        if(matrix[i-1][j-1] === "0") {
          m[i][j] = 0;
        } else {
          m[i][j] = Math.min(m[i-1][j], m[i][j-1], m[i-1][j-1])+1;
        }
        result = Math.max(result, m[i][j]*m[i][j]);
      }
    }
  
  return result;
};

