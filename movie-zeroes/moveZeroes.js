var moveZeroes = function(nums) {
  let numbers = nums.filter(el => el !== 0);
  for (var i = 0; i < numbers.length; i++) {
    nums[i] = numbers[i];
  }
  for (var j = numbers.length; j < nums.length; j++) {
    console.log(nums);
    console.log(j);
    nums[j] = 0;
  }
};

let test = [0, 1, 0, 3, 12];
moveZeroes(test);
console.log(test);