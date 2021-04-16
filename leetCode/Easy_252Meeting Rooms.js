// https://leetcode.com/problems/meeting-rooms/
// Given an array of meeting time intervals where intervals[i] = [starti, endi], 
// determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

// Example 2:
// Input: intervals = [[7,10],[2,4]]
// Output: true

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals = intervals.sort((a,b)=>a[0]-b[0]);
  
  for(let i=0; i<intervals.length-1; i++){
    if(intervals[i][1] > intervals[i+1][0]){
      return false;
    }
  }
  return true;
};

canAttendMeetings([[0,30],[5,10],[15,20]]); //false


