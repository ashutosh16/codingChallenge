// Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed
// Given an array, only rotation operation is allowed on array.
// We can rotate the array as many times as we want. Return the maximum possbile of summation of i*arr[i]
// Time complexsity O(n)
function maxSum(arr) {
	let arraySum = 0;
	let currentSum = 0;
	let n = arr.length;
  arr.forEach((item, index) => {
    arraySum += item;
    currentSum += index*item;
  });
  let maxSum = currentSum;
  let leftRotation = 0;
  for(let i=1; i < n; i++) {
    currentSum = currentSum - arraySum + (arr[i-1] * n);
    if(currentSum > maxSum) {
      maxSum = currentSum;
      leftRotation = i;
    }
  }
  return {
    maxSum,
    leftRotation
  }
}

// Hint  - Each time we do left rotation contribution of each elements from index 1 to n-1 is decresed by 1 (arraySum - arr[i-1]). and contribution of arr[i-1] is incresed by n-1 times
// next_sum = currentSum - (arraySum - arr[i-1]) + ((n-1) * arr[i-1])
// next_sum = currentSum - arraySum + arr[i-1] + (n-1) * arr[i-1]
// next_sum = currentSum - arraySum + arr[i-1] + n * arr[i-1] - arr[i-1]
// next_sum = currentSum - arraySum + (n * arr[i-1]) 

//  0 1 2 3            <----------->
// [8,3,1,2] -> 8*0 + 3*1 + 1*2 + 2*3 -> 
// [3,1,2,8] -> 3*0 + 1*1 + 2*2 + 8*3 -> 
// [1,2,8,3] -> 1*0 + 2*1 + 8*2 + 3*3 -> 
// [2,8,3,1] -> 2*0 + 8*1 + 3*2 + 1*3 -> 

// reference https://www.youtube.com/watch?v=3YNs_Ggqb-Q
