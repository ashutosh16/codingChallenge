// https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/528/week-1/3283/
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?


function FindUniqueNumber(arr){
  let result = 0;
  for(let i=0; i<arr.length; i++){
    result ^= arr[i];
  }
  return result;
}

