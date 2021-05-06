// 159. Longest Substring with At Most Two Distinct Characters
// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
// Given a string s, return the length of the longest substring that contains at most two distinct characters.

// Example 1:
// Input: s = "eceba"
// Output: 3
// Explanation: The substring is "ece" which its length is 3.

// Example 2:
// Input: s = "ccaabbb"
// Output: 5
// Explanation: The substring is "aabbb" which its length is 5.

/**
 * @param {string} s
 * @return {number}
 */
// Hint: Sliding window approch
// keep pointer left and right
// increment right untill window is valid.
// If window became invalid increment left untill window became valid
// so on untill right === s.length.

var lengthOfLongestSubstringTwoDistinct = function(s) {
  let map = {};
  let left = 0;
  let right = 0;
  let result = "";
  while(right<s.length) {
    map[s[right]] = (map[s[right]] || 0)+1;
    //If map length === 2 hence distinct char are 3 so reduce window size untill window became valid.
    if(Object.keys(map).length === 3) {
      while(Object.keys(map).length > 2) {
        map[s[left]]--;
        if(map[s[left]] === 0) {
          delete map[s[left]];
        }
        left++;
      }
    }
    
    if(result.length < (right - left+1)) {
      result = s.substring(left, right+1);
    }
    right++;
  }
  return result.length;
};

lengthOfLongestSubstringTwoDistinct("eceba");
// 3
