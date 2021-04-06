// 84. Largest Rectangle in Histogram
// https://leetcode.com/problems/largest-rectangle-in-histogram/

// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

// histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// Example:
// Input: [2,1,5,6,2,3]
// Output: 10
 

// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.


// Example 2:
// Input: heights = [2,4]
// Output: 4

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = (h) => {
  const leftStact = [];// stack to find leftIndex
  const rightStack = [];// stack to find rightIndex
  const leftIndex = [];// store the left most included index for each bar.
  const rightIndex = [];// store the right most included index for each bar.
  const n = h.length;
  for(let i=0; i<n; i++) {
    //calculate leftIndex for i
    while(leftStact.length && h[leftStact[leftStact.length-1]] >= h[i]){
      leftStact.pop();
    }
    leftIndex[i] = leftStact.length ? leftStact[leftStact.length-1]+1: 0;
    leftStact.push(i);

   //calculate rightIndex for i
    const j = n-1-i;
    while(rightStack.length && h[rightStack[rightStack.length-1]] >= h[j]){
      rightStack.pop();
    }
    rightIndex[j] = rightStack.length ? rightStack[rightStack.length-1]-1 : n-1;
    rightStack.push(j);
  }
  
  console.log(leftIndex,rightIndex );
  let resultArea = 0;
 // Calculate the rectangle area with each bar included fully.
  for(let i=0; i<n; i++) {
    resultArea = Math.max((rightIndex[i] - leftIndex[i] + 1) * h[i], resultArea); 
  }
  return resultArea;
}

largestRectangleArea([2,1,5,6,2,3]);
// leftIndex = [ 0, 0, 2, 3, 2, 5 ] 
// rightIndex = [ 0, 5, 3, 3, 5, 5 ]
// result = 10

// Hint
// // https://www.youtube.com/watch?v=vcv3REtIvEo&t=0s
// When we try to calculate the max area. Atlease one bar is fully included in the result area.
// Hence we calculate the area will be covered when 0 to n bar is fully included at a time.
// example. When 0 bar is fully included,  1 bar is fully included,  2 bar is fully included etc 
// to get the area, we need to find what is left index and right index can be included in the current bar.
// then to find area rightIndex-LeftInmdex+1 * hight of the current bar.

// To get left index for all bar travel bar from left to rihgt with maintaining stack.
// To get rihgt index for all bar travel bar from right to left with maintaining stack.

