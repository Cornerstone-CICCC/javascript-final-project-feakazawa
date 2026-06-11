/**
 * Return basic information about a string.
 * Words are separated by spaces. Sentences end with ., !, or ?.
 * @param {string} str
 * @returns {{characters: number, words: number, sentences: number}}
 */
function analyzeText(str) {
  return {
    characters: str.length,
    words: str.split(' ').length,
    sentences: str.split('.').length - 1,
  };
}

module.exports = analyzeText;
