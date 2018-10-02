// find subarray sum zero

const zeroSum = function(array) {
  // add the current sums to a list of results

  let sum = 0;
  let store = {};

  for (let i = 0; i < array.length; i++) {
    // add current element to sum total
    sum += array[i];

    // check if store has it
    if (store[sum]) {
      return 'seen';
    }
    // if it doesn't have it, store it
    store[sum] = true;
  } 

  return `doesn't exist`;

  
};