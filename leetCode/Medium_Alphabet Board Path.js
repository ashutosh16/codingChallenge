// https://leetcode.com/problems/alphabet-board-path/
// On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].

// Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.

// We may make the following moves:

// 'U' moves our position up one row, if the position exists on the board;
// 'D' moves our position down one row, if the position exists on the board;
// 'L' moves our position left one column, if the position exists on the board;
// 'R' moves our position right one column, if the position exists on the board;
// '!' adds the character board[r][c] at our current position (r, c) to the answer.
// (Here, the only positions that exist on the board are positions with letters on them.)

// Return a sequence of moves that makes our answer equal to target in the minimum number of moves.  You may return any path that does so.

// Example 1:
// Input: target = "leet"
// Output: "DDR!UURRR!!DDD!"

// Example 2:
// Input: target = "code"
// Output: "RR!DDRR!UUL!R!"
 

// Constraints:
// 1 <= target.length <= 100
// target consists only of English lowercase letters.

//Reference : https://www.youtube.com/watch?v=rk-aB4rEOyU


/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {debugger;
    let board = {};
    let letterCount = 0;
    // Create Map with alphabet and there position in matrix
    for(let i = 97; i < 97+26; i++) {
      // char : [row, column]
      board[String.fromCharCode(i)] = [Math.floor(letterCount/5), letterCount % 5];
      letterCount++;
    }
    
    // this create steps path for given side for given steps
    let movePointer = (steps, side) => {
      (steps < 0) && (steps * -1);
      let i = 1;
      let path = '';
      while(i <= steps){
        path += side;
        i++;
      }
      return path;
    };
  
    let current = [0,0];
    let path = '';
    for(let i=0; i< target.length; i++){
      let [nextRow, nextCol] = board[target[i]];
      let [currentRow, currentCol] = [current[0], current[1]];
      
      let [horizontalSteps, verticalSteps] = [Math.abs(currentCol - nextCol), Math.abs(nextRow - currentRow)];
      
      if(nextRow > currentRow) {
        let move = (nextCol > currentCol) ? 'R' : 'L';
        path += movePointer(horizontalSteps, move);
        move = 'D';
        path += movePointer(verticalSteps, move);
      } else {
        let move = 'U';
        path += movePointer(verticalSteps, move);
        move =  (nextCol > currentCol) ? 'R' : 'L';
        path += movePointer(horizontalSteps, move);
      }
      // now current came to the next char plosition.
      current = [nextRow, nextCol];
      path += '!';
    }
    return path;
    
};
