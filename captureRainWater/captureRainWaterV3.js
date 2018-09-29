// dynamic programming approach

const trap = function(array) {
  // find the maximum height from the left end up to an index i in the array left_max

  // find the maximum height from the right end upto an index in the array right_max

  // iterate over height array and update answer
    // add min(maxleft[i], maxright[i] - height[i] to ans)

  if (array.length === 0 || Array.isArray(array) === false) {
    throw 'Input needs to be an array!';
  }

  // iterate left to right to find the max height
  for (let i = 0; i < array.length; i++) {
    
  }
};