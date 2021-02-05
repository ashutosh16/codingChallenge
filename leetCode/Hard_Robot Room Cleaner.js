// Robot Room Cleaner
// https://leetcode.com/problems/robot-room-cleaner/


// Given a robot cleaner in a room modeled as a grid.
// Each cell in the grid can be empty or blocked.
// The robot cleaner with 4 given APIs can move forward, turn left or turn right. Each turn it made is 90 degrees.
// When it tries to move into a blocked cell, its bumper sensor detects the obstacle and it stays on the current cell.
// Design an algorithm to clean the entire room using only the 4 given APIs shown below.

// interface Robot {
//   // returns true if next cell is open and robot moves into the cell.
//   // returns false if next cell is obstacle and robot stays on the current cell.

//   boolean move();
//   // Robot will stay on the same cell after calling turnLeft/turnRight.
//   // Each turn will be 90 degrees.
//   void turnLeft();
//   void turnRight();

//   // Clean the current cell.
//   void clean();
// }
// Example:

// Input:
// room = [
//   [1,1,1,1,1,0,1,1],
//   [1,1,1,1,1,0,1,1],
//   [1,0,1,1,1,1,1,1],
//   [0,0,0,1,0,0,0,0],
//   [1,1,1,1,1,1,1,1]
// ],
// row = 1,
// col = 3

// Explanation:
// All grids in the room are marked by either 0 or 1.
// 0 means the cell is blocked, while 1 means the cell is accessible.
// The robot initially starts at the position of row=1, col=3.
// From the top left corner, its position is one row below and three columns right.
// Notes:

// The input is only given to initialize the room and the robot's position internally. You must solve this problem "blindfolded". In other words, you must control the robot using only the mentioned 4 APIs, without knowing the room layout and the initial robot's position.
// The robot's initial position will always be in an accessible cell.
// The initial direction of the robot will be facing up.
// All accessible cells are connected, which means the all cells marked as 1 will be accessible by the robot.
// Assume all four edges of the grid are all surrounded by wall.


/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

// https://www.youtube.com/watch?v=Rk8GMod2aCc
/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
  DFS(robot, 0, 0, 90);
};

function GoBack(robot){
  robot.turnRight();
  robot.turnRight();
  robot.move();
  robot.turnRight();
  robot.turnRight();
}

function GetPosition(row, col, angle) {
  if(angle === 90) {
    return { newRow: row-1, newCol: col};
  }
  if(angle === 180) {
    return { newRow: row, newCol: col+1};
  }
  if(angle === 270) {
    return { newRow: row+1, newCol: col};
  }
  if(angle === 0) {
    return { newRow: row, newCol: col-1};
  }
  
}

function DFS(robot, row, col, angle, visited = {}){
    robot.clean();
    visited[`${row}-${col}`] = true;
    
    for(let i=0; i< 4; i++){
      let {newRow, newCol} = GetPosition(row, col, angle); // Get new position if robot move in the given angle.
      if(visited[`${newRow}-${newCol}`] !== true && robot.move()){
        DFS(robot, newRow, newCol, angle, visited);
      }
      robot.turnLeft();
      angle = (angle - 90 + 360)%360;
    }
  
  GoBack(robot);
 
}
