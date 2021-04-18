// https://leetcode.com/problems/merge-intervals/
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// Hint: Sort intervals with start time
// make first as current interval
// if nextInterval.start < currentInterval.end then merge 
// currentInterval.start = Math.min(currentInterval.start, nextInterval.start);
// currentInterval.end = Math.max(currentInterval.end, nextInterval.end);
// else push currentInterval in result and currentInterval = nextInterval;
// after for loop push currentInterval to result.

var merge = function(intervals) {
  intervals = intervals.sort((a,b)=>a[0]-b[0]);
  let currentInterval = intervals[0];
  const result = [];
  for(let i=1; i<intervals.length; i++) {
    if(intervals[i][0] <= currentInterval[1]) {
      currentInterval[0] = Math.min(intervals[i][0], currentInterval[0]);
      currentInterval[1] = Math.max(intervals[i][1], currentInterval[1]);
    } else {
      result.push(currentInterval);
      currentInterval = intervals[i];
    }
  }
  result.push(currentInterval);
  return result;
};

merge([[1,4],[4,5]]);
// [1,5]

merge([[1,3],[2,6],[8,10],[15,18]]);
// [[1,6],[8,10],[15,18]]
