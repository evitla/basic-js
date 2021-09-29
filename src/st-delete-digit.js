/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const minNum = Math.min(...n.toString().split(''));

  let isDeleted = false;

  return +n.toString().split('')
    .map(Number)
    .map((num) => {
      if (num === minNum && !isDeleted) {
        isDeleted = true;
        return '';
      }
      return num;
    })
    .join('');
}
