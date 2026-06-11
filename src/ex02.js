/**
 * Add all numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
  if (!arr) throw new Error("Array cannot be undefined");

  if (!Array.isArray(arr)) throw new Error("Argument must be an array");

  if (arr.length <= 0) return 0;

  if (arr.find((num) => typeof num !== "number"))
    throw new Error("Array can only contain numbers");

  return arr.reduce((total, number) => total + number);
}

module.exports = sumArray;
