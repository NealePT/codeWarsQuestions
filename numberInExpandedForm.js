// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

const expandedForm = (num) => {
  let str = String(num).split('');
  
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - i; j > 1; j--) {
      if (str[i] === '0') {
        i++;
      } else {
        str[i] += '0';
      }
    }
  }
  
  return str.filter(item => item !== '0').join(' + ');
};

console.log(expandedForm(12)); // "10 + 2"
console.log(expandedForm(42)); // "40 + 2"
console.log(expandedForm(70304)); // "70000 + 300 + 4"