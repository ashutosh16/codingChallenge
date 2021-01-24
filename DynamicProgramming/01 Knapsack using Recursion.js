
//https://www.youtube.com/watch?v=mGfK-j9gAQA&list=PLEJXowNB4kPxBwaXtRO1qFLpCzF75DYrS&index=4

// Backtracking with recurssion 
// Time Complexity is O(2^n)
function Knapsack(wt /*weightList*/, profit /*profitList*/, w /*reamining bagWeight*/, n /*remainingItems*/) {

  if(n === 0 || w === 0) return 0;
  
  //Remaining bag size is less than the item weight hence skip
  if(w <= wt[n]) {
    return Knapsack(wt, profit, w, n-1);
  }
  
  // took the max profit if we skip the item or we include the item
  return Math.max( Knapsack(wt, profit, w, n-1), profit[n] + Knapsack(wt, profit, w - wl[n], n-1) );

}




//Using memorization with recurssion 
// https://www.youtube.com/watch?v=dT6dvdbpChA&list=PLEJXowNB4kPxBwaXtRO1qFLpCzF75DYrS&index=5
// Create the matrix w * n size and initialize with -1
// Time Complexity is O(w * n)
function Knapsack(wt /*weightList*/, profit /*profitList*/, w /*reamining bagWeight*/, n /*remainingItems*/, memo) {

  if(n === 0 || w === 0) return 0;
  
  if(memo[w][n] !== -1) return memo[w][n];
  
  let result = 0;
  
  //Remaining bag size is less than the item weight hence skip
  if(w <= wt[n]) {
    result = Knapsack(wt, profit, w, n-1);
  }
  
  // took the max profit if we skip the item or we include the item
  result  = Math.max( Knapsack(wt, profit, w, n-1), profit[n] + Knapsack(wt, profit, w - wl[n], n-1) );

  // value at the memo[w][n] will give the final result.
  return memo[w][n] = result;
}



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
