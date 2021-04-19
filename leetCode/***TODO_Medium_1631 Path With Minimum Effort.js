// https://leetcode.com/problems/path-with-minimum-effort/
// You are a hiker preparing for an upcoming hike. You are given heights, 
// a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). 
// You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) 
// (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.
// A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.
// Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

// Example 1:
// Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
// Output: 2
// Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
// This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.

// Example 2:
// Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
// Output: 1
// Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].

// Example 3:
// Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
// Output: 0
// Explanation: This route does not require any effort.

/**
 * @param {number[][]} heights
 * @return {number}
 */
// Below solution only work for mode down and right.
var minimumEffortPath = function(heights) {
  const cols = heights[0].length;
  const rows = heights.length;
  const graph = Array(rows);
  
  for(let i=0; i<rows; i++) {
    graph[i] = Array(cols);
  }
  graph[0][0] = 0;
  
  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
      if(i===0 && j===0) continue;
      const top = (i>0) ? Math.max(graph[i-1][j], Math.abs(heights[i-1][j] - heights[i][j])) : Number.MAX_SAFE_INTEGER;
      const left = (j>0) ? Math.max(graph[i][j-1], Math.abs(heights[i][j-1] - heights[i][j])) : Number.MAX_SAFE_INTEGER;
      
      graph[i][j] = Math.min(top, left);
    }
    
  }
  console.log(graph);
  return graph[rows-1][cols-1];
};

minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]); //2
// graph
// [ [ 0, 1, 1 ], [ 2, 5, 1 ], [ 2, 2, 2 ] ]
