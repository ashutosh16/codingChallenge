// subset sum problem dynamic programming


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
                      (arr[i-1] <= j && matrix[i-1][sum - arr[j]]) || // include element i, arr[i-1] represents element i value, j represent the sum we are looking for.
                      false); // exclude not true & include not possible or not true hebce set false
    }
  }
  return matrix[row-1][col-1];
}
