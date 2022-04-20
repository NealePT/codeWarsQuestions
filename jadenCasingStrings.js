const jadenCase = function(string) {
  let array = string.split(' ');
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    word = word.charAt(0).toUpperCase() + word.slice(1);
    array.splice(i, 1, word);
  }
  let newString = array.join(' ');
  return newString;
};

console.log(jadenCase("How can mirrors be real if our eyes aren't real"));