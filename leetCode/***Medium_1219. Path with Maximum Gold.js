// https://leetcode.com/problems/path-with-maximum-gold/
// In a gold mine grid of size m x n, 
// each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.
// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.
 
// Example 1:
// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.

// Example 2:
// Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
// Output: 28
// Explanation:
// [[1,0,7],
//  [2,0,6],
//  [3,4,5],
//  [0,3,0],
//  [9,0,20]]
// Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  const rL = grid.length;
  const cL = grid[0].length;
  
  const DFS = (row, col)=>{
    if(row < 0 || row>=rL || col<0 || col>=cL || !grid[row][col]) return 0;
    
    const dir = [[1, 0],[-1, 0], [0, 1], [0, -1]];
    const val = grid[row][col];
    let maxGold = 0;
    grid[row][col] = 0; // Mark as visited.
    for(let i=0; i<dir.length; i++) {
      const [nextRow, nextCol] = [row+dir[i][0], col+dir[i][1]];
      maxGold = Math.max(maxGold, val + DFS(nextRow, nextCol));
    }
    grid[row][col] = val; //Revert the visited node for next directional path.
    return maxGold;
  };
  
  let result = 0;
  for(let i=0; i<grid.length; i++){
    for(let j=0; j<grid[0].length; j++){
      if(grid[i][j]) {
        result = Math.max(result, DFS(i, j));
      }
    }
  }
  return result;
};

getMaximumGold([[0,6,0],[5,8,7],[0,9,0]]); //24
