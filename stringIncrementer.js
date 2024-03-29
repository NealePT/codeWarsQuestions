// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

const incrementString = (string) => {
  let count = string.match(/\d*$/);
  return string.substr(0, count.index) + (++count[0]);
};

console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foo23")); // "foo24"
console.log(incrementString("foo0042")); // "foo0043"
console.log(incrementString("foo9")); // "foo10"
console.log(incrementString("foo099")); // "foo100"