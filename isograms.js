// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const isIsogram = (string) => {
  let array = [];
  for (let letter of string.toLowerCase()) {
    if (array.includes(letter)) {
      return false;
    }
    array.push(letter);
  }
  return true;
};

console.log(isIsogram("DermatoglYphics")); // true
console.log(isIsogram("aba")); // false