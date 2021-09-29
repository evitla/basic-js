/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const addition = ("addition" in options) ? options.addition : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  const additionStr = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);

  return new Array(repeatTimes).fill(String(str) + additionStr).join(separator);
}
