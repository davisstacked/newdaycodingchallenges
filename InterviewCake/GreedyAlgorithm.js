// This one's a good example of the GREEDY ↴ approach in action. Greedy approaches are great because they're fast (usually just one pass through the input). But they don't work for every problem.

// How do you know if a problem will lend itself to a greedy approach? Best bet is to try it out and see if it works. Trying out a greedy approach should be one of the first ways you try to break down a new question.

// To try it on a new problem, start by asking yourself:

// "Suppose we could come up with the answer in one pass through the input, by simply updating the 'best answer so far' as we went. What additional values would we need to keep updated as we looked at each item in our input, in order to be able to update the 'best answer so far' in constant time?"

// // Question
// // Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

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

// A greedy algorithm builds up a solution by choosing the option that looks the best at every step.

// Better Solution
function getMaxProfitBetter(stockPrices) {

  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // we'll greedily update the minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  // Start at the second (index 1) time
  // We can't sell at the first time, since we must buy first
  // and we can't buy and sell at the same time!
  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];

    // See what our profit would be if we bought at the min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit)

    // Ensure minPrice is the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);


  }

  return maxProfit;
}

// O(n) time and O(1)O(1) space. 