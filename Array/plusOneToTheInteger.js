/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 * Example 2:
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.

 */


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var add = 1;
   for(var i= digits.length -1 ; i >= 0; i-- ){
     var result = add + digits[i];
     result = result.toString().split('');
     if(result.length > 1){
       digits[i] = Number(result[1]);
      add = Number(result[0]);
     } else {
       digits[i] = Number(result[0]);
       add = 0;
       break;
     }
   } 
  if(add) {
    digits.unshift(add);
  }
  return digits;
};
