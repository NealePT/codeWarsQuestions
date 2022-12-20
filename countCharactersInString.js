// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

const count = (string) => {
  let result = {};
  let split = string.split("");
  for (let i = 0; i < split.length; i++) {
    if (!Object.keys(result).includes(split[i])) {
      result[split[i]] = 1;
    } else if (Object.keys(result).includes(split[i])) {
      result[split[i]] = result[split[i]] + 1;
    }
  }
  return result;
};

console.log(count("abc")); // { a: 1, b: 1, c: 1 })
console.log(count("aabbcc")); // { a: 2, b: 2, c: 2 })
console.log(count("")); // {})