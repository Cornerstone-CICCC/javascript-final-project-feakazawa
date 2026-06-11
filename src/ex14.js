/**
 * Return a new array with all zeroes moved to the end.
 * Keep the other values in their original order.
 * @param {number[]} numbers
 * @returns {number[]}
 */
function moveZeroes(numbers) {
  return numbers.sort();
}

module.exports = moveZeroes;
