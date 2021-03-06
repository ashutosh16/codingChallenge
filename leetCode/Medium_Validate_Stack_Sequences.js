// Given two sequences pushed and popped with distinct values, 
// return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.
// [https://leetcode.com/problems/validate-stack-sequences/]
// Example 1:
// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

// Example 2:
// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.
 

// Constraints:

// 0 <= pushed.length == popped.length <= 1000
// 0 <= pushed[i], popped[i] < 1000
// pushed is a permutation of popped.
// pushed and popped have distinct values.

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    if(pushed.length !== popped.length) return false;
    if(pushed.length === 0) return true;
  
    let stack = [pushed[0]];
    let i = 1;
    let j = 0;
  
    while(i < pushed.length && j < popped.length) {
      if(stack[stack.length-1] === popped[j]) {
        stack.pop();
        j++;
      } else {
        if(i >= pushed.length) return false;
        stack.push(pushed[i]);
        i++;
      }
    }
  
    while(j < popped.length) {
      if(popped[j] !== stack.pop()) return false;
      j++;
    }
  
    return (stack.length === 0);
};

validateStackSequences([1,2,3,4,5], [4,5,3,2,1]);


