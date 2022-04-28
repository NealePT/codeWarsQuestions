// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const rot13 = (message) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = [];
  for (let i = 0; i < message.length; i++) {
    let letter = message[i];
    for (let j = 0; j < alphabet.length; j++) {
      if (letter === alphabet[j]) {
        let movedNum = j + 13;
        if (movedNum > 25) {
          movedNum = movedNum - 26;
          result.push(alphabet[movedNum]);
        } else {
          result.push(alphabet[movedNum]);
        }
      }
    }
  }
  return result.join('');
};

console.log(rot13("test")); // grfg