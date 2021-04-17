// https://leetcode.com/problems/meeting-rooms-ii/ 
// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
// return the minimum number of conference rooms required.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2

// Example 2:
// Input: intervals = [[7,10],[2,4]]
// Output: 1

// Hint
// Approch 1
// sort the meetings in inscresing order of start time.
// Create min heap and add first meeting.
// Iterate over all meetings and check if peek of min heap is <= meeting[i] end Time
// if yes pop from the min heap and add new meeting end time in min heap
// end return length of the min heap.
// Time Complexity: O(Nlog N)

// Hint 2
// 1. Seperateout start time and end time in 2 different arrays.
// 2. Sort startTime arr and endTime array.
// 3. then declare usedRooms = 0;
// 4. loop the starTime arr
  // if (start[startPointer] >= end[endPointer]) {
  //   usedRooms -= 1;
  //   endPointer += 1;
  // }
  // usedRooms += 1;
  // startPointer += 1;


/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
//   Seperate out startTime and endTime in 2 diff array
  const [startTimes, endTimes] =  intervals.reduce((acc, interval)=>{
    acc[0].push(interval[0]);
    acc[1].push(interval[1]);
    return acc;
  }, [[],[]]);
  
//   Sort both arrays
  startTimes.sort((a,b)=>a-b);
  endTimes.sort((a,b)=>a-b);
  
  let usedRooms = 0;
  let start =0;
  let end = 0;
  
  while(start < intervals.length) {
    // Meeting ended before starting new meeting. Hence released the room and move end pointer.
    if(endTimes[end] <= startTimes[start]) { 
      usedRooms--;
      end ++;
    }
    start++;
    usedRooms++;
  }
  return usedRooms;
};


minMeetingRooms([[0,30],[5,10],[15,20]]);
// [ 0, 5, 15 ]
// [ 10, 20, 30 ]
// 2

