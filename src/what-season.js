const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  switch (date.getUTCMonth()) {
    case 0: return "winter";
    case 1: return "winter";
    case 2: return "spring";
    case 3: return "spring";
    case 4: return "spring";
    case 5: return "summer";
    case 6: return "summer";
    case 7: return "summer";
    case 8: return "fall";
    case 9: return "fall";
    case 10: return "fall";
    case 11: return "winter";
  }
};
