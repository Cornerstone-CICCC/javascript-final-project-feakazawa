/**
 * Return the strings that contain the keyword.
 * The search should be case-insensitive.
 * @param {string[]} arr
 * @param {string} keyword
 * @returns {string[]}
 */
function search(arr, keyword) {
  return arr.filter((item) => item.includes(keyword));
}

module.exports = search;
