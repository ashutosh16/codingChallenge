/**
  * Given the Array with result number.
  * Need to find the continous sub array whose total is equal to given result number.
  * Time complexity is O(n)
  */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let map = {}; 
  let sum = 0;
  let count = 0;
  for(let i=0; i<nums.length; i++){
    sum += nums[i];  
    if(sum === k) count++;
    if(map[sum-k]){
      count+= map[sum-k].length;
    }
    map[sum] ? map[sum].push(i+1) : (map[sum]=[i+1]); // Make map of array because there can me multiplet sub array with same sume in that case we need to get both the valuse.
  }
  return count;
};


subarraySum([0,0,0,0], 0);
//10
