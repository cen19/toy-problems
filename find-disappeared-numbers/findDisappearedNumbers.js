var findDisappearedNumbers = function(nums) {
  let max = 0;
  let store = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      store[nums[i]] = nums[i];
    }
    max = max < nums[i] ? nums[i] : (max < i + 1 ? i + 1 : max);
  }

  let output = [];
  for (let j = 1; j <= max; j++) {

    if (store[j] === undefined) {
      output.push(j);
    }
  }

  return output;
};

// https://leetcode.com/submissions/detail/159077587/

let test1 = [4, 3, 2, 7, 8, 2, 3, 1];
let test2 = [1, 1];

console.log(findDisappearedNumbers(test1));
console.log(findDisappearedNumbers(test2));