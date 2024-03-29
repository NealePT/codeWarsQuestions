// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

const rowWeights = (array) => {
  let result1 = 0;
  let result2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      result1 += array[i];
    } else {
      result2 += array[i];
    }
  }
  return [result1, result2];
};

console.log(rowWeights([13, 27, 49])); // (62, 27)
console.log(rowWeights([50, 60, 70, 80])); // (120, 140)
console.log(rowWeights([80, 0])); // (80, 0)