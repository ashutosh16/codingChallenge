/**
 * Largest Sum Contiguous Subarray
 * Write an efficient program to find the sum of contiguous subarray within a one - dimensional array of numbers which has the largest sum.
 * Time complexity O(n)
 */

//  Create 2 variabe maxSum and currentSum 
// add element in currentSum as long as currentSum is +ve
// if currentSum > maxSum then maxSum = currentSum
// if currentSum is -ve or 0 then make currentSum = 0

function LargesSumContiguousSubarray(a) {
  let maxSum = null, currentSum = 0;
  
  for(let i = 0; i < a.length; i++){
    currentSum += a[i];
    
    if(maxSum === null || currentSum > maxSum) {
      maxSum = currentSum;
    }
    
    if(currentSum < 0 ){
      currentSum = 0
    }
  }
  return maxSum;
}

var LargestSum = LargesSumContiguousSubarray([-2, -3, 4, -1, -2, 1, 5, -3]);
alert(" Largest sum "+ LargestSum); 
