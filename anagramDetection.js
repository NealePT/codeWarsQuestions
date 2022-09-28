// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

const isAnagram = (a, b) => {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    return false;
  }
  let str1 = a.toUpperCase().split('').sort().join('');
  let str2 = b.toUpperCase().split('').sort().join('');
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("NealeTaylor", "neaeTAYlor")); // false