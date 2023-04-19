// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

const isSortedAndHow = (arr) => {
  let str = arr.join("");
  let asc = arr.sort((a, b) => a - b).join("");
  let desc = arr.sort((a, b) => b - a).join("");
  if (str === asc) {
    return "yes, ascending";
  } else if (str === desc) {
    return "yes, descending";
  } else {
    return "no";
  }
};

console.log(isSortedAndHow([1, 2])); // yes, ascending
console.log(isSortedAndHow([15, 7, 3, -8])); // yes, descending
console.log(isSortedAndHow([4, 2, 30])); // no