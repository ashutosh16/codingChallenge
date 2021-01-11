// https://leetcode.com/problems/number-of-islands/
// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1


// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
     let clearIslend = (row, col) => {
    if(row < 0 || row > grid.length-1 || col < 0 || col > grid[row].length-1 || grid[row][col] !== "1") return 0;
    
      grid[row][col] = 0;
      clearIslend(row-1, col);
      clearIslend(row+1, col);
      clearIslend(row, col-1);
      clearIslend(row, col+1);
  }
  
  let count = 0;
  for(let row = 0; row < grid.length; row++)
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === "1") {
        clearIslend(row, col);
        count++;
      }
    }
  
  return count;
};

numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]);
// 3

