const trap = function(array) {
  // find first peak
  let peak1 = 0;
  let peak2 = null;

  // for (let i = 0; i < array.length; i++) {
  //   if ()
  // }
};

const isPeak = function(array, index) {
  const leftOfIndex = array[index - 1] || 0;
  const rightOfIndex = array[index + 1] || 0;
  return (array[index] > leftOfIndex) && (array[index] > rightOfIndex);
};

let testArray = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(isPeak([1, 0], 0));
module.exports = {
  isPeak,
  trap
};