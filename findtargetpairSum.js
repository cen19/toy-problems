// find target sum from array

const findTargetSumPair = function(array, target) {

  let store = {};

  for (let i = 0; i < array.length; i++) {
    // check what pairing result we need
    let need = target - array[i];

    if (store.hasOwnProperty(need)) {
      return true;
    } else {
      // store the needed number
      store[array[i]] = true; // could also set value to an idx if we needed to return the idx of both integers
    }
    // if nothing found
    return null;
  }
};


// example input 

// [3, 3, 2, 1]. 5

// CLARIFICATIONS AND QUESTIONS
// can be negative?
// no floating point?
// Empty array?
// no target sum found?


// looop through and keep track of what needs to be found in an object
// as we approach each new number, we need to check our store to see if the answer we're looking for exists