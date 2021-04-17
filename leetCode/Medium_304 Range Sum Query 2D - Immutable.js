// https://leetcode.com/problems/range-sum-query-2d-immutable/
// Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

// Implement the NumMatrix class:

// NumMatrix(int[][] matrix) initializes the object with the integer matrix matrix.
// int sumRegion(int row1, int col1, int row2, int col2) returns the sum of the elements of the matrix array inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 

// Example 1:
// Input
// ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
// [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
// Output
// [null, 8, 11, 12]

// Explanation
// NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangele).
// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangele).
// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangele).

/**
 * @param {number[][]} matrix
 */

// Hint : Use Dynamic programming 
// Create dp array of sum where dp[i][j] is sum of matrix 0,0 to i,j
// Check leetcode solution
var NumMatrix = function(matrix) {
  this.dp = Array(matrix.length);
  this.dp[0] = Array(matrix[0].length);
  this.dp[0][0] = matrix[0][0];
  
  for(let i=1; i< matrix.length; i++) {
    this.dp[i] = Array(matrix[0].length);
    this.dp[i][0] = this.dp[i-1][0] + matrix[i][0];
  }
  
  for(let i=1; i< matrix[0].length; i++) {
    this.dp[0][i] = this.dp[0][i-1] + matrix[0][i];
  }
  
  for(let i=1; i< matrix.length; i++){
    for(let j=1; j< matrix[0].length; j++) {
      this.dp[i][j] = this.dp[i-1][j] + this.dp[i][j-1] - this.dp[i-1][j-1] + matrix[i][j];
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.dp[row2][col2] - 
      (row1 > 0 ? this.dp[row1-1][col2] : 0) - 
      (col1 > 0 ? this.dp[row2][col1-1] : 0) + 
      ((row1> 0 && col1>0) ? this.dp[row1-1][col1-1] : 0 );
};

// Your NumMatrix object will be instantiated and called as such:
var obj = new NumMatrix([
  [3,0,1,4,2],
  [5,6,3,2,1],
  [1,2,0,1,5],
  [4,1,0,1,7],
  [1,0,3,0,5]
]);
// this.dp -->
// [
//   [  3,  3,  4,  8, 10 ],
//   [  8, 14, 18, 24, 27 ],
//   [  9, 17, 21, 28, 36 ],
//   [ 13, 22, 26, 34, 49 ],
//   [ 14, 23, 30, 38, 58 ]
// ]
var param_1 = obj.sumRegion(2,1,4,3); //8
var param_1 = obj.sumRegion(1,1,2,2); //11
var param_1 = obj.sumRegion(1,2,2,4); //12
