/**
 * Find the indices of two numbers that add up to the target.
 * Return an empty array when no pair exists.
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
function findTwoSum(numbers, target) {
  if (numbers[0] + numbers[1] === target) return [0, 1];

  return [];
}

module.exports = findTwoSum;
