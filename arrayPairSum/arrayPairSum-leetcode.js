var arrayPairSum = function(nums) {
  let sorted = nums.sort(function(a, b) {
    return a - b;
  });
  
  var sum = 0;
  
  for (var i = 0; i < sorted.length; i += 2) {
    sum += sorted[i];
  }
  
  return sum;
};

let test = [2, 3, 1, 4];
console.log(arrayPairSum(test));

const arrayPairSum1 = (nums) => {
  let sorted = nums.sort((a, b) => a - b);
  let sum = 0;

  for (var i = 0; i < sorted.length; i += 2) {
    sum += sorted[i];
  }
  return sum;
};

console.log(arrayPairSum1(test));