// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:

//     You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return 0.00

//     You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

const SeriesSum = (n) => {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += (1 / (1 + i * 3));
  }
  return result.toFixed(2);
};

console.log(SeriesSum(1)); // 1.00
console.log(SeriesSum(2)); // 1.25
console.log(SeriesSum(5)); // 1.57