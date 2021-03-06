// Minimum subset sum difference | Minimum difference subsets
// Time Complexity O(n*sum)

// Input:  arr[] = {1, 6, 11, 5} 
// Output: 1
// Explanation:
// Subset1 = {1, 5, 6}, sum of Subset1 = 12 
// Subset2 = {11}, sum of Subset2 = 11        

function  MinimumDifferenceSubsets(arr){
  let m = Array(arr.length+1);
  let sum = 0;
  
  for(let i=0; i < arr.length; i++) {
    sum += arr[i];
  }

  let row = arr.length+1;
  let col = sum+1;
  
  for(let i=0; i < row; i++) {
    m[i] = Array(col);
    m[i][0] = true;
  }
  
  for(let i=1; i < col; i++) {
    m[0][i] = false;
  }
  
  for(let i=1; i < row; i++){
    for(let j=1; j < col; j++) {
      m[i][j] = m[i-1][j] || (j >= arr[i-1] && m[i-1][j-arr[i-1]]) || false;
    }
  }
  
  let result = null;
  for(let i=0; i <= sum/2; i++) {
    let diff = Math.abs((i*2) - sum);
    if(result === null || result > diff) {
      result = diff;
    }
  }
  
  return result;

}

MinimumDifferenceSubsets([2,4,2,3]);
// 1
