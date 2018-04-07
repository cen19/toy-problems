var trap = function(array) {
  // let goodPeaks = findPeaksToCalculate(array, findPeaksInfo(array));
  // console.log(goodPeaks);

  let water = 0;

  // for (var i = 1; i < goodPeaks.length; i++) {
  //   water += 
  // }
};

const findPeaksInfo = function(array) {
  const peaks = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i - 1] <= array[i] && array[i] > array[i + 1]) {
      peaks.push(i);
    }
  }
  return peaks;
};

const findPeaksToCalculate = function(array, peaksArray) {
  let leftPeakValue = array[peaksArray[0]];
  let currentLeftPeak = peaksArray[0];
  let goodPeaks = [];
  let currentHighPeak = 0;

  for (var i = 1; i < peaksArray.length - 1; i++) {
    console.log(i);    
    if (array[peaksArray[i]] >= leftPeakValue) {
      console.log(i);
      goodPeaks.push([currentLeftPeak, peaksArray[i]]);
      leftPeakValue = peaksArray[i];
      currentLeftPeak = peaksArray[i];
    }
  }
  goodPeaks.push([leftPeakValue, peaksArray[peaksArray.length - 1]]);
  return goodPeaks;
};

// const calculateWater = function(array, peaksArray) {
//   for (var i = 0; i < peaksArray; i++) {

//   }
// }

let testArray = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let stepTwo = findPeaksInfo(testArray);
console.log(stepTwo); // should return 4 peaks
let goodPeaksTestArray = findPeaksToCalculate(testArray, stepTwo);
console.log(goodPeaksTestArray);

// console.log(trap(testArray));