// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

const minMax = (arr) => {
  let min;
  let max;
  for (let i = 0; i < arr.length; i++) {
    if (!min || arr[i] < min) {
      min = arr[i];
    }
    if (!max || arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
};

console.log(minMax([1,2,3,4,5])); // [1,5]
console.log(minMax([2334454,5])); // [5,2334454]
console.log(minMax([5])); // [5,5]