// https://leetcode.com/problems/valid-square/
// Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

// The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

// A valid square has four equal sides with positive length and four equal angles (90-degree angles).

// Example 1:
// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: true

// Example 2:
// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
// Output: false

// Example 3:
// Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
// Output: true

//  Hint: https://www.youtube.com/watch?v=wrb-wRBK1t4
  // Calculate distence between all 6 sides. 4 side + 2 diagonal
  // you should get 2 sidtinct value with its squre.
  // All 4 side length will same as one value and 2 diagonal will have same length.
  // We dont need to understand which are sides and which are diagonals.
  // there should not be the any side or diagonal with length 0.
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  const findDis = (p1, p2) => ((p1[0]-p2[0])*(p1[0]-p2[0])) + ((p1[1]-p2[1])*(p1[1]-p2[1]));
  const map = {};
  map[findDis(p1,p2)] = true;
  map[findDis(p1,p3)] = true;
  map[findDis(p1,p4)] = true;
  map[findDis(p2,p4)] = true;
  map[findDis(p2,p3)] = true;
  map[findDis(p3,p4)] = true;
  
  return (Object.keys(map).length === 2 && !map[0]) ? true : false;
};
