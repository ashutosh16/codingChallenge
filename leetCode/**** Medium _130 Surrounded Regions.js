// https://leetcode.com/problems/surrounded-regions/
// Given an m x n matrix board containing 'X' and 'O', capture all regions surrounded by 'X'.
// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Input: board = [
//   ["X","X","X","X"],
//   ["X","O","O","X"],
//   ["X","X","O","X"],
//   ["X","O","X","X"]]

// Output: [
//   ["X","X","X","X"],
//   ["X","X","X","X"],
//   ["X","X","X","X"],
//   ["X","O","X","X"]]

// Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. 
// Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. 
// Two cells are connected if they are adjacent cells connected horizontally or vertically.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// HINT: 
// Run DFS to all nodes with value O and at border of the board.
// This will run on left and right border.
// This will run on top and bottom border.
// All nodes with V means are connected to corner marked as O and remaining O marked as X.

var solve = function(board) {
  const rows = board.length;
  const cols = board[0].length;
  
  const DFS = (row, col) =>{
    if(row < 0 || row >=rows || col < 0 || col >=cols || board[row][col] === "X" || board[row][col] === "V") return;
    board[row][col] = "V";
    DFS(row-1, col);
    DFS(row+1, col);
    DFS(row, col-1);
    DFS(row, col+1);
  };
//   Run DFS to all nodes with value O and at border of the board.
//   This will run on left and right border.
  for(let i=0; i < rows; i++) {
    if(board[i][0] === "O") DFS(i, 0);
    if(board[i][cols-1] === "O") DFS(i, cols-1);
  }
  
//   This will run on top and bottom border.
  for(let j=0; j < cols; j++) {
    if(board[0][j] === "O") DFS(0, j);
    if(board[rows-1][j] === "O") DFS(rows-1, j);
  }
  
//   All nodes with V means are connected to corner marked as O and remaining O marked as X.
  for(let i=0; i<rows; i++) {
    for(let j=0; j<cols; j++){
      if(board[i][j] === "O") {
        board[i][j] = "X";
      } else if(board[i][j] === "V") {
        board[i][j] = "O";
      } 
    }
  }
};

solve([
  ["X","O","X"],
  ["O","X","O"],
  ["X","O","X"]]);

// ["X","O","X"],
// ["O","X","O"],
// ["X","O","X"]]

