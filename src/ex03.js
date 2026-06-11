/**
 * Calculate the factorial of a non-negative integer.
 * @param {number} number
 * @returns {number}
 */
function calculateFactorial(number) {
  let result = 1;

  if (number === undefined) throw new Error("Number cannot be undefined");

  if (typeof number !== "number") throw new Error("Argument must be a number");

  if (number < 0) throw new Error("Number cannot be negative");

  if (!Number.isInteger(number)) throw new Error("Number must be an integer");

  for (let current = 1; current <= number; current += 1) {
    result *= current;
  }

  return result;
}

module.exports = calculateFactorial;
