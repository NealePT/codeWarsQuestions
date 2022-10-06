// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// Let's assume that all numbers in the input will be integer values.

const sumDigits = (n) => {
  let result = 0;
  if (n < 0) {
    n = n * -1;
  }
  for (let number of n.toString()) {
    result += Number(number);
  }
  return result;
};

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5