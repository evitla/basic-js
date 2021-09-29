/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = '';

  let prevChar = '';
  let counter = 0;
  str.split('').forEach((char, idx) => {
    if (char !== prevChar) {
      result += (counter > 1 ? counter : '') + prevChar;
      counter = 0;
    }
    counter++;
    if (idx === str.length - 1) result += (counter > 1 ? counter : '') + char;
    prevChar = char;
  });

  return result;
}
