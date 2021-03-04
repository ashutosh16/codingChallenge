// Count Square Submatrices with All Ones
// https://leetcode.com/problems/count-square-submatrices-with-all-ones/
// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.
// https://www.youtube.com/watch?v=Z2h3rkVXPeQ

// Example 1:

// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation: 
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.


// Example 2:

// Input: matrix = 
// [
//   [1,0,1],
//   [1,1,0],
//   [1,1,0]
// ]
// Output: 7
// Explanation: 
// There are 6 squares of side 1.  
// There is 1 square of side 2. 
// Total number of squares = 6 + 1 = 7.
 

// Constraints:

// 1 <= arr.length <= 300
// 1 <= arr[0].length <= 300
// 0 <= arr[i][j] <= 1



/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) { debugger;
    let row = matrix.length;
    let col = matrix[0].length;
    let resultM = [];
    let count = 0;
  
    // Create result matrix same size as given matrix fill the first row and first column of result matrix same as given matrix.
    for(let i=0; i<row; i++){
      resultM.push(Array(col));
      resultM[i][0] = matrix[i][0];
      matrix[i][0] && (count+=matrix[i][0]);
    }
  
    for(let i=1; i<col; i++){
      resultM[0][i] = matrix[0][i];
      matrix[0][i] && (count+= matrix[0][i]);
    }
  
    for(let i=1; i<row; i++){
      for(let j=1; j<col; j++){
        if(matrix[i][j] === 1) {
          resultM[i][j] = Math.min(resultM[i-1][j], resultM[i-1][j-1], resultM[i][j-1]) + 1;
          count += resultM[i][j];
        } else {
          resultM[i][j] = 0;
        }
      }
    }
  return count;
};


countSquares([[0,1,1,1],[1,1,1,1],[0,1,1,1]])
//15

countSquares([[1,0,1],[1,1,0],[1,1,0]])
//7
