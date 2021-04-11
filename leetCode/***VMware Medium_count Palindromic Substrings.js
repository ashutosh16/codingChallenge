// 647. Palindromic Substrings

// Share Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


/**
 * @param {string} s
 * @return {number}
 */
// HINT: create dp matrix of length n where row is start index and col is end index of substring.
// 1. all diagonal is length 1 sub string like 0 to 0, 1to1, so they always a palindrome.
// 2. for 2 char substrings S[i] == S[i+1] dp[i][i+1] is palindrome.
// 3. for more than 2 length like n if start to end --> (s[start] === s[end]) && (dp[start+1][end-1] is palindrome) --> then substring start to end is palindrome.

// https://www.youtube.com/watch?v=UflHuQj6MVA
var countSubstrings = function(s) {
    const dp = Array(s.length);
    let count = 0;
    for(let i=0; i<s.length; i++) {
      dp[i] = Array(s.length);      
    }
  
    for(let i=0; i<s.length; i++) {
      dp[i][i] = true;
      count++;
    }
  
    for(let i=0; i<s.length-1; i++) {
      dp[i][i+1] = (s[i] === s[i+1]);
      dp[i][i+1] && (count++);
    }
  
    for(let length = 3; length<=s.length; length++){
      let start = 0;
      let end = start+length-1;
      while(end < s.length) {
        dp[start][end] = (s[start] === s[end] && dp[start+1][end-1]);
        dp[start][end] && (count++);
        start++;
        end++;
      }
    }
  return count;
};


countSubstrings("aaa"); //6
countSubstrings("abc"); //3

