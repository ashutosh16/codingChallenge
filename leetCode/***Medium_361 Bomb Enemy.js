// Given an m x n matrix grid where each cell is either a wall 'W', an enemy 'E' or empty '0', 
// return the maximum enemies you can kill using one bomb. You can only place the bomb in an empty cell.

// The bomb kills all the enemies in the same row and column from the planted point until
// it hits the wall since it is too strong to be destroyed.

// Example 1:
// Input: grid = [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
// Output: 3

// Example 2:
// Input: grid = [["W","W","W"],["0","0","0"],["E","E","E"]]
// Output: 1


/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  if(grid.length === 0) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  let maxCount = 0;
  
  const colHits = Array(grid[0].length);
  let rowHits = 0;
  
  for(let i=0; i< rows; i++) {
    rowHits = 0;
    for(let j=0; j<cols; j++) {  
      //Need to recalculate the rowHits if its new row starting with col 0 or previous row cell is wall.
      if(j === 0 || grid[i][j-1] === "W") {
        rowHits = 0;
        for(let k = j; k<cols; k++) {
          if(grid[i][k] === "E") {
            rowHits++;
          } else if(grid[i][k] === "W") {
            break;
          }
        }
      }
        
      //Need to calculate the colHits if its first column or previous col cell is wall.
      if(i===0 || grid[i-1][j] === "W") {
        colHits[j]= 0;
        for(let k = i; k<rows; k++) {
          if(grid[k][j] === "E") {
            colHits[j] += 1;
          } else if(grid[k][j] === "W") {
            break;
          }
        }
      }
      //Even grid[i][j] === "E" we should calculate the rowHits & colHits because it will be used in next iterations.
      //we can only placed the bomb if cell is empty.
      if(grid[i][j] === "0"){
        maxCount = Math.max(maxCount, rowHits+colHits[j]);  
      }
    }
  }  
  return maxCount;
};


maxKilledEnemies([
  ["0","E","0","0"],
  ["E","0","W","E"],
  ["0","E","0","0"]
]);

//3



