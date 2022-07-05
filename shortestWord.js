// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = (str) => {
  let array = str.split(' ');
  let result = 0;
  for (let word of array) {
    if (word.length < result || result === 0) {
      result = word.length;
    }
  }
  return result;
};

console.log(findShort('turns out random test cases are easier than writing out basic ones')); // 3
console.log(findShort('Lets travel abroad shall we')); // 2