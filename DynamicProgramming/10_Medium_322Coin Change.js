// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const row = coins.length+1;
  const col = amount+1;
  const dp = Array(row);
  for(let i =0; i<row; i++){
    dp[i] = Array(col);
    dp[i][0] = 0;
  }
  
  for(let i=1; i<col; i++) {
    dp[0][i] = Number.MAX_VALUE; // Set this to +ve infinity, because we cant make any +ve sum with 0 number of coins.
  }

  for(let i=1; i<row; i++) {
    for(let j=1; j<col; j++) {
      if(coins[i-1] > j) {
        dp[i][j] = dp[i-1][j];
      } else {
        dp[i][j] = Math.min(
          dp[i-1][j],
          1+dp[i][j-coins[i-1]] // When we add coin do +1 and do not skip the coin as we have infine coin for each denominations
        );
      }
    }
  }
    return dp[row-1][col-1] === Number.MAX_VALUE ? -1 : dp[row-1][col-1];
};



coinChange([1,2,5],11);
// 3



