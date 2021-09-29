/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  // returns 2-by-9 matrix with positions where to add 1
  const whereToAdd = (x, y) => [...Array(9)]
    .map((e, i) => [x + Math.floor(i / 3) - 1, y + (i % 3) - 1]);

  // matrix of undefined
  const result = [...Array(matrix.length)].map(() => Array(matrix[0].length));

  // we iterate through matrix elements, if current element has mine,
  // we define positions where to add 1
  matrix.forEach((row, i) => {
    row.forEach((hasMine, j) => {
      result[i][j] = result[i][j] || 0; // convert undefined to integer
      if (hasMine) {
        result[i][j] = 1; // put 1 to cell with mine
        whereToAdd(i, j).forEach((pos) => {
          const [x, y] = pos;
          if (x >= 0 && y >= 0 && !matrix[x][y]) { // if matrix[x][y] has mine, then skip
            result[x][y] = (result[x][y] || 0) + 1;
          }
        });
      }
    });
  });

  return result;
}
