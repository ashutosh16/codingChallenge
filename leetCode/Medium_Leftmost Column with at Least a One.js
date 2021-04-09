//https://leetcode.com/problems/leftmost-column-with-at-least-a-one/
//Leftmost Column with at Least a One

// A row-sorted binary matrix means that all elements are 0 or 1 and each row of the matrix is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return the index (0-indexed) of the leftmost column with a 1 in it. If such an index does not exist, return -1.

// You can't access the Binary Matrix directly. You may only access the matrix using a BinaryMatrix interface:

// BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
// BinaryMatrix.dimensions() returns the dimensions of the matrix as a list of 2 elements [rows, cols], which means the matrix is rows x cols.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

// For custom testing purposes, the input will be the entire binary matrix mat. You will not have access to the binary matrix directly.

// Input: mat = [[0,0],[1,1]]
// Output: 0

// Input: mat = [[0,0],[0,1]]
// Output: 1

// Input: mat = [[0,0],[0,0]]
// Output: -1

// Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
// Output: 1

// https://www.youtube.com/watch?v=K2E5fMMAf5U&list=PLEJXowNB4kPwCPVjDv6KsAsThtDOCQUok&index=21

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

// HINT: Move from right-bottom to top-left like ladder
// If you got 0 at right means no 1 present left to that as all rows are sorted.
// Start from right-bottom and if got 0 move up and got 1 move right with result=colNumber untill outof bound either by left or top.
// Time complexity : O(col+row)

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
function leftMostColumnWithOne(binaryMatrix){
  const [row, col] = binaryMatrix.dimensions();
  let i = row-1;
  let j = col-1;
  let result = -1;
  
  while(i<row && i >-1 && j < col && j>-1){
    if( binaryMatrix.get(i, j) === 1) {
      result = j;
      j--;
    } else {
      i--;
    }
  }
  return result;
}

leftMostColumnWithOne([[0,0],[1,1]]);
//0




