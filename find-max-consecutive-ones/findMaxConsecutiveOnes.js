let test = [1, 1, 0, 1, 1, 1];

const findMaxConsecutiveOnes = function(nums) {
  let highest = 0;
  let current = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (current > highest) {
        highest = current;
      }
      current = 0;
    } else {
      console.log('here at', i);
      current++;
      console.log(current);
    }
  }
  return highest > current ? highest : current;
};

console.log(findMaxConsecutiveOnes(test));