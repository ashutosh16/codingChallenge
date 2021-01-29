// Given a 2D grid consists of 0s (land) and 1s (water).  
// https://leetcode.com/problems/number-of-closed-islands/

// An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
// Return the number of closed islands.

// Example 1:
// Input: grid = [[1,1,1,1,1,1,1,0],
//                [1,0,0,0,0,1,1,0],
//                [1,0,1,0,1,1,1,0],
//                [1,0,0,0,0,1,0,1],
//                [1,1,1,1,1,1,1,0]]
// Output: 2
// Explanation: 
// Islands in gray are closed because they are completely surrounded by water (group of 1s).

// Example 2:
// Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// Output: 1


// Example 3:
// Input: grid = [[1,1,1,1,1,1,1],
//                [1,0,0,0,0,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,1,0,1,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,0,0,0,0,1],
//                [1,1,1,1,1,1,1]]
// Output: 2


var DFS = (i,j, grid) => {
  if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return false;
  if(grid[i][j] === 1 || grid[i][j] === null) return true;
  grid[i][j] = null;
  let left = DFS(i, j-1, grid);
  let right = DFS(i, j+1, grid);
  let down = DFS(i+1, j, grid);
  let up = DFS(i-1, j, grid);
  
  return left && right && up && down; 
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  let count = 0;
  
  for(let i= 0; i < grid.length; i++){
    for(let j=0; j < grid[0].length; j++){
      if(grid[i][j] === 0 && DFS(i, j, grid)) {
        count++;
      }
    }
  }
  return count;
};


closedIsland([[0,1,1,1,0],[1,0,1,0,1],[1,0,1,0,1],[1,0,0,0,1],[0,1,1,1,0]]);
// 1
