const transposeMatrix = require('./transposeMatrix.js');

const input1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const input2 = [[1, 2, 3], [4, 5, 6]];

test('should return [1, 4, 7], [2, 5, 8], [3, 6, 9] when given input1', () => {
  expect(transposeMatrix(input1)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
});

test('should return [[1, 4], [2, 5], [3, 6]]', () => {
  expect(transposeMatrix(input2)).toEqual([[1, 4], [2, 5], [3, 6]]);
});

test('should return empty array when given empty array', () => {
  expect(transposeMatrix([])).toEqual([]);
});