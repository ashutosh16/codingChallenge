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
var largestRectangleArea = function(heights) {
  let n = heights.length;
  let lR = Array(n); // store the left most included index for each bar.
  let rR = Array(n); // store the right most included index for each bar.
  let st = []; // stack to find lR
  let stR = []; // stack to find rR

  for(let i=0; i < n; i++){
    while(st.length && heights[st[st.length-1]] >= heights[i]) st.pop();
    if(st.length) {
      lR[i] =  st[st.length-1] +1;
    } else {
      lR[i] = 0;
    }
    st.push(i);
    
    let j = n - 1 - i;
    while(stR.length && heights[stR[stR.length-1]] >= heights[j]) stR.pop();
     if(stR.length) {
      rR[j] =  stR[stR.length-1] - 1;
    } else {
      rR[j] = n-1;
    }
    stR.push(j)
  }
  
  let result = 0;
  console.log(lR, rR);
  // Calculate the rectangle area with each bar included fully.
  for(let i=0; i < n; i++){
    result = Math.max(result, (rR[i] - lR[i] + 1) * heights[i]);
  }
  return result;
};


// Hint
// // https://www.youtube.com/watch?v=vcv3REtIvEo&t=0s
// When we try to calculate the max area. Atlease one bar is fully included in the result area.
// Hence we calculate the area will be covered when 0 to n bar is fully included at a time.
// example. When 0 bar is fully included,  1 bar is fully included,  2 bar is fully included etc 
// to get the area, we need to find what is left index and right index can be included in the current bar.
// then to find area rightIndex-LeftInmdex+1 * hight of the current bar.

// To get left index for all bar travel bar from left to rihgt with maintaining stack.
// To get rihgt index for all bar travel bar from right to left with maintaining stack.

