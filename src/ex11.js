/**
 * Rotate the values in an array to the right.
 * Negative positions rotate the array to the left.
 * @param {Array} arr
 * @param {number} positions
 * @returns {Array}
 */
function rotateArray(arr, positions) {
  if (!arr) throw new Error("Array cannot be undefined");

  if (positions === undefined) throw new Error("Positions cannot be undefined");

  if (typeof positions !== "number")
    throw new Error("Positions must be a number");

  if (!Number.isInteger(positions))
    throw new Error("Positions must be an integer");

  if (!Array.isArray(arr)) throw new Error("Argument must be an array");

  const splitIndex =
    positions > 0 ? arr.length - positions : -1 * positions - arr.length;
  return [...arr.slice(splitIndex), ...arr.slice(0, splitIndex)];
}

module.exports = rotateArray;
