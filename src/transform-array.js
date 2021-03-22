const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr)  {
  if (!Array.isArray(arr))
    throw new Error("ERROR");

  let transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (arr[i - 2] != "--discard-next")
          transformedArr.pop();
        break;
      case "--double-next":
        transformedArr.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (arr[i - 2] != "--discard-next")
          transformedArr.push(arr[i - 1]);
        break;
      default:
        transformedArr.push(arr[i]);
    }
  }

  return transformedArr.filter(e => e !== undefined);
};
