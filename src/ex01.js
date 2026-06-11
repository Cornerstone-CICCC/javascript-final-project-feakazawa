/**
 * Find the maximum number in an array of numbers
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  if (arr.length <= 0) throw new Error('Array cannot be empty');

  return arr[0];
}

module.exports = findMax;
