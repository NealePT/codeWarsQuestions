// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

const capitalize = (string) => {
  let resultA = [];
  let resultB = [];
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      resultA.push(string[i].toUpperCase());
      resultB.push(string[i]);
    } else {
      resultA.push(string[i]);
      resultB.push(string[i].toUpperCase());
    }
  }
  return [resultA.join(""), resultB.join("")];
};

console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']
console.log(capitalize("codewars")); // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra")); // ['AbRaCaDaBrA', 'aBrAcAdAbRa']