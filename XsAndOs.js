// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = (str) => {
  let xCount = 0;
  let oCount = 0;
  for (let letter of str.toLowerCase()) {
    if (letter === "x") {
      xCount++;
    } else if (letter === "o") {
      oCount++;
    }
  }
  return (xCount === oCount ? true : false);
};




console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("ooxXm")); // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo")); // false