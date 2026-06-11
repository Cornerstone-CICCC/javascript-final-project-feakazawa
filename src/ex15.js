/**
 * Find the longest prefix shared by every string in an array.
 * @param {string[]} strings
 * @returns {string}
 */
function findLongestCommonPrefix(strings) {
  if (strings.length === 0) return '';

  const firstString = strings[0];
  const lastString = strings[strings.length - 1];
  let prefix = '';

  for (let index = 0; index < firstString.length; index += 1) {
    if (firstString[index] !== lastString[index]) break;
    prefix += firstString[index];
  }

  return prefix;
}

module.exports = findLongestCommonPrefix;
