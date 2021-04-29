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
  var longestLine = function (M) {
    if (!M || !M.length || !M[0].length) return 0;
    const rows = M.length;
    const cols = M[0].length;
    const sumM = Array(rows + 1);

    for (let i = 0; i < rows + 1; i++) {
      sumM[i] = Array(cols + 1)
        .fill()
        .map((u) => ({
          H: 0,
          V: 0,
          DL: 0,
          RD: 0,
        }));
    }
      
    let result = 0;
      
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        if (M[i - 1][j - 1]) {
          sumM[i][j]["H"] = sumM[i][j - 1]["H"] + 1;
          sumM[i][j]["V"] = sumM[i - 1][j]["V"] + 1;
          sumM[i][j]["DL"] = sumM[i - 1][j - 1]["DL"] + 1;
          sumM[i][j]["RD"] = j < cols ? sumM[i - 1][j + 1]["RD"] + 1 : 0;
          result = Math.max(result, sumM[i][j]["H"], sumM[i][j]["V"], sumM[i][j]["DL"], sumM[i][j]["RD"]);
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

