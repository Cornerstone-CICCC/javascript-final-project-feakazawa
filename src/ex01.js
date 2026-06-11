/**
 * Find the maximum number in an array of numbers
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  if (!arr) throw new Error("Array cannot be undefined");

  if (!Array.isArray(arr)) throw new Error("Argument must be an array");

  if (arr.length <= 0) throw new Error("Array cannot be empty");

  const notNumber = arr.find((value) => typeof value !== "number");
  if (notNumber === null || notNumber > 0)
    throw new Error("Array can only contain numbers");

  const sortArr = arr.toSorted((a, b) => b - a);

  return sortArr[0];
}

module.exports = findMax;
