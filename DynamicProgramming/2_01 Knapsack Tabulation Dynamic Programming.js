
// 01 Knapsack Tabulation Dynamic Programming
// https://www.youtube.com/watch?v=WNkqbqyvR_0&list=PLEJXowNB4kPxBwaXtRO1qFLpCzF75DYrS&index=6
function Knapsack(wt, profit, w) {
  // row = n
  // col = w
  let memoTable = Array(wt.length+1);
  for(let i=0; i <= wt.length; i++) {
    memoTable[0] = Array(w+1).fill(0);
  }
  
  // i represent the number of items
  // j represnet the capacity of the bag
  for(let i=1; i <= wt.length; i++) {
    for(let j=1; j <= w; j++){
      // we need to use i-1 because wt is start with 0 index and memoTable starts with index 1.
      if(j < wt[i-1]) {
        memoTable[i][j] = memoTable[i-1][j]; // skip the item hence w is samer and n -1
      } else {
        memoTable[i][j] = Math.max(
          memoTable[i-1][j], // skip the item hence w is samer and n -1
          profit[i-1] + memoTable[i-1][j - wt[i-1]] // profit of the current item + profit of the last items with capacity of the bag after including the current item
        );
      }
    }
  }

  return memoTable[wt.length][w];
}


