const arrayPairSum = (nums) => {
  let sorted = nums.sort((a, b) => a - b);
  let sum = 0;

  for (var i = 0; i < sorted.length; i += 2) {
    sum += sorted[i];
  }
  return sum;
};