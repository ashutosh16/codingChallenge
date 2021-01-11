// https://leetcode.com/problems/max-area-of-island/
// Max Area of Island
// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
// You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

//We can solve this using BFS as well as DFS





// This solution is using BFS
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let findArea = (row, col) => {
    grid[row][col] = 0;
    let area = 1;
    let list = [{row, col}];
    while(list.length) {
      let index = list.shift();
      // UP
      if(index.row > 0 && grid[index.row - 1][index.col]) {
        list.push({row: index.row - 1, col: index.col});
        grid[index.row - 1][index.col] = 0;
        area+=1;
      }
      
      //DOWN 
      if(index.row < grid.length-1 && grid[index.row + 1][index.col]) {
        list.push({row: index.row + 1, col: index.col});
        grid[index.row + 1][index.col] = 0;
        area+=1;
      }
      
      //Left
      if(index.col > 0 && grid[index.row][index.col-1]) {
        list.push({row: index.row, col: index.col-1});
        grid[index.row][index.col-1] = 0;
        area+=1;
      }
      
      //Right
      if(index.col < grid[index.row].length-1 && grid[index.row][index.col+1]) {
         list.push({row: index.row, col: index.col+1});
         grid[index.row][index.col+1] = 0;
        area+=1;
      }
     
    }
    return area;
  }
  
  let maxArea = 0;
  for(let row = 0; row < grid.length; row++)
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col]) {
        let area = findArea(row, col);
        if(area > maxArea) {
          maxArea = area;
        }
      }
    }
  
  return maxArea;
};


maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]);

// 6
