const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const addition = ("addition" in options) ? options.addition : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  const additionStr = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);

  return new Array(repeatTimes).fill(String(str) + additionStr).join(separator);
};
  