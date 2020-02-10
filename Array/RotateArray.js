/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Right Rotation
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var n = nums.length,
        startIndex = 0,
        currentIndex = startIndex;
     
    for(var count =0; count < nums.length; startIndex++) {
        currentIndex = startIndex;
        pre = nums[currentIndex];
        do {
            var next = (currentIndex+k) % n;
            [pre, nums[next]] = [nums[next], pre];
            currentIndex = next;
            count++
        } while(currentIndex !== startIndex)
    }
    console.log(nums);
};

rotate([1,2,3,4,5,6,7], 3);
rotate([1,2,3,4,5,6], 2);
rotate([-1,-100,3,99], 2);
