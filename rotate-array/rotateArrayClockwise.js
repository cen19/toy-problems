const testMatrix4x4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const testMatrix5x5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

var rotateMatrixCW = function(matrix) {
  let start = 0;
  let end = matrix.length - 1;
  let layerIterations = matrix.length / 2;
  let ringIterations = matrix.length - 1;

  for (var i = 0; i < layerIterations; i++) {
    // loop to handle an iteration to allow diving into inner rings
    let layerOffset = i;

    for (var j = 0; j < ringIterations; j++) {
      let clockwiseOffset = j;
      let temp = matrix[start + layerOffset][end - clockwiseOffset - layerOffset];
      matrix[start + layerOffset][end - clockwiseOffset - layerOffset] = matrix[start + clockwiseOffset + layerOffset][start + layerOffset];
      matrix[start + clockwiseOffset + layerOffset][start + layerOffset] = matrix[end - layerOffset][start + clockwiseOffset + layerOffset];
      matrix[end - layerOffset][start + clockwiseOffset + layerOffset] = matrix[end - clockwiseOffset - layerOffset][end - layerOffset];
      matrix[end - clockwiseOffset - layerOffset][end - layerOffset] = temp;
    }

    ringIterations = ringIterations - 2;

  }
};

console.log(testMatrix5x5);
rotateMatrixCW(testMatrix5x5);
console.log(testMatrix5x5);