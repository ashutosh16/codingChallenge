// https://leetcode.com/problems/maximize-distance-to-closest-person/

// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, 
// and seats[i] = 0 represents that the ith seat is empty (0-indexed).
// There is at least one empty seat, and at least one person sitting.
// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 
// Return that maximum distance to the closest person.

// Example 1:
// Input: seats = [1,0,0,0,1,0,1]
// Output: 2
// Explanation: 
// If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
// If Alex sits in any other open seat, the closest person has distance 1.
// Thus, the maximum distance to the closest person is 2.

// Example 2:
// Input: seats = [1,0,0,0]
// Output: 3
// Explanation: 
// If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
// This is the maximum distance possible, so the answer is 3.

// Example 3:
// Input: seats = [0,1]
// Output: 1


/**
 * @param {number[]} seats
 * @return {number}
 */
// Hint: find (currentPersonIndex - prevPersonIndex) / 2 is the resultDistence 
// if(prev === null) resultDistence= current
// current >=n resultDistence = current - prevIndex -1;

var maxDistToClosest = function(seats) {
  let prevPersonIndex = null;
  let c = 0;
  let resultDistence = 0;
  let n = seats.length;
  while(c<n) {
    while(seats[c] !== 1 && c < n) c++;
    if(c<n) {
//       No preson is seating before c index
      if(prevPersonIndex === null) {
        resultDistence = c;
        prevPersonIndex = c;
      } else {
//         resultDistence = center of previous and current index.
        resultDistence = Math.max(resultDistence, Math.floor((c-prevPersonIndex)/2));
        prevPersonIndex = c;
      }
    } else {
//       No person fount till end of the seats.
      resultDistence = Math.max(resultDistence, c-prevPersonIndex-1);
    }
    c++;
  }
  return resultDistence;
};


