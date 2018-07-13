const trap = function(array) {
  // find first peak
};

const isPeak = function(array, index) {
  return array[index] > array[index - 1] && array[index] > array[index + 1];
};

let testArray = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

module.exports = {
  isPeak,
  trap
};