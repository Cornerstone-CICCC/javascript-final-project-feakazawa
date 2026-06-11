/**
 * Return a new array with all zeroes moved to the end.
 * Keep the other values in their original order.
 * @param {number[]} numbers
 * @returns {number[]}
 */
function moveZeroes(numbers) {
  const moveNums = [];
  let count = 0;

  if (!numbers) throw new Error("Array cannot be undefined");

  if (!Array.isArray(numbers)) throw new Error("Argument must be an array");

  const notNumber = numbers.find((num) => typeof num !== "number");
  if (notNumber || notNumber === null)
    throw new Error("Array can only contain numbers");

  numbers.map((num, idx) => {
    num !== 0 ? moveNums.push(num) : count++;
  });

  for (let i = 0; i < count; i++) {
    moveNums.push(0);
  }

  return moveNums;
}
moveZeroes([0, 1, 0, 3, 12]);

module.exports = moveZeroes;
