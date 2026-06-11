/**
 * Calculate the average of an array of numbers.
 * @param {number[]} arr
 * @returns {number}
 */
function calculateAverage(arr) {
  if (!arr) throw new Error("Array cannot be undefined");

  if (!Array.isArray(arr)) throw new Error("Argument must be an array");

  if (arr.length <= 0) throw new Error("Array cannot be empty");

  if (arr.find((value) => typeof value !== "number"))
    throw new Error("Array can only contain numbers");

  const total = arr.reduce((sum, number) => sum + number, 0);
  return total / arr.length;
}

module.exports = calculateAverage;
