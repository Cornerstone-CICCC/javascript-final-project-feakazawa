/**
 * Determine whether every opening bracket has a matching closing bracket
 * in the correct order. The string may contain (), [], and {}.
 * @param {string} brackets
 * @returns {boolean}
 */
function checkBalancedBrackets(brackets) {
  let openParentheses = 0;

  for (const bracket of brackets) {
    if (bracket === '(') openParentheses += 1;
    if (bracket === ')') openParentheses -= 1;
  }

  return openParentheses === 0;
}

module.exports = checkBalancedBrackets;
