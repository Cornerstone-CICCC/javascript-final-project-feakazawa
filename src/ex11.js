/**
 * Rotate the values in an array to the right.
 * Negative positions rotate the array to the left.
 * @param {Array} arr
 * @param {number} positions
 * @returns {Array}
 */
function rotateArray(arr, positions) {
  const splitIndex = arr.length - positions;
  return [...arr.slice(splitIndex), ...arr.slice(0, splitIndex)];
}

module.exports = rotateArray;
