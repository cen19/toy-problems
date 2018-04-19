const findMaxConsecutiveOnes = function(nums) {
  let highest = 0;
  let current = 0;

  nums.forEach(num => {
    if (num === 0) {
      if (current > highest) { highest = current; }
      current = 0;
    } else {
      current++;
    }
  });
  return highest > current ? highest : current;
};

module.exports = {
  findMaxConsecutiveOnes
};