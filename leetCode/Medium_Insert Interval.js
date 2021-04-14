// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
// You may assume that the intervals were initially sorted according to their start times.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Example 3:
// Input: intervals = [], newInterval = [5,7]
// Output: [[5,7]]

// Example 4:
// Input: intervals = [[1,5]], newInterval = [2,3]
// Output: [[1,5]]

// Example 5:
// Input: intervals = [[1,5]], newInterval = [2,7]
// Output: [[1,7]]
// https://www.youtube.com/watch?v=NWM4e4yda0w

// HINT: 
// 1. make new result array
// 2. linear serch if interval is before new interval insert interval
// 3. if its overlapping then update newInterval with newInterval[0] min of start and newInterval[1] max of end
// 4. if interval is after newInterval insert newInterval and make newInterval as interval

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const result = [];
  for(const interval of intervals) {
    if(interval[1] < newInterval[0]) {
      result.push(interval);
    } else if(interval[0] > newInterval[1]){
      result.push(newInterval);
      newInterval = interval;
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }
  result.push(newInterval);
  return result;
};

insert([[1,3],[6,9]], [2,5]);
// [[1,5],[6,9]]




