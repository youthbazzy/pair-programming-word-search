const transpose = function(matrix) {
  let newMatrix = [];
  let numRows = matrix.length;
  let numColumns = matrix[0].length;

  for (let i = 0; i < numColumns; i++) {
    newMatrix.push([]);
  }

  // for each row
  for (let i = 0; i < numRows; i++) {
    // for each column
    for (let j = 0; j < numColumns; j++) {
      newMatrix[j].push(matrix[i][j]);
    }
  }

  return newMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

module.exports = transpose;