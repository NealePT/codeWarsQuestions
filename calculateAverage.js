// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

const find_average = (array) => {
  let result = 0;
  if (array.length === 0) return 0;
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result / array.length;
};

console.log(find_average([1,1,1])); // 1
console.log(find_average([1,2,3])); // 2
console.log(find_average([1,2,3,4])); // 2.5