// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// const sumArray = (array) => {
//   let sum = 0;
//   let min = Math.min(...array);
//   let max = Math.max(...array);
//   for (let num of array) {
//     if (num !== min && num !== max) {
//       sum += num;
//     }
//   }
//   return sum;
// };

const sumArray = (array) => {
  if (array === null || array === undefined || array === []) {
    return 0;
  }
  array = array.sort(function(a,b) {
    return a - b;
  });
  let total = 0;
  for (let i = 1; i < array.length - 1; i++) {
    total += array[i];
  }
  return total;
};

console.log(sumArray([6, 2, 1, 8, 10])); // 16
console.log(sumArray([1, 1, 11, 2, 3])); // 6