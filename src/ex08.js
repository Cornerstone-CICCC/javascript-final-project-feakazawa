/**
 * Return the strings that contain the keyword.
 * The search should be case-insensitive.
 * @param {string[]} arr
 * @param {string} keyword
 * @returns {string[]}
 */
function search(arr, keyword) {
  if (!arr) throw new Error("Array cannot be undefined");

  if (keyword === undefined) throw new Error("Keyword cannot be undefined");

  if (typeof keyword !== "string") throw new Error("Keyword must be a string");

  if (!Array.isArray(arr)) throw new Error("Argument must be an array");

  const notString = arr.find((item) => typeof item !== "string");
  if (notString > 0 || notString === null)
    throw new Error("Array can only contain strings");

  return arr.filter((item) =>
    item.toLowerCase().includes(keyword.toLowerCase()),
  );
}

module.exports = search;
