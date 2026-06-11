/**
 * Return a new array containing only the even numbers.
 * @param {number[]} arr
 * @returns {number[]}
 */
function filterEvenNumbers(arr) {
  if (!arr) throw new Error("Array cannot be undefined");

  if (!Array.isArray(arr)) throw new Error("Argument must be an array");

  if (arr.find((value) => typeof value !== "number"))
    throw new Error("Array can only contain numbers");
  return arr.filter((number) => number % 2 === 0);
}

module.exports = filterEvenNumbers;
