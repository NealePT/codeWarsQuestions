// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (string) => {
  let array = string.split("")
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "!") {
      array[i] = '';
    }
  }
  return array.join("");
};

console.log(removeExclamationMarks("Hello World!")); // Hello World