// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


const getCount = (string) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let letter of string) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
};

console.log(getCount("abracadabra")); //5
console.log(getCount("neale")); //3