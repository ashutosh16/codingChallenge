/**
* Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
* Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
* 
* Given nums = [0,0,1,1,1,2,2,3,3,4],
* Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
* It doesn't matter what values are set beyond the returned length.
*/


function Dup(a){
  let j=1;
  let i=0;
  for(; i<a.length; i++){
    if(j===a.length) break;
    while(j<a.length && a[j]===a[i]){
      a[j]=null;
      j++
    }
    [a[j], a[i+1]] = [a[i+1], a[j]];
    j++;
  }
  return i+1;
}

console.log(Dup([1,1,1,2,3]));
console.log(Dup([0,0,1,1,1,2,2,3,3,4]));


---------------------------------------------------------------------------------------------------------------------------------------------------------------------


var removeDuplicates = function(nums) {
    let count = nums.length, prev= nums[0];
    for(let i=1; i < nums.length; i++) {
        if(nums[i] === prev) {
            nums[i] = null;
            count--;
        } else {
            prev = nums[i];
        }
    }
    //nums = [0,null,1,null,null,2,null,3,null,4]
    
    let nullIndex = 1, //Store the null index
        numberIndex= 1; // store the number index
    while( nullIndex < count ) {
        while(nullIndex < nums.length && nums[nullIndex] !== null){ //find null index;
            nullIndex++;      
        }
        numberIndex = nullIndex + 1; //find number index after null index
        while(numberIndex < nums.length && nums[numberIndex] === null) { // find number index
            numberIndex++;
        }
        nums[nullIndex] = nums[numberIndex]; // replace null index with number index
        nums[numberIndex] = null;
        nullIndex++;
    }
    
    return count;  // unique number count
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

