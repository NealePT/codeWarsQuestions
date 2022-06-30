// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const reverseWords = (string) => {
  let reversedArr = string.split(" ").map(word =>
    word.split("").reverse().join(""));
  return reversedArr.join(" ");
};

console.log(reverseWords("double spaces")); // "elbuod  secaps"
console.log(reverseWords("This is an example!")); // "sihT si na !elpmaxe"