/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
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
}
