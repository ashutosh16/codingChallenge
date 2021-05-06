// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const st = [];
  for(let i=0; i<s.length; i++) {
    const b = s[i];
    switch(b) {
      case "(": st.push(")");
        break;
      case "[" : st.push("]");
        break;
      case "{": st.push("}");
        break;
      default: if(st.pop() !== s[i]) {
        return false;
      }
    }
  }
  return !st.length;
};
