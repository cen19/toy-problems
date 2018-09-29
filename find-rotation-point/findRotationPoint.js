// binary search

const findRotationPoint = function(array) {
  // find midpoint
  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleIndex = Math.floor(endIndex / 2);

  while (endIndex > startIndex) {
    let temp = middleIndex;
    if (array[startIndex] < array[middleIndex]) {
      startIndex = temp + 1;
    } else {
      endIndex = temp - 1;
    }
    middleIndex = Math.floor((endIndex + startIndex) / 2);
  }

  return startIndex;

};

const array1 = ['c', 'd', 'a', 'b'];

console.log(findRotationPoint(array1));