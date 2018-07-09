/* Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix. */

const transposeMatrix = function(matrix) {
  const output = [];
  if (matrix.length === 0) {
    return output;
  }
  
  const loopLength = matrix[0].length * matrix.length || 0;

  let temp = [];

  for (let i = 0; i <= loopLength; i++) {
    if (temp.length === matrix.length) {
      output.push(temp);
      temp = [];
    }
    temp.push(matrix[i % matrix.length].shift());
  }

  return output;

};

module.exports = transposeMatrix;