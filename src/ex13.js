/**
 * Determine whether two strings are anagrams of each other.
 * @param {string} firstString
 * @param {string} secondString
 * @returns {boolean}
 */
function checkAnagram(firstString, secondString) {
  if (firstString === undefined)
    throw new Error("First string cannot be undefined");

  if (secondString === undefined)
    throw new Error("Second string cannot be undefined");

  if (typeof firstString !== "string" || typeof secondString !== "string")
    throw new Error("Arguments must be strings");

  const firstArr = firstString.split("");
  const secArr = secondString.split("");

  const firstSort = firstArr.sort().join("");
  const secSort = secArr.sort().join("");

  return firstSort.localeCompare(secSort) === 0 ? true : false;
}

module.exports = checkAnagram;
