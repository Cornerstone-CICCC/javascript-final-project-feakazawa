/**
 * Find the indices of two numbers that add up to the target.
 * Return an empty array when no pair exists.
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
function findTwoSum(numbers, target) {
  for (let first = 0; first < numbers.length; first += 1) {
    for (let second = first + 1; second < numbers.length; second += 1) {
      if (numbers[first] + numbers[second] === target) {
        return [first, second];
      }
    }
  }

  return [];
}

module.exports = findTwoSum;
