// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 18. Their absolute difference is 15 - 17 = 2.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return
// int: the absolute diagonal difference

const diagonalDifference = (arr) => {
  let row = -1 , coll = -1, colr = arr.length;
  let suml = 0, sumr = 0;
  for (let i = 0; i < arr.length; i++) {
    row++;
    coll++;
    colr --;
    suml += arr[row][coll];
    sumr += arr[row][colr];
    
  }
  return Math.abs(suml - sumr);
};

console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]])); // 2