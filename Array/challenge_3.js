/** 
 * Given array representing one day share value of compony. 
 * Array index represent the time within that day.
 * Find the maximum profit will beachived if we buy and sell shares at what time.
 *
 * Shares = [10, 100, 500, 8, 20]
 *
 * output { buyIndex: 0, sellIndex: 2 }
*/

// @function maxProfit
// @param {Array} price of stocks
// @returns {Object} object with attributes as buyIndex & sellIndex
function maxProfit(price) {
  let minIndex = 0;
  let maxIndex = 0;
  let currentProfit = price[maxIndex] - price[minIndex];
  let profit = {
    buyIndex: 0,
    sellIndex: 0
  };

  for(let i = 1; i < price.length; i++) {
    if (price[i] < price[minIndex]){
      minIndex = i;
    } else
      if ((price[i] - price[minIndex]) > currentProfit) {
        maxIndex = i;
        currentProfit = price[i] - price[minIndex];
        profit.buyIndex = minIndex;
        profit.sellIndex = maxIndex;
    }
  }
  return profit; 
}

maxProfit([10, 100, 500, 1, 499, 20]); // {buyIndex: 3, sellIndex: 4}
maxProfit([10, 100, 500, 8, 20]); //{ buyIndex: 0, sellIndex: 2 }
