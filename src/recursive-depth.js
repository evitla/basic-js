const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let isFlat = true;
    
    const flattenArr = arr.reduce((stack, e) => {
      if (Array.isArray(e)) {
        stack.push(...e);
        isFlat = false;
      } else {
        stack.push(e);
      }
      return stack;
    }, []);

    return isFlat ? 1 : this.calculateDepth(flattenArr) + 1;
  }
};