/**
 * Count the vowels in a string.
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  const vowels = 'aeiou';

  return str
    .toLowerCase()
    .split('')
    .filter((character) => vowels.includes(character)).length;
}

module.exports = countVowels;
