const isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0) && x !== 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  let palindromePart = 0;
  let multiplier = Math.floor(x.toString().length / 2 - 1);

  while (x > palindromePart) {
    if (Math.floor(x / 10) < palindromePart) {
      if (Math.floor(x / 10) < 1) {
        break;
      } else {
        x = Math.floor(x / 10);
      }
    } else {
      x = Math.floor(x / 10);
      multiplier--;
    }
  }
  return Math.floor(palindromePart) === x;
};

module.exports = isPalindrome;
