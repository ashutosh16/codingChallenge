/** Maximum profit by buying and selling a share at most twice
* In a daily share trading, a buyer buys shares in the morning and sells it on the same day. 
* If the trader is allowed to make at most 2 transactions in a day, 
* whereas the second transaction can only start after the first one is complete (Buy-> Sell-> Buy-> Sell).
* Given stock prices throughout the day, find out the maximum profit that a share trader could have made.
**/
// Time Complexity O(n)
{
  function maxProfit (price) {
    let profit = Array(price.length).fill(0),
      n = price.length,
      maxPrice = price[n-1];

    for(let i = n-2; i >=0; i--) {
      if(price[i] > maxPrice) {
        maxPrice = price[i];
      }

      profit[i] = Math.max(profit[i+1], maxPrice - price[i]);
    }
    let minPrice = price[0];
    for(let i = 1; i < n; i++) {
      if(price[i] < minPrice) {
        minPrice = price[i];
      }
      profit[i] = Math.max(profit[i-1], profit[i] + (price[i] - minPrice));
    }

    // [75, 87, 87, 87, 87, 87]
    return profit[n-1];
  }

  console.log(maxProfit([10, 22, 5, 75, 65, 80]));
  // 87

  // Input: price[] = { 10, 22, 5, 75, 65, 80}
  // Output: 87
  // Trader earns 87 as sum of 12 and 75
  // Buy at price 10, sell at 22, buy at 5 and sell at 80
}
