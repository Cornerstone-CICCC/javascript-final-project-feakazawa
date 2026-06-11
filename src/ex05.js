/**
 * Return a new array containing only the even numbers.
 * @param {number[]} arr
 * @returns {number[]}
 */
function filterEvenNumbers(arr) {
  return arr.filter((number) => number % 2 === 0);
}

module.exports = filterEvenNumbers;
