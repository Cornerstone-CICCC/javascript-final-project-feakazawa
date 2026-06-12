/**
 * Determine whether every opening bracket has a matching
 * closing bracket
 * in the correct order.
 * The string may contain (), [], and {}.
 * @param {string} brackets
 * @returns {boolean}
 */
function checkBalancedBrackets(brackets) {
  const onlyBrackets = ["(", ")", "[", "]", "{", "}"];
  let openPar = 0;
  let closePar = 0;
  let openSquare = 0;
  let closeSquare = 0;
  let openCurly = 0;
  let closeCurly = 0;
  let empty = 0;
  let remainderBrackets = 0;
  let openParIdx = 0;
  let closeParIdx = 0;
  let openSqrIdx = 0;
  let closeSqrIdx = 0;
  let openCurlIdx = 0;
  let closeCurlIdx = 0;

  if (brackets === undefined) throw new Error("String cannot be undefined");

  if (typeof brackets !== "string")
    throw new Error("Argument must be a string");

  const splitBrac = brackets.split("");
  const bracketArr = splitBrac
    .map((char) => onlyBrackets.includes(char))
    .filter((value) => value === false);

  if (bracketArr.length > 0)
    throw new Error("String can only contain brackets");

  if (splitBrac.length == 2) {
    if (
      (splitBrac[0] === "(" && splitBrac[1] !== ")") ||
      (splitBrac[0] === "[" && splitBrac[1] !== "]") ||
      (splitBrac[0] === "{" && splitBrac[1] !== "}")
    ) {
      return false;
    }
  }

  for (const bracket of brackets) {
    switch (bracket) {
      case "(":
        openPar += 1;
        openParIdx = brackets.indexOf("(");
        break;
      case ")":
        closePar += -1;
        closeParIdx = brackets.indexOf(")");
        break;
      case "[":
        openSquare += 1;
        openSqrIdx = brackets.indexOf("[");
        break;
      case "]":
        closeSquare += -1;
        closeSqrIdx = brackets.indexOf("]");
        break;
      case "{":
        openCurly += 1;
        openCurlIdx = brackets.indexOf("{");
        break;
      case "}":
        closeCurly += -1;
        closeCurlIdx = brackets.indexOf("}");
        break;
      case "":
        empty;
        break;
    }
  }

  //check if it starts with closing bracket
  if (
    closeParIdx < openParIdx ||
    closeSqrIdx < openSqrIdx ||
    closeCurlIdx < openCurlIdx
  )
    return false;

  remainderBrackets =
    openPar + closePar + openSquare + closeSquare + openCurly + closeCurly;

  return remainderBrackets === 0;
}

// console.log(checkBalancedBrackets("(]"));

module.exports = checkBalancedBrackets;
