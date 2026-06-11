/**
 * Calculate the average of an array of numbers.
 * @param {number[]} arr
 * @returns {number}
 */
function calculateAverage(arr) {
  const total = arr.reduce((sum, number) => sum + number, 0);
  return total / arr.length;
}

module.exports = calculateAverage;
