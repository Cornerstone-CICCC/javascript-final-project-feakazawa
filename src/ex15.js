/**
 * Find the longest prefix shared by every string in an array.
 * @param {string[]} strings
 * @returns {string}
 */
function findLongestCommonPrefix(strings) {
  if (!strings) throw new Error("Array cannot be undefined");

  if (!Array.isArray(strings)) throw new Error("Argument must be an array");

  const notString = strings.find((word) => typeof word !== "string");
  if (notString) throw new Error("Array can only contain strings");

  if (strings.length === 0) return "";

  if (strings.length === 1) return "alone";

  let prefix = "";
  let prefixArr = [];

  const WordLen = strings.map((word) => word.length);
  const minWordLen = Math.min(...WordLen); //max of common prefix (ex: the whole word is a common prefix)

  for (let i = 0; i < strings.length - 1; i++) {
    let firstWord = strings[i];
    let secondWord = strings[i + 1];

    for (let j = 0; j < minWordLen; j++) {
      if (firstWord[j] !== secondWord[j]) break;
      prefix += firstWord[j];
    }
    prefixArr.push(prefix); //all common prefix between word comparison
    prefix = "";
  }

  const lenPrefixArr = prefixArr.map((word) => word.length);
  const finalPrefix =
    prefixArr[lenPrefixArr.indexOf(Math.min(...lenPrefixArr))];

  return finalPrefix;
}

module.exports = findLongestCommonPrefix;
