/**
 * Calculate the factorial of a non-negative integer.
 * @param {number} number
 * @returns {number}
 */
function calculateFactorial(number) {
  let result = 1;

  for (let current = 1; current <= number; current += 1) {
    result *= current;
  }

  return result;
}

module.exports = calculateFactorial;
