const waterBlocks = function(blocks) {
  let water = 0;
  let leftPeakIndex = findLeftEdgeIndex(blocks);
  console.log(leftPeakIndex);
  let endSegmentIndex = 0;
  let currentHighPeak = 0;
  let currentLowPeak = blocks[leftPeakIndex];
  let lowestPoint = Math.min(...blocks);
  console.log(lowestPoint);
  let currentStructure = [blocks[leftPeakIndex]];
  let alreadyCalculated = false;
  // let rightPeakFound = false;
  for (let i = leftPeakIndex + 1; i < blocks.length; i++) {
    alreadyCalculated = false;
    currentStructure.push(blocks[i]);

    if (blocks[i] > currentHighPeak && blocks[i] > blocks[i - 1]) {
      currentHighPeak = blocks[i];
      console.log(i);
    }
    if (blocks[i] < currentLowPeak) {
      currentLowPeak = blocks[i];
    }
    // if we reach the end without, calculate the remaining segment
    if (i === blocks.length - 1) {
      console.log(blocks[currentHighPeak]);
      water += calculateWaterStored(blocks[leftPeakIndex], currentHighPeak, currentStructure);
    }
    // calculate what we have if we've reached a peak
    if (((blocks[i - 1] <= blocks[i]) && blocks[i] > blocks[i + 1])) {
      console.log(i);
      // let peakToUse = currentHighPeak > blocks[i] ? currentHighPeak : blocks[i];
      console.log(currentLowPeak);
      
      if (blocks[i] >= blocks[leftPeakIndex] && !alreadyCalculated) {
        console.log(i);
        console.log(currentLowPeak);
        console.log(currentStructure);
        water += calculateWaterStored(blocks[leftPeakIndex], currentHighPeak, currentStructure);
        leftPeakIndex = i;
        currentStructure = [blocks[leftPeakIndex]];
        currentHighPeak = 0;
        currentLowPeak = blocks[leftPeakIndex];
        alreadyCalculated = true;
      }

    }

  }
  return water;
};

const findLeftEdgeIndex = function(blocks) {
  let startIndex = 0;
  for (var i = 1; i < blocks.length; i++) {
    if (blocks[i] < blocks[startIndex]) {
      console.log(startIndex);
      return startIndex;
    }
    startIndex = i;
  }
  return blocks.length - 1;
};

const calculateWaterStored = function(leftIndexValue, rightIndexValue, structure) {
  console.log(structure);  
  console.log(rightIndexValue);
  let minHeight = leftIndexValue > rightIndexValue ? rightIndexValue : leftIndexValue;
  console.log(minHeight);
  console.log(rightIndexValue);
  let structureBlockage = shortenExcessStructure(structure, minHeight, structure.lastIndexOf(rightIndexValue)).reduce((a, b) => a + b);
  // find right peak

  let width = structure.lastIndexOf(rightIndexValue) + 1;
  let totalCapacity = minHeight * width;
  console.log(totalCapacity);


  return totalCapacity - structureBlockage;
};

const shortenExcessStructure = function(structure, minHeight, indexOfRightPeak) {
  console.log(structure);
  console.log(indexOfRightPeak);
  return structure.map(function(segment, index) {
    if (segment > minHeight) {
      return minHeight;
    } 
    if (index > indexOfRightPeak) {
      console.log(index);
      return 0;
    }
    return segment;
  });
};

// const findSmallerHeight = function(structure, height) {
//   for (var i = 0; i < structure.length; i++) {
//     if (structure[i] < height) {
//       return i;
//     }
//   }
//   return 0;
// };

// console.log(waterBlocks([0, 0, 0, 4]));
// console.log(waterBlocks([5, 2, 3, 2, 1, 3])); // should return 4
// console.log(waterBlocks([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // returns 6
// console.log(waterBlocks([5, 2, 1, 2, 1, 5])); // returns 14
// console.log(waterBlocks([4, 9, 4, 5, 3, 2])); // returns 1
// console.log(waterBlocks([5, 4, 1, 2])); // returns 1
// console.log(waterBlocks([9, 6, 8, 8, 5, 6, 3])); // returns 3
console.log(waterBlocks([9, 2, 9, 3, 2, 2, 1, 4, 8])); // returns 35



// NO WAY TO KNOW LOWEST PEAK UNLESS WE GO THROUGH
