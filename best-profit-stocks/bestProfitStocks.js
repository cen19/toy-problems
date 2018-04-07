var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// returns 6 (buying for $5 and selling for $11)

let getMaxProfit = function(stockPrices) {
  let lowestPrice = stockPricesYesterday[0];
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

let findHighest = function(stockPrices, startIndex) {
  let highest = stockPrices[startIndex];
  for (let i = startIndex + 1; i < stockPrices.length; i++) {
    if (stockPrices[i] > highest) {
      highest = stockPrices[i];
    }
  }
  return highest;
};

console.log(getMaxProfit(stockPricesYesterday));