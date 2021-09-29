/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const result = names.reduce((acc, name) => {
    if (acc[name]) {
      acc[`${name}(${acc[name]})`] = 1;
      acc[name]++;
      return acc;
    }
    acc[name] = 1;
    return acc;
  }, new Map());

  return Object.keys(result);
}
