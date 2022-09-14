// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

const stray = (numbers) => {
  let arr1 = [];
  let arr2 = [];
  for (let number of numbers) {
    if (arr1.length === 0) {
      arr1.push(number);
    } else if (arr1[0] === number) {
      arr1.push(number);
    } else {
      arr2.push(number);
    }
  }
  return (arr1.length === 1 ? Number(arr1) : Number(arr2));
};

// const stray = (numbers) => {
//   for (let i in numbers) {
//     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
//       return numbers[i];
//     }
//   }
// };

console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3
console.log(stray([1, 1, 2])); // 2
console.log(stray([1, 2, 2])); // 1