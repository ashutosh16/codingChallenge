
// This is recurssion with backtracking
// below code is need help to make it work

function CountSubsetWithGivenSum (arr, sum, n = 0){
  
  if(sum === 0 || n >= arr.lenght) return 0;

  let count = 0;
  count += CountSubsetWithGivenSum(arr, sum, n+1); // Try with excluding the current element
  count += (sum > arr[n]) ? CountSubsetWithGivenSum(arr, sum - arr[n], n+1) : 0; // Try with including the current element

  return count;
}

CountSubsetWithGivenSum([1,2,1], 3);

CountSubsetWithGivenSum([1,2,3,4,5, 10], 5);



// Dynamic programming with tabular method
// Working solution 
// TimeComplexity : O(arr.length * sum)

function CountSubsetWithGivenSum (arr, sum){debugger;
  
  let m = Array(arr.length+1);
  for(let i=0; i <= arr.length; i++) {
    m[i] = Array(sum+1);
    m[i][0] = 1; // always 1 empty set can make sum zero with any elements present.
  }
  
  for(let i=1; i <= sum+1; i++) {
    m[0][i] = 0; // with 0 number of element no positive sub subset possible
  }
  
  for(let i=1; i <= arr.length; i++) {
    for(let j=1; j <= sum; j++){
      m[i][j] = m[i-1][j] + (arr[i-1] <= j ? (m[i-1][j-arr[i-1]]) : 0)
    }
  }
  
  return m[arr.length][sum];
}

CountSubsetWithGivenSum([1,2,1], 3);
// 2

CountSubsetWithGivenSum([1,2,3,4,5, 10], 5);
// 3
