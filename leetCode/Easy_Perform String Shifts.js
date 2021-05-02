// https://leetcode.com/problems/perform-string-shifts/
// Key: string rotation array rotation arrayRotation 

// https://www.youtube.com/watch?v=sNH-f_5Gm0I&list=PLEJXowNB4kPwCPVjDv6KsAsThtDOCQUok&index=14
// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.


// Example 1:
// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation: 
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"


// Example 2:
// Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
// Output: "efgabcd"
// Explanation:  
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  let leftRotation = 0;
  //Normalize given rotations to leftRotations
  for(const [dir, amount] of shift) {
    if(dir === 0) {
      leftRotation += amount;
    } else {
      leftRotation -= amount;
    }
  }
  const n = s.length;
  //If right rotations are more then conver to leftRotation = n - rightRotation; 
  // but in our case (-leftRotation) is rightRotations hence
  // hence leftRotation = n + leftRotation;
  leftRotation = ((leftRotation > 0) ? leftRotation : s.length+leftRotation)%n;  
  s = s.split("");
  
  //Rotate string to left
  const rotateLeft = (s, leftRotation) =>{
    let count = 0;
    for(let startIndex = 0; count < s.length; startIndex++) {
      let nextIndex = startIndex;
      let prevElement = s[startIndex];
      do{
        nextIndex = (nextIndex - leftRotation + s.length) % s.length;
        [s[nextIndex], prevElement] = [prevElement, s[nextIndex]];
        count++;
      } while(count < s.length && startIndex !== nextIndex)
    }
    return s.join('');
  }
  return rotateLeft(s, leftRotation);
};
  
  stringShift("xqgwkiqpif", [[1,4],[0,7],[0,8],[0,7],[0,6],[1,3],[0,1],[1,7],[0,5],[0,6]]);
//"qpifxqgwki"
  
  
  

