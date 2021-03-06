// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length < 2) return s.length;
  let left = 0;
  let current =0;
  let w = new Map();
  let len = 0;
  
  while(current < s.length) {
    if(w.has(s[current])) {
      left = Math.max(left, w.get(s[current])+1); //Important to use max because start can be already ahead of last occurencr of curr the it should remain same position
    }
    w.set(s[current], current);
    len = Math.max(len, current - left +1);
    current++;
  }
  return len;
};


lengthOfLongestSubstring("abcabcbb");
// 3

lengthOfLongestSubstring("abba");
// 2


