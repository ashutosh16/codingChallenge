/**
 * Largest Sum Contiguous Subarray
 * Write an efficient program to find the sum of contiguous subarray within a one - dimensional array of numbers which has the largest sum.
 * Time complexity O(n)
 */

/**
  * Keep on adding to the sum untill sum is greater than 0, 
  * if sum is greater than 0 then 
*/
const LargestSumOfContinousSubArrays = (arr) => {
  if (arr.length <= 1) return arr;
  let currentSum = arr[0],
    result = {
      startIndex: 0,
      lastIndex: 0,
      sum: currentSum,
    },
    startIndex = 0,
    lastIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > result.sum) {
      result.sum = currentSum;
      result.lastIndex = i;
      result.startIndex = startIndex;
    }
    // Important to keep this condition below (currentSum > result.sum) to manage the case of full -ve array.
    if (currentSum <= 0) { 
      startIndex = i + 1;
      currentSum = 0;
    }
  }
  return result;
};

LargestSumOfContinousSubArrays([-2, -3, 4, -1, -2, 1, 5, -3]);
// result --> {startIndex: 2, lastIndex: 6, sum: 7}

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


