// https://leetcode.com/problems/swap-adjacent-in-lr-string/

// In a string composed of 'L', 'R', and 'X' characters, like "RXXLRXRXL", a move consists of either replacing one occurrence of "XL" with "LX", or replacing one occurrence of "RX" with "XR". Given the starting string start and the ending string end, return True if and only if there exists a sequence of moves to transform one string to the other.

// Example 1:
// Input: start = "RXXLRXRXL", end = "XRLXXRRLX"
// Output: true
// Explanation: We can transform start to end following these steps:
// RXXLRXRXL ->
// XRXLRXRXL ->
// XRLXRXRXL ->
// XRLXXRRXL ->
// XRLXXRRLX

// Example 2:
// Input: start = "X", end = "L"
// Output: false

// Example 3:
// Input: start = "LLR", end = "RRL"
// Output: false

// Example 4:
// Input: start = "XL", end = "LX"
// Output: true

// Example 5:
// Input: start = "XLLR", end = "LXLX"
// Output: false

// Hint:
// 1. count number of X in both string should be same
// 2. 2 pointer one with start and another with end string.
// 3. check non X char sequencialy it should be same on both strings.
// 4. As we can replace "XL" with "LX" hence (s > e) for valid string else return false.
// 5. As we can replace "RX" with "XR" hence (s < e) for valid string else return false.

/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
  let count = 0;
  const n = start.length;
  
  // count X in start and end --> should be the same
  for(let i=0; i<start.length; i++){
    if(start[i] === "X") count++;
    if(end[i] === "X") count--;
  }
  if(count !== 0) return false;
  
  let s=0;
  let e=0;
  while(s < start.length && e < end.length) {
    while(s < n && start[s] === "X") s++; 
    while(e < n && end[e] === "X") e++; // "RX" with "XR"
    
    // s and e are the indices representing the next
    // occurrences of non-X characters
    if(s === start.length || e === end.length) {
      return (s === start.length && e === end.length);
    }
    
    if(start[s] !== end[e]) return false;
    
    if(start[s] === "L" && s < e) return false;//As we can replace "XL" with "LX" hence (s > e) for valid string
    if(start[s] === "R" && s > e) return false;//As we can replace "RX" with "XR" hence (s < e) for valid string
    s++;
    e++;
  }
  
  return true;
};

canTransform("RXXLRXRXL", "XRLXXRRLX"); // True

canTransform("LXXLXRLXXL", "XLLXRXLXLX"); // false

