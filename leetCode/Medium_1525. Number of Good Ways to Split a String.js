// https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
// 1525. Number of Good Ways to Split a String
// You are given a string s, a split is called good if you can split s into 2 non-empty strings p and q where its concatenation is equal to s and the number of distinct letters in p and q are the same.

// Return the number of good splits you can make in s.

// Example 1:
// Input: s = "aacaba"
// Output: 2
// Explanation: There are 5 ways to split "aacaba" and 2 of them are good. 
// ("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
// ("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
// ("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
// ("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
// ("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.

// Example 2:
// Input: s = "abcd"
// Output: 1
// Explanation: Split the string as follows ("ab", "cd").

// Example 3:
// Input: s = "aaaaa"
// Output: 4
// Explanation: All possible splits are good.


/**
 * @param {string} s
 * @return {number}
 */
// HINT: Move left to right and calculate unique char till index i
// Move right to left then check is unique char from right to index i is equal to left to index i-1
var numSplits = function(s) {
  const n = s.length;
  const leftToRight = Array(s.length);
  let charMap = {};
  let count = 0;
  
  for(let i=0; i<n; i++){
    charMap[s[i]] = true;
    leftToRight[i] = Object.keys(charMap).length;
  }
  
  charMap = {};
  //move from right to left and check is unique char at right of i is equql to left of i-1
  for(let i=n-1; i>0; i--){
    charMap[s[i]] = true;
    if(leftToRight[i-1] === Object.keys(charMap).length) count++;
  }
  
  return count;
};

numSplits("aacaba")//2


