// https://leetcode.com/problems/longest-common-subsequence/
// https://www.youtube.com/watch?v=LAKWWDX3sGw&list=PLEJXowNB4kPwCPVjDv6KsAsThtDOCQUok&index=26

// Given two strings text1 and text2, return the length of their longest common subsequence.
// A subsequence of a string is a new string generated from the original string with some characters(can be none) 
// deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). 
// A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// HINT: Create matrix with text1.length+1 by text2.length+1 size.
// fill 0 row and 0 col with 0
// if(text1[i-1] === text2[j-1]) 1 + exclude both char.
// else include char with max length subsequence.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let row = text1.length+1;
  let col = text2.length+1;
  let table = Array(row);
  
  for(let i=0; i < row; i++){
    table[i] = Array(col);
    table[i][0] = 0;
  }
  
  for(let j=1; j < col; j++){
    table[0][j] = 0;
  }
  
  for(let i=1; i<row; i++){
    for(let j=1; j<col; j++){
      table[i][j] = (text1[i-1] === text2[j-1]) 
                    ? table[i-1][j-1] + 1 // Exclude char from both strings
                    : Math.max(table[i-1][j], table[i][j-1]); // include char which give max length sub sequence
    }
  }
  
  return table[row-1][col-1];
};


