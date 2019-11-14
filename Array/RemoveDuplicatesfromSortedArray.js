/**
* Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
* Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
* 
* Given nums = [0,0,1,1,1,2,2,3,3,4],
* Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
* It doesn't matter what values are set beyond the returned length.
*/

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
    let nullIndex = 1, numberIndex= 1;
    while( nullIndex < count ) {
        while(nullIndex < nums.length && nums[nullIndex] !== null){
            nullIndex++;      
        }
        numberIndex = nullIndex + 1;
        while(numberIndex < nums.length && nums[numberIndex] === null) {
            numberIndex++;
        }
        nums[nullIndex] = nums[numberIndex];
        nums[numberIndex] = null;
        nullIndex++;
    }
    
    return count;  
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
