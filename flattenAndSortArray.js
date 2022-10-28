// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

const flattenAndSort = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result.push(array[i][j]);
    }
  }
  return result.sort((a,b) => (a - b));
};

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])); // [1,2,3,4,5,6,7,8,9]
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); // [1, 2, 3, 4, 5, 6, 100]
console.log(flattenAndSort([[], [1]])); // [1]
console.log(flattenAndSort([[], []])); // []