// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = (string) => {
  let splitStr = string.split("");
  let newStr = string.split("");
  let capStr = string.toUpperCase().split("");
  for (let i = splitStr.length - 1; i >= 0; i--) {
    if (splitStr[i] === capStr[i]) {
      newStr.splice(i, 0, ' ');
    }
  }
  return newStr.join("");
};

console.log(solution("camelTestCasing")); // "camel Test Casing"
console.log(solution("camelCasing")); // "camel Casing"
console.log(solution("identifier")); // "identifier"
console.log(solution("")); // ""
