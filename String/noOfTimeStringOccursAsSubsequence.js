/**
 * Longest common subsequence problem
 * Time complexity is O(m*n)
 */
{
 function LCS(str1, str2) {debugger;
   let result = [[]],
    m = str1.length,
    n = str2.length;

   for (let i = 0; i <= n; i++) {
     result[0][i] = 0;
   }
   for (let i = 0; i <= m; i++) {
     result[i][0] = 1;
     result.push(Array(n));
   }
   debugger;

   //Create the matrix of lcs
   for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
        if (str1[i-1] === str2[j-1]) {
          //if char are matching then lcs length is 1 + diagonal length in result matrix 
          result[i][j] = result[i-1][j-1] + result[i-1][j];
        } else {
          //if char are not matching then lcs count is max of upper or lower cell in result matrix.
          result[i][j] = result[i-1][j];
        }
    }
   }

   return result[m][n];

 }
  LCS('Gks', 'GeeksforGeeks');
}


