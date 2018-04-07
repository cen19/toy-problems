var findShortestSubArray = function(nums) {
  var store = {};
  for (var i = 0; i < nums.length; i++) {
      if (store[nums[i]]) {
          store[nums[i]] = store[nums[i]] + 1;
      } else {
          store[nums[i]] = 1;
      }
  }
  var arrayStore = [];
  for (var key in store) {
    arrayStore.push([key, store[key]])
  }

  arrayStore.sort((a, b) => { return a[1] - b[1]; });

  var degrees = {};
  var maxDegrees = arrayStore[arrayStore.length - 1][1];
  for (var j = arrayStore.length - 1; j > 0; j--) {
    if (arrayStore[j][1] === maxDegrees) {
      degrees[arrayStore[j][0]] = arrayStore[j][1];
    }
  };
  console.log(degrees);
};

var testArray = [1,2,2,3,1,4,2];


console.log(findShortestSubArray(testArray));
