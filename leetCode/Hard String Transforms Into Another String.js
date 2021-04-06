// https://www.youtube.com/watch?v=JXEBGi3mjfE

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

// Hint: create a map to show the mapping of each char deom strng1 to string2
// If char repeat it should match the earlier mapping else return false.
// map S2 is for coener case where st1 & st2 length is 26 and all char in string are unique.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function(str1, str2) {
  if(str1.length !== str2.length) return false;
  if(str1 === str2) return true;
  let n = str1.length, 
      map = {}, // show the mapping of str1 char to str2 char
      s2 = {}; // Count number of unique char in string2 for corner case in last if.
  
  let swapCount = 0;
  for(let i = 0; i < n; i++){
    s2[str2[i]] = 1;
    if(map[str1[i]]) {
      if(map[str1[i]] !== str2[i]) return false;
    } else {
      map[str1[i]] = str2[i];
    }
  }
  //for corner case where str1 & atr2 has 26 char and str2 has all unique char then its not possible to match
  if(str1.length === 26 &&  Object.keys(s2).length === 26) return false;
  return true;  
};

