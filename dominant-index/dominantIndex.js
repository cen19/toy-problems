var dominantIndex = function(nums) {
  if (nums.length === 1) {
    return 0;
  }

  let biggestIndex = 0;
  let secondBiggestIndex = 0;

  if (nums[0] > nums[1]) {
    biggestIndex = 0;
    secondBiggestIndex = 1;
  } else {
    biggestIndex = 1;
    secondBiggestIndex = 0;
  }
  
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > nums[biggestIndex]) {
      let temp = biggestIndex;
      biggestIndex = i;
      secondBiggestIndex = temp;
    } else if (nums[i] > nums[secondBiggestIndex]) {
      secondBiggestIndex = i;
    }
  }
  console.log(biggestIndex, secondBiggestIndex);
  return nums[biggestIndex] >= (nums[secondBiggestIndex] * 2) ? biggestIndex : -1;
};

let test1 = [3, 6, 1, 0];
let test2 = [0, 0, 2, 3];
let test3 = [0, 3, 1, 2];
console.log(dominantIndex(test1));
console.log(dominantIndex(test2));
console.log(dominantIndex(test3));
