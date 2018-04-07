//  1  2  3  4  5
//  6  7  8  9 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

//  5 10 15 20 25
//  4  9 14 19 24
//  3  8 13 18 23
//  2  7 12 17 22
//  1  6 11 16 21

var rotateMatrix = function(matrix) {
  let max = matrix.length - 1;
  let offset = 0;
  while (offset * 2 < max) {
    for (let n = 0; n < max - 2 * offset; n++) {
      let temp = matrix[offset][n + offset];

      matrix[offset][offset + n] = matrix[offset + n][max - offset];
      matrix[offset + n][max - offset] = matrix[max - offset][max - offset - n];
      matrix[max - offset][max - offset - n] = matrix[max - offset - n][offset];
      matrix[max - offset - n][offset] = temp;

    }
    offset++;
  }
  return matrix;
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const another = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

rotateMatrix(another);