// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

const repeatStr = (n, s) => {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(s);
  }
  return array.join("");
};

console.log(repeatStr(6, "I")); // "IIIIII"
console.log(repeatStr(4, "Hello")); // "HelloHelloHelloHello"