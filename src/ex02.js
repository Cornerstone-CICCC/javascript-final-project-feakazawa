/**
 * Add all numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
  return arr.reduce((total, number) => total + number);
}

module.exports = sumArray;
