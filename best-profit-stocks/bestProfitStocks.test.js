const { getMaxProfit } = require('./bestProfitStocks');

const stockPrices1 = [10, 7, 5, 8, 11, 9];
const stockPrices2 = [10, 9, 8, 7, 6, 2];

test('should return 6 for buying at $5 and selling at $11', () => {
  expect(getMaxProfit(stockPrices1)).toBe(6);
});

test('should return 0 for empty array', () => {
  expect(getMaxProfit([])).toBe(0);
});

test('should return 0 for a day with no possible profits', () => {
  expect(getMaxProfit(stockPrices2)).toBe(0);
});