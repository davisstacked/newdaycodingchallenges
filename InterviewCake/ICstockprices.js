// Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

// So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

// Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

//   stock_prices = [10, 7, 5, 8, 11, 9]

// get_max_profit(stock_prices)
// # Returns 6 (buying for $5 and selling for $11)

// Python 2.7
// No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.

const getMaxProfit = () => {
  let maxProfit = 0;

  // Go thru every price and time
  for (let earlierTime = 0; earlierTime < stockPrices.length; earlierTime++) {
    const earlierPrice = stockPrices[earlierTime];

    // And go through all the LATER prices
    for (let laterTime = earlierTime + 1; laterTime < stockPrices.length; laterTime++) {
      const laterPrice = stockprices[laterTime];

      // see what our profit would be if we bought at the min price and sold at the current price
      const potentialProfit = laterPrice - earlierPrice
      
      // update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }
  return maxProfit;
}

//  O(n^2) runtime for the above solution.

// Better Solution
function getMaxProfitBetter(stockPrices) {
  let minPrice = stockPrices[0];
  let maxProfit = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];

    // Ensure minPrice is the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);

    // See what our profit would be if we bought at the min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit)
  }

  return maxProfit;
}