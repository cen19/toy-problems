const message = [ 'c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l' ];

// assume that array is filled with words seperated with spaces

// Solve in place

let reverseWords = function(arrayOfLetters) {
  // reverse the entire array first (in place)
  for (let i = 0; i < Math.floor(arrayOfLetters.length / 2); i++) {
    let temp = arrayOfLetters[i];
    arrayOfLetters[i] = arrayOfLetters[arrayOfLetters.length - 1 - i];
    arrayOfLetters[arrayOfLetters.length - 1 - i] = temp;
  }

  // iterate and make the reverse the reversed words
  let wordStart = 0;
  for (let j = 0; j <= arrayOfLetters.length; j++) {
    if (arrayOfLetters[j] === ' ' || arrayOfLetters[j] === undefined) {
      for (let k = 0; k < Math.floor((j - wordStart) / 2); k++) {
        let temp = arrayOfLetters[wordStart + k];
        arrayOfLetters[wordStart + k] = arrayOfLetters[j - 1 - k];
        arrayOfLetters[j - 1 - k] = temp;
      }
      wordStart = j + 1;
    }
  }
  return arrayOfLetters;
};



console.log(reverseWords(message));

