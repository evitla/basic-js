/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const firstLetters = members.reduce((stack, elem) => {
    if (typeof elem === "string") {
      stack.push(elem.trim()[0].toUpperCase());
    }
    return stack;
  }, []);

  firstLetters.sort();
  return firstLetters.join("");
}
