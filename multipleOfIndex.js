// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

const multipleOfIndex = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i] / i)) {
      result.push(array[i]);
    }
  }
  return result;
};

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25]
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10])); // [-1, 10]
console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68])); // [-85, 72, 0, 68]