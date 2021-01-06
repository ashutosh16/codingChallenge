// Given two strings str1 and str2 of the same length, determine whether you can transform str1 into str2 by doing zero or more conversions.
// In one conversion you can convert all occurrences of one character in str1 to any other lowercase English character.
// Return true if and only if you can transform str1 into str2.

// Example 1:
// Input: str1 = "aabcc", str2 = "ccdee"
// Output: true
// Explanation: Convert 'c' to 'e' then 'b' to 'd' then 'a' to 'c'. Note that the order of conversions matter.

// Example 2:
// Input: str1 = "leetcode", str2 = "codeleet"
// Output: false
// Explanation: There is no way to transform str1 to str2.
 

// Constraints:
// 1 <= str1.length == str2.length <= 104
// str1 and str2 contain only lowercase English letters.
// Reference : 
// https://www.youtube.com/watch?v=WBE1mQHsMI0
// https://www.youtube.com/watch?v=JXEBGi3mjfE

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function(str1, str2) {
  if(str1.length !== str2.length) return false;
  if(str1 === str2) return true;
  let n = str1.length, 
      map = {},
      s2 = {};// This use to count unique char in string2 using length of keys.
  
  let swapCount = 0;
  for(let i = 0; i < n; i++){
    s2[str2[i]] = 1;
    if(map[str1[i]]) {
      if(map[str1[i]] !== str2[i]) return false; // This means earlier conversin and current required conversion is different.
    } else {
      map[str1[i]] = str2[i];
    }
  }
  
  if(str1.length === 26 &&  Object.keys(s2).length === 26) return false; // This is the case where both string has 26 length and second string has 26(all) unique char.
  return true;
    
};

canConvert("abcdefghijklmnopqrstuvwxyz", "bcadefghijklmnopqrstuvwxzz");
// True

canConvert("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyzq");
//True

canConvert("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxzy"); //This is the cae where both string has 26 unique char so we cant convert.
//False
