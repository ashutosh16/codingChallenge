/**
 * Longest common subsequence problem
 * Time complexity is O(m*n)
 */
{
 function LCS(str1, str2) {debugger;
   let result = []
    m = str1.length,
    n = str2.length;

   //Create the matrix of lcs
   for (let i = 0; i <= m; i++) {
    result.push([]);
    for (let j = 0; j <= n; j++) {
      if( i === 0 || j === 0) {
        result[i][j] = 0;
      } else {
        if (str1[i-1] === str2[j-1]) {
          //if char are matching then lcs length is 1 + diagonal length in result matrix 
          result[i][j] = 1 + result[i-1][j-1];
        } else {
          //if char are not matching then lcs count is max of upper or lower cell in result matrix.
          result[i][j] = Math.max( result[i-1][j], result[i][j-1]);
        }
      }
    }
   }

   let i = m, j = n, resultStr = '';
   while (result[i][j] !== 0) {
    if(result[i][j] > Math.max(result[i][j-1], result[i-1][j])) {
      resultStr = str1[i-1] + resultStr;
      i--;
      j--;
    } else
      if (result[i][j] === result[i][j - 1]){
        j--;
      } else {
        i--;
      }
   }

   return resultStr;

 }
  LCS('alexis', 'reflex');
  //lex

  LCS('stone', 'longest');
  //one
}


