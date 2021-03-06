// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

const squareSum = (array) => {
  let result = 0;
  for (let number of array) {
    result += (number * number);
  }
  return result;
};

console.log(squareSum([1, 2, 2])); // 9
console.log(squareSum([0, 3, 4, 5])); // 50