/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  return matrix.reduce((acc, row, i) => {
    if (i === 0) return row.reduce((a, b) => a + b, 0);
    const prevRow = matrix[i - 1];
    const rowSum = row.reduce((a, b, j) => (prevRow[j] !== 0 ? a + b : a), 0);

    return acc + rowSum;
  }, 0);
}
