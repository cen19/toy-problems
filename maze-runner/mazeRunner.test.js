const mazerRunner = require('./mazeRunner');

const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1]
];

test('expected Finish', () => {
  expect(mazerRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'])).toBe('Finish');
});

test('expected Finish', () => {
  expect(mazerRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E'])).toBe('Finish');
});

test('expected Finish', () => {
  expect(mazerRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W'])).toBe('Finish');
});

test('expected Dead', () => {
  expect(mazerRunner(maze, ['N', 'N', 'N', 'W', 'W'])).toBe('Dead');
});

test('expected Dead', () => {
  expect(mazerRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S'])).toBe('Dead');
});

test('expected Lost', () => {
  expect(mazerRunner(maze, ['N', 'E', 'E', 'E', 'E'])).toBe('Lost');
});