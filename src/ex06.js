/**
 * Count the vowels in a string.
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  const vowels = "aeiou";

  if (str === undefined) throw new Error("String cannot be undefined");

  if (typeof str !== "string") throw new Error("Argument must be a string");

  return str
    .toLowerCase()
    .split("")
    .filter((character) => vowels.includes(character)).length;
}

module.exports = countVowels;
