const reverseWords = require('./reverseWords');

let message = [ 'c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l' ];

let expectedMessage = ['s', 't', 'e', 'a', 'l', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  'c', 'a', 'k', 'e'];

test('reverses `cake pound steal` to change to `steal pound cake`', () => {
  expect(reverseWords(message)).toEqual(expectedMessage);
});

