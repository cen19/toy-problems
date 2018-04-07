const sortArray = function(array) {
  // Return a sorted array.
  if (array.length === 0) {
    return [];
  }
  
  let oddSorted = array.filter(number => number % 2 !== 0).sort((a, b) => a - b);
  let evenPlaces = findEvenPlaces(array);

  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (i === evenPlaces[0]) {
      output.push(array[i]);
      evenPlaces.shift();
    } else {
      output[i] = oddSorted.shift();
    }
  }
  return output;
};

const findEvenPlaces = function(array) {
  let evenPlaces = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenPlaces.push(i);
    }
  }
  return evenPlaces;
};

let test = [5, 3, 2, 8, 1, 4];
console.log(sortArray(test));