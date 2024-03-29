// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => {
  let result = [];
  for (let i = 0; i < s1.length; i++) {
    if (!result.includes(s1[i])) {
      result.push(s1[i]);
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (!result.includes(s2[j])) {
      result.push(s2[j]);
    }
  }
  return result.sort().join("");
};

console.log(longest("aretheyhere", "yestheyarehere")); // aehrsty
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // abcdefghilnoprstu
console.log(longest("inmanylanguages", "theresapairoffunctions")); // acefghilmnoprstuy