/**
 * Given an array of integers, find if the array contains any duplicates.
 *
 * Your function should return true if any value appears at least twice in the array, 
 * and it should return false if every element is distinct.
 *
 * Example 1:
 *
 * Input: [1,2,3,1]
 * Output: true
 */
 
 // WE CAN ALSO USE THE heap sort to sort array without taking any extra space. space complexity will be O(1) TIME COMPLEXITY O(N LOG(N))
// WE CAN ALSO CREATE THE HASH MAP TO STORE THE VALUE AND LOOK FOR THE DUPLICATE. SPACE COMPLEXITY O(N) TIME COMPLEXITY O(N)
// BELOW WE USED MERGE SORT HENCE TIME COMPLEXITY IS O(N LOG (N)) SPACE COMPLEXIT IS O(N)
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var merge = function (a, start, mid, end) {
    var i = start,
        j = mid+1,
        result=[];
    while(i <= mid && j <= end){
        if(a[i] <= a[j]) {

            result.push(a[i]);
            i++;
        } else {
            result.push(a[j]);
            j++;
        }
    }
    for(; i <= mid; i++){
        result.push(a[i]);
    }
  
    for(; j <= end; j++){
        result.push(a[j]);
    }
  
    j =0;
    for(i = start; i <= end; i++) {
      a[i] = result[j]; j++;
    }
  
}

var MergeSort = function(nums, start = 0, end = nums.length-1) {
  if(start < end){
        var mid = Math.floor((start+end) / 2);

        MergeSort(nums, start, mid);
        MergeSort(nums, mid+1, end);
        merge(nums, start, mid, end)
    }
  
  return nums;
}

var containsDuplicate = function(nums) {
    MergeSort(nums, 0, nums.length-1);
  console.log(nums);
  for(var i=0; i < nums.length -1; i++){
    if(nums[i] === nums[i+1]){
      return true;
    }
  }
  return false;
}
