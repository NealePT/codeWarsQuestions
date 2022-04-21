// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (string) => {
  let array = string.split('');
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    word = word.toLowerCase().repeat(i + 1);
    word = word.charAt(0).toUpperCase() + word.slice(1);
    array.splice(i, 1, word);
  }
  
  return array.join('-');
};

console.log(accum("abcd"));