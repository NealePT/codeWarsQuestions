// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

const addLength = (str) => {
  let result = [];
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
    result.push(`${split[i]} ${split[i].length}`);
  }
  return result;
};

console.log(addLength("apple ban")); // ["apple 5", "ban 3"]
console.log(addLength("you will win")); // ["you 3", "will 4", "win 3"]