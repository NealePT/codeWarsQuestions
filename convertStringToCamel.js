const toCamelCase = function(str) {
  let array = [];
  if (str.includes('-')) {
    array = str.split('-');
  } else if (str.includes('_')) {
    array = str.split('_');
  }
  for (let i = 1; i < array.length; i++) {
    let word = array[i];
    word = word.charAt(0).toUpperCase() + word.slice(1);
    array.splice(i, 1, word);
  }
  let newString = array.join('');
  return newString;
};

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_stealth_warrior"));