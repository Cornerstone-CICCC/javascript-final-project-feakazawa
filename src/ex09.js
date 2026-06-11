/**
 * Capitalize the first letter of every word in a string.
 * @param {string} str
 * @returns {string}
 */
function capitalizeWords(str) {
  if (str === undefined) throw new Error("String cannot be undefined");

  if (typeof str !== "string") throw new Error("Argument must be a string");

  return str
    .trim()
    .split(" ")
    .filter((word) => word !== "")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

module.exports = capitalizeWords;
