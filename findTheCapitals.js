// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = (word) => {
  let capitalList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (capitalList.includes(word[i])) {
      result.push(i);
    }
  }
  return result;
};

console.log(capitals("CodEWaRs")); // [0,3,4,6]