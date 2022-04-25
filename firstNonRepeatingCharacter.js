// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

const firstNonRepeatingLetter = (string) => {
  const array = [];
  let result = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  for (let x = 0; x < array.length; x++) {
    let newArr = [...array];
    newArr.splice(x, 1);
    // console.log(newArr);
    if (!newArr.includes(array[x])) {
      // console.log(array[x]);
      result.push(array[x]);
    }
  }
  return result[0];
};

console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('moonmen')); // 'e'