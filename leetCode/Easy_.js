You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

direction can be 0 (for left shift) or 1 (for right shift). 
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.

 

Example 1:

Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"
Example 2:

Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:  
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  let l =0;
  let r=0;
  for(let i=0; i<shift.length; i++){
    if(shift[i][0] === 0) {
      l += shift[i][1];
    } else {
      r += shift[i][1];
    }
  }
  console.log(l, r);
 
  let leftRotation =( (l > r) ? (l-r) : s.length - (r-l)) % s.length;
  
  s = s.split("");
  let count = 0;
  for(let startIndex = 0; count < s.length; startIndex++) {
    let nextIndex = startIndex;
    let prevElement = s[startIndex];
    do{
      nextIndex = (nextIndex - leftRotation + s.length) % s.length;
      console.log(nextIndex);
      
      [s[nextIndex], prevElement] = [prevElement, s[nextIndex]];
      console.log(s);
      count++;
    } while(count < s.length && startIndex !== nextIndex)
  }
  return s.join('');
};
