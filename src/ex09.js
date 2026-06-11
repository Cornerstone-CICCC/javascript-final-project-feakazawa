/**
 * Capitalize the first letter of every word in a string.
 * @param {string} str
 * @returns {string}
 */
function capitalizeWords(str) {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

module.exports = capitalizeWords;
