// https://leetcode.com/problems/minimum-window-substring/
// 76. Minimum Window Substring

// Given two strings s and t, return the minimum window in s which will contain all the characters in t. 
// If there is no such window in s that covers all characters in t, return the empty string "".

// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// Hint: https://www.youtube.com/watch?v=eS6PZLjoaq8&t=87s
// Create map with char: count from string t
// create 2 pointer left = 0 and i =0
// for(i =0 to s.length-1)
// increment i untill string from left to i had all chat from t (windowMatchCount === t.length)
// store result
// Then increment left untill (windowMatchCount !== t.length) --> increment left and check is valid window if valid save new result
// If not valid window then break and start incrementing the i.

var minWindow = function(s, t) {
  const map = {};
  for(let i=0; i<t.length; i++) {
    map[t[i]] = (map[t[i]] || 0) + 1;
  }
  
  let windowMatchCount = 0;
  let resultLen = s.length;
  let result = "";
  let left = 0;
  
  for(let i=0; i<s.length; i++) {
    const right = s[i];
    if(right in map) {
      map[right]--;
      if(map[right] >= 0) {
        windowMatchCount++; 
      }
    }
    
    while(windowMatchCount === t.length && left < s.length) {
      if(resultLen >= i-left+1) {
        resultLen = i-left+1;
        result = s.substring(left, i+1);
      }
      
      if(s[left] in map) {
        map[s[left]]++;
        if(map[s[left]]>0) {
          windowMatchCount--;
        }
      }
      left++;
    }
  }
  
  return result;
};

minWindow("ADOBECODEBANC", "ABC");
//"BANC"
