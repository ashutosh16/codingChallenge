// Number of subsets with given difference
// https://www.youtube.com/watch?v=QihB4bI6BJw&list=PLEJXowNB4kPxBwaXtRO1qFLpCzF75DYrS&index=12
// S1 - S2 = Diff
// S1 + S2 = Sum
// S2 =  Sum - S1

// S1 - (Sum - S1) = Diff
// S1 - Sum + S1 = Diff
// 2 S1 = Diff + Sum
// S1 = (Diff + Sum) / 2

// HINT ----> Just find the subset with sum = (Diff + sum) /2

function SubsetsWithGivenDifference(arr, diff) {
  let sum = 0;
  
  for(let i=0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  
  let S1 = (diff+sum)/2;
  let row = arr.length+1;
  let col = S1+1;
  let m = Array(row);
  
  for(let i=0; i < row; i++){
    m[i] = Array(col);
    m[i][0] = 1;
  }
  
  for(let i=1; i < col; i++) {
    m[0][i] = 0;
  }
  
  for(let i=1; i < row; i++){
    for(let j=1; j < col; j++){
      m[i][j] = m[i-1][j] + (arr[i-1] <= j) ? m[i-1][j - arr[i-1]] : 0;
    }
  }
  
  return m[row-1][col-1];
}

SubsetsWithGivenDifference([3,1,2,3], 3);

