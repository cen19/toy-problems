const { findMaxConsecutiveOnes } = require('./findMaxConsecutiveOnes');

const array1 = [0, 1, 1, 1, 0, 0, 1];

test('should return 3', () => {
  expect(findMaxConsecutiveOnes(array1)).toBe(3);
});