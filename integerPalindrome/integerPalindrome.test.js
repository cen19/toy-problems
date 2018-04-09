const isPalindrome = require('./integerPalindrome');

let test1 = 10;
let test2 = 1222222221;
let test3 = 1000030001;
let test4 = 2221222;
let test5 = -11;

test(`reverse of ${test1} should be 01`, () => {
  expect(isPalindrome(test1)).toBe(false);
});

test(`should return true for ${test2}`, () => {
  expect(isPalindrome(test2)).toBe(true);
});

test(`should return true for ${test3}`, () => {
  expect(isPalindrome(test3)).toBe(true);
});

test(`should return true for ${test4}`, () => {
  expect(isPalindrome(test4)).toBe(true);
});

test(`should return false because it is negative`, () => {
  expect(isPalindrome(test5)).toBe(false);
});

test(`should be true because it is a single digit`, () => {
  expect(isPalindrome(5)).toBe(true);
});

test(`0 should be a palindrome`, () => {
  expect(isPalindrome(0)).toBe(true);
});