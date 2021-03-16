// Robot Bounded In Circle
// https://leetcode.com/problems/robot-bounded-in-circle/
// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.
// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

// Example 1:
// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

// Example 2:
// Input: instructions = "GG"
// Output: false
// Explanation: The robot moves north indefinitely.

// Example 3:
// Input: instructions = "GL"
// Output: true
// Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const dirArr = [{dx:0,dy:1}, //Pointing North
                    {dx:1, dy:0}, //Pointing East
                    {dx:0, dy:-1}, //Pointing South
                    {dx:-1, dy:0}];//Pointing West
    let dir = 0;
    let x = 0;
    let y=0;
  
    for(let i=0; i<instructions.length; i++){
      if(instructions[i] === "R") {
        dir = (dir+1) % 4; // Rotate clockwise
      } else if(instructions[i] === "L") {
        dir = (dir-1+4) % 4; // Rotate anti clockwise
      } else {
        x = x + dirArr[dir].dx;
        y = y + dirArr[dir].dy;
      }
    }
    //If its at origin OR Pointing any other than north
    return ((x===0 && y===0) || dir !== 0) ? true : false;
};




