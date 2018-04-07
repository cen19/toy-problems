var isPalindrome = function(x) {

  // negative number cannot be a palindrome because '-' isn't whatever the last number is, ever.
  if (x < 0 || (x % 10 === 0) && x !== 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }

  let palindromePart = 0;
  let multiplier = Math.floor(x.toString().length / 2 - 1);

  console.log('multiplier', multiplier);

  while (x > palindromePart) {
    if (Math.floor(x / 10) < palindromePart) {
      if (Math.floor(x / 10) < 1) {
        break;
      } else {
        x = Math.floor(x / 10);
      }
    } else {
      console.log((x % 10) * (Math.pow(10, multiplier)));
      palindromePart += (x % 10) * (Math.pow(10, multiplier));
      x = Math.floor(x / 10);
      console.log(x);
      multiplier--;
      console.log(palindromePart);
    }
  }
  console.log('x', x);
  console.log('palindromePart', palindromePart);
  return Math.floor(palindromePart) === x;
};
// console.log(3 % 10);
console.log(isPalindrome(10));
console.log(isPalindrome(1222222221));
console.log(isPalindrome(1000030001));
console.log(isPalindrome(2221222));