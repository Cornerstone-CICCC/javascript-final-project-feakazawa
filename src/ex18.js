/**
 * Return all values from a matrix in clockwise spiral order.
 * @param {Array[]} matrix
 * @returns {Array}
 */
function traverseSpiral(matrix) {
  if (matrix.length === 0) return [];

  return [...matrix[0]];
}

module.exports = traverseSpiral;
