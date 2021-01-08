// Given a sorted array A of unique numbers, find the K-th missing number starting from the leftmost number of the array.

// Example 1:
// Input: A = [4,7,9,10], K = 1
// Output: 5
// Explanation: 
// The first missing number is 5.

// Example 2:
// Input: A = [4,7,9,10], K = 3
// Output: 8
// Explanation: 
// The missing numbers are [5,6,8,...], hence the third missing number is 8.

// Example 3:
// Input: A = [1,2,4], K = 3
// Output: 6
// Explanation: 
// The missing numbers are [3,5,6,7,...], hence the third missing number is 6.
 

// we can do this using the binary serch. which is O(log(n))
// this is O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  let next = null;
  let missCount = 0;
  for(let i=0; i<nums.length-1;i++){
    if(nums[i]+1 !== nums[i+1]){
      for(let next = nums[i]+1; next < nums[i+1]; next++) {
          missCount++;
          if(missCount === k) return next;
      }
      if(missCount === k) return next;
    }
  }
  
  if(missCount < k) {
    let next = nums[nums.length-1];
    while(missCount !== k){
          next+=1;
          missCount++;
    }
    return next;  
  }  
};



missingElement([4,7,9,10], 1);
// 5


missingElement([1,2,4], 3);
// 6
