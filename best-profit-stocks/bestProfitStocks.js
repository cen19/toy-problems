const getMaxProfit = (stockPrices) => {
  let lowestPrice = stockPrices[0];
  let maxProfit = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    let highest = findHighest(stockPrices, i);
    let profit = highest - stockPrices[i];

    if (maxProfit < profit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

const findHighest = (stockPrices, startIndex) => {
  let highest = stockPrices[startIndex];
  for (let i = startIndex + 1; i < stockPrices.length; i++) {
    if (stockPrices[i] > highest) {
      highest = stockPrices[i];
    }
  }
  return highest;
};

module.exports = {
  getMaxProfit
};