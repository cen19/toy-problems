const { isPeak } = require('./captureRainWater_v2.js');

let test1 = [0, 1, 0];

test('expeected to be peak', () => {
  expect(isPeak(test1, 1)).toBe(true);
});