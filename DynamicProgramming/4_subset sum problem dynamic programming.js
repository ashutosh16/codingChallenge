// subset sum problem dynamic programming
// https://www.youtube.com/watch?v=34l1kTIQCIA&list=PLEJXowNB4kPxBwaXtRO1qFLpCzF75DYrS&index=8
function isSubsetPresent(arr, sum) {
  let row = arr.length+1; // Matrix start with 1 hence added extra +1 
  let col = sum+1;
  
  let matrix = Array(row);
  
  for(let i=0; i < row; i++) {
    matrix[i] = Array(col);
    matrix[i][0] = true;
  }
  
  for(let i=1; i < col; i++) {
    matrix[0][i] = false;
  }
  
  
  for(let i =1; i < row; i++){
    for(let j=1; j < col; j++){
      matrix[i][j] = (matrix[i-1][j] === true || //exclude the element i
                      (arr[i-1] <= j && matrix[i-1][j - arr[i-1]]) || // include element i, arr[i-1] represents element i value, j represent the sum we are looking for.
                      false); // exclude not true & include not possible or not true hebce set false
    }
  }
  return matrix[row-1][col-1];
}

isSubsetPresent([1,2,3,5], 8);
// true

isSubsetPresent([1,2,3,5], 9);
// true

isSubsetPresent([1,2,3,5], 19);
// false
