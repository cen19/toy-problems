const getMaxProfit = (stockPrices) => {
  let lowestPrice = stockPrices[0];
  let maxProfit = 0;

  stockPrices.forEach(function(price, i) {
    let highest = findHighestFromCurrPlace(stockPrices, i);
    let profit = highest - price;
    maxProfit = maxProfit < profit ? maxProfit = profit : maxProfit;
  });
  return maxProfit;
};

// find the highest amount from the current place
const findHighestFromCurrPlace = (array, startIndex) => {
  let highest = array[startIndex];
  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[i] > highest) {
      highest = array[i];
    }
  }
  return highest;
};

module.exports = {
  getMaxProfit
};