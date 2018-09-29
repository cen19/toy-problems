// dynamic programming approach
const waterBlocks = function(array) {
  let totalWater = 0;


  let leftHighest = [];
  let rightHighest = [];

  let leftMax = 0;
  let rightMax = 0;
  // go from left to right and find the highest height to the right of the current index
  for (let i = 0; i < array.length; i++) {
    leftHighest[i] = leftMax;
    leftMax = Math.max(leftMax, array[i]);
  }
  // go from right to left and find the highest height to the left of the current index
  for (let j = array.length - 1; j >= 0; j--) {
    rightHighest[j] = rightMax;
    rightMax = Math.max(rightMax, array[j]);
  }
  // compare and do calculations to add the amount of water that can be trapped to the total

  for (let i = 0; i < array.length; i++) {
    let waterTrapped = Math.min(leftHighest[i], rightHighest[i]) - array[i];

    if (waterTrapped < 0) {
      waterTrapped = 0;
    }

    totalWater += waterTrapped;
  }

  return totalWater;
};

console.log(waterBlocks([0, 0, 0, 4]));
console.log(waterBlocks([5, 2, 3, 2, 1, 3])); // should return 4
console.log(waterBlocks([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // returns 6
console.log(waterBlocks([5, 2, 1, 2, 1, 5])); // returns 14
console.log(waterBlocks([4, 9, 4, 5, 3, 2])); // returns 1
console.log(waterBlocks([5, 4, 1, 2])); // returns 1
console.log(waterBlocks([9, 6, 8, 8, 5, 6, 3])); // returns 3
console.log(waterBlocks([9, 2, 9, 3, 2, 2, 1, 4, 8])); // returns 35
