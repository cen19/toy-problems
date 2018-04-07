var twoSum = function(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.lastIndexOf(target - numbers[i]) !== -1) {

      result[0] = i + 1;
      result[1] = numbers.lastIndexOf(target - numbers[i]) + 1;
      return result;
    }
  }
};

// ---------------------
// Binary search attempt

const twoSumBinary = function(numbers, target) {

};



// ---------------------



// console.log(twoSum([2, 3, 4], 6));
// console.log(twoSum([0, 0, 3, 4], 0));
console.log(twoSum([5, 25, 75], 100));

// console.log(array.indexOf(0));