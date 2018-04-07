const majorityElement = function(nums) {
  // majority element always exists
  // majority element is appears more than (n / 2)
  let storage = {};

  // figure out minimum number of times something must occur to be considered majority
  let majorityNumber = Math.floor(nums.length / 2) + 1;

  for (let i = 0; i <= nums.length; i++) {
    let current = nums[i];
    if (!storage[current]) {
      storage[current] = 1;
    } else {
      storage[current] = storage[current] + 1;
    }
    if (storage[current] === majorityNumber) {
      return current;
    }
  }
  return -1;
};

const testArray1 = [1, 2, 2, 1, 2];
console.log(majorityElement(testArray1));

// // solution simpler
// var majorityElement = function(nums) {
//   let cur = nums[0]
//   let count = 1
//   for(let i = 1; i < nums.length; i++) {
//       if(cur == nums[i]) {
//           count++
//       } else if (count == 0) {
//           cur = nums[i]
//           count++
//       } else {
//           count--
//       }
//   }
//   return cur
// };

// for the above algorithm