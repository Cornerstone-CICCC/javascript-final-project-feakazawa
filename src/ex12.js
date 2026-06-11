/**
 * Return basic information about a string.
 * Words are separated by spaces. Sentences end with ., !, or ?.
 * @param {string} str
 * @returns {{characters: number, words: number, sentences: number}}
 */
function analyzeText(str) {
  let sentences = 0;

  if (str === undefined) throw new Error("String cannot be undefined");

  if (typeof str !== "string") throw new Error("Argument must be a string");

  const trimWord = str.trim();

  //only spaces
  if (str.length > 0 && trimWord.length === 0) {
    sentences = 0;
  }

  const splitWord = trimWord.split(" ").filter((word) => word !== "");

  const hasPoint = splitWord.find((word) => word[word.length - 1] === ".");
  const hasExclamation = splitWord.find(
    (word) => word[word.length - 1] === "!",
  );
  const hasQuestion = splitWord.find((word) => word[word.length - 1] === "?");

  if (splitWord.length > 0 && !hasPoint && !hasExclamation && !hasQuestion) {
    sentences = 1;
  } else {
    sentences =
      str.split(".").length -
      1 +
      (str.split("!").length - 1) +
      (str.split("?").length - 1);
  }

  return {
    characters: str.length,
    words: splitWord.length,
    sentences,
  };
}

module.exports = analyzeText;
