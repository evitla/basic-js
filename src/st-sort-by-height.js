/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const sortedPositiveNums = arr.filter((num) => num > -1).sort((a, b) => a - b);

  let positiveIdx = 0;
  return arr.map((num) => {
    if (num < 0) return num;
    return sortedPositiveNums[positiveIdx++];
  });
}
