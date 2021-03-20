const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  const flatArr = [].concat(...arr);
  return flatArr.filter(e => e == '^^').length;
};
