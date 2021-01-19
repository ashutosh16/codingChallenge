// Longest Line of Consecutive One in Matrix
// https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/

// Given a 01 matrix M, find the longest line of consecutive one in the matrix. The line could be horizontal, vertical, diagonal or anti-diagonal.
// Example:
// Input:
// [[0,1,1,0],
//  [0,1,1,0],
//  [0,0,0,1]]
// Output: 3
// Hint: The number of elements in the given matrix will not exceed 10,000.

// Accepted
// 32,884
// Submissions
// 71,213


/**
 * @param {number[][]} M
 * @return {number}
 */

//Using 3D Dynamic Programming
var longestLine = function(M) {
    if (!M || !M.length || !M[0].length) return 0;
    let Msize = M.length;
    let resultMatrix = Array(Msize);
    for(let i=0; i < Msize; i++) {
      resultMatrix[i] = Array(M[i].length).fill(0);
    }
    
    let getMatrixVal = (row, col, direction) => {
      if(-1 < row && row < Msize && -1 < col && col < M[row].length) {
        return resultMatrix[row][col][direction] || 0;
      }
      return 0;
    }
    
    let result = 0;
  
    for(let i=0; i < Msize; i++){
      for(let j =0; j < M[i].length; j++) {
        resultMatrix[i][j] = {
          H : 0,
          V : 0,
          DL : 0,
          DR : 0
        };
        if(M[i][j] === 1) {
          resultMatrix[i][j]['H'] = getMatrixVal(i, j-1, 'H') + 1;
          resultMatrix[i][j]['V'] = getMatrixVal(i-1, j, 'V') + 1;
          resultMatrix[i][j]['DL'] = getMatrixVal(i-1, j-1, 'DL') + 1;
          resultMatrix[i][j]['DR'] = getMatrixVal(i-1, j+1, 'DR') + 1;
          console.log(resultMatrix[i][j]);
          result = Math.max(
            resultMatrix[i][j]['H'],
            resultMatrix[i][j]['V'],
            resultMatrix[i][j]['DL'],
            resultMatrix[i][j]['DR'],
            result
          );
        }
        
      }
    }
  return result;
};

longestLine([[1,1,1,1],[0,1,1,0],[0,0,0,1]]);
//4 

longestLine([[1,1,1]]);
//3

longestLine([[1,1,0,0,1,0,0,1,1,0],
             [1,0,0,1,0,1,1,1,1,1],
             [1,1,1,0,0,1,1,1,1,0],
             [0,1,1,1,0,1,1,1,1,1],
             [0,0,1,1,1,1,1,1,1,0],
             [1,1,1,1,1,1,0,1,1,1],
             [0,1,1,1,1,1,1,0,0,1],
             [1,1,1,1,1,0,0,1,1,1],
             [0,1,0,1,1,0,1,1,1,1],
             [1,1,1,0,1,0,1,1,1,1]
            ]);
//9



// Complexity Analysis
// Time complexity : O(mn)O(mn). We traverse the entire matrix once only.
// Space complexity : O(mn)O(mn). dpdp array of size 4mn4mn is used, where mm and nn are the number of rows ans coloumns of the matrix.

// In the above approach, 
//     we can observe that the current dpdp entry is dependent only on the entries of the just previous corresponding dpdp row. 
//     Thus, instead of maintaining a 2-D dpdp matrix for each kind of line of 1's possible, we can use a 1-d array for each one of them, 
//     and update the corresponding entries in the same row during each row's traversal.
//     Taking this into account, the previous 3-D dpdp matrix shrinks to a 2-D dpdp matrix now. 
//     The rest of the procedure remains same as the previous approach.

