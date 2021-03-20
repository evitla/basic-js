const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const firstLetters = members.reduce((stack, elem) => {
    if (typeof elem === "string") {
      stack.push(elem.trim()[0].toUpperCase());
    }
    return stack;
  }, []);

  firstLetters.sort();
  return firstLetters.join("");
};
