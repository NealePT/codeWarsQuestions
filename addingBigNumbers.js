// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example

// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

const add = (A, B) => {
  const AL = A.length;
  const BL = B.length;
  const ML = Math.max(AL, BL);

  let carry = 0, sum = '';

  for (let i = 1; i <= ML; i++) {
    let a = +A.charAt(AL - i);
    let b = +B.charAt(BL - i);

    let t = carry + a + b;
    carry = t / 10 | 0;
    t %= 10;

    sum = (i === ML && carry)
      ? carry * 10 + t + sum
      : t + sum;
  }

  return sum;
};

console.log(add("123", "321")); // "444"
console.log(add("63829983432984289347293874", "90938498237058927340892374089")); // "91002328220491911630239667963"