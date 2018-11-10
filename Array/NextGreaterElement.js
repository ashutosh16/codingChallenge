/**
 * Given an array, print the Next Greater Element (NGE) for every element.
 * The Next greater Element for an element x is the first greater element on the right side of x in array.
 * Elements for which no greater element exist, consider next greater element as -1.
 * Time complexity O(n)
 */ 

{ 
  function nextGreaterElement(a){
    let stack = [a[0]];
    for(let i = 1; i < a.length; i++){
      // pop Element from stack till top element from stack is greater than a[i]
      while (stack.length !== 0 && stack[stack.length-1] < a[i]){
        let temp = stack.pop();
        console.log(`Next greatest elelment for ${temp} - '${a[i]}'`);
      }
      // Push a[i] in the stack if a[i] < top element in stack
      stack.push(a[i]);
    }
    while(stack.length !== 0) {
      console.log(`Next greatest elelment for ${stack.pop()} - '-1'`);
    }
      
  }
  let a = [4,3,5,2,1,25];
  nextGreaterElement(a);
}