// 286. Walls and Gates
// https://leetcode.com/problems/walls-and-gates/

// You are given an m x n grid rooms initialized with these three possible values.
// -1 A wall or an obstacle.
// 0 A gate.
// INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

// Example 1:
// Input: rooms = [[2147483647,-1,0,2147483647],
//                 [2147483647,2147483647,2147483647,-1],
//                 [2147483647,-1,2147483647,-1],
//                 [0,-1,2147483647,2147483647]]
// Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]


/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  let queue = [];
  for(let i=0; i<rooms.length; i++)
  for(let j=0; j<rooms[i].length; j++){
    if(rooms[i][j] === 0) queue.push([i,j]); // Add all gates in the queue.
  }
                  //Top     //right //down  //left
  let direction = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  
  while(queue.length){
    let [row, col] = queue.shift();
    for(let i=0; i<direction.length; i++){
      let [newRow, newCol] = [row + direction[i][0], col + direction[i][1]];
      if(newRow >=0 && newRow < rooms.length && newCol >=0 && newCol < rooms[0].length &&
         rooms[newRow][newCol] === 2147483647){
        rooms[newRow][newCol] = rooms[row][col] + 1;
        queue.push([newRow, newCol]);
      }
      
    }
  }
}

wallsAndGates([[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]);
// [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]

// // Hint
// Instead of searching from an empty room to the gates, how about searching the other way round? 
// In other words, we initiate breadth-first search (BFS) from all gates at the same time.
// Since BFS guarantees that we search all rooms of distance d before searching rooms of distance d + 1, the distance to an empty room must be the shortest.
