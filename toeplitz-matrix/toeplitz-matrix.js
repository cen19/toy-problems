var isToeplitzMatrix = function(matrix) {

  let startRowIndex = 1;
  let startColumnIndex = 1;

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }f
  }
  return true;
};

let testArray1 = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]];
let testArray2 = [[1, 2], [2, 2]];

console.log(isToeplitzMatrix(testArray1));