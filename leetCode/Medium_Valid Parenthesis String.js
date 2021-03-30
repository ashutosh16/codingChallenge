// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. 
// We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
// Example 1:
// Input: "()"
// Output: True

// Example 2:
// Input: "(*)"
// Output: True

// Example 3:
// Input: "(*))"
// Output: True

// https://leetcode.com/problems/valid-parenthesis-string/
// https://www.youtube.com/watch?v=KuE_Cn3xhxI&list=PLEJXowNB4kPwCPVjDv6KsAsThtDOCQUok&index=16

// HINT: 
// 1. create stack for openBracket
// 2. Create stack for *
// 3. close bracket found then pop the openStack
// 4. If open stack is 0 the pop the * stack to nbotmalize closing bracket
// 5. If * stack is also 0 then return false as open bracket is not normalizable.
// 6. If reach end of the string 
//    check if open bracket stack is length 0. if yes return true.
//    else openBracket.pop() and then pop * bracket index > open bracket index.


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let openB =[];
  let star = [];
  
  for(let i=0; i<s.length; i++){
    if(s[i] === "(") {
      openB.push(i);
    } else if(s[i] === "*") {
      star.push(i);
    } else {
      if(openB.length){
        openB.pop();
      } else if(star.length){
        star.pop();
      } else {
        return false;
      }
    }
  }
  
  while(openB.length) {
    if(!star.length || openB.pop() > star.pop()){
      return false;
    }
  }
  return true;
};
