// find sub array for target sum
const findSubArrayTargetSum = function(array, k) {
  let output = [];
  // using hashing


  let sumSoFar = 0;

  // create an empty map for storing end index of all sub arrays with sum of elements so far
  let map = new Map();
  map.set(0, -1);

  for (let i = 0; i < array.length; i++) {
    sumSoFar += array[i];
    console.log(sumSoFar);

  
    if (map.has(sumSoFar - k)) {
      console.log(i);
      output.push([map.get(sumSoFar - k) + 1, i]);
    } else {
      map.set(sumSoFar, i);
    }
    // set results of what we've seen
    console.log(map);
  }
  console.log(map);
  return output;
};

let testArray = [3, 4, -7, 1, 3, 3, 1, -4];

// 0 1
// 0 1 2 3 4 5
// 3 4 5
// 4 5 6
console.log(findSubArrayTargetSum(testArray, 7));