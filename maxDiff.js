// find max difference of an array where i < j and array[i] < array[j];
// example [0, 1, 2, 3]

const maxDiff = function(array) {
  let smallest = array[0];
  let biggestDiff = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
    if ((array[i] - smallest) > biggestDiff) {
      biggestDiff = array[i] - smallest;
    }
  }

  return biggestDiff;
};

console.log(maxDiff([4, 1, 2, 3]));