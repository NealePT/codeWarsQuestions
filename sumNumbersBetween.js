// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

const getSum = (a, b) => {
  let sum = 0;
  let low = 0;
  let high = 0;
  if (a > b) {
    low = b;
    high = a;
  } else {
    low = a;
    high = b;
  }
  for (let i = low; i <= high; i++) {
    sum += i;
  }
  return sum;
};

console.log(getSum(1, 0)); // 1;
console.log(getSum(1, 2)); // 3;
console.log(getSum(-1, 2)); // 2;
