/**
 * Classify numbers as positive, negative, or zero.
 * @param {number[]} arr
 * @returns {{positive: number[], negative: number[], zero: number[]}}
 */
function classifyNumbers(arr) {
  return {
    positive: arr.filter((number) => number > 0),
    negative: arr.filter((number) => number < 0),
    zero: arr.filter((number) => number === 0),
  };
}

module.exports = classifyNumbers;
