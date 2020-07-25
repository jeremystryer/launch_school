// # Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// # Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// # If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// #
// # Examples:
// # word_order('is2 Thi1s T4est 3a') == "Thi1s is2 3a T4est"
// # word_order('4of Fo1r pe6ople g3ood th5e the2') == "Fo1r the2 g3ood 4of th5e pe6ople"

/*
input: string of words with each word containing a digit 1 - 9
output: string sorted according to digit in word

rules:
input string will contain at least one letter and always a digit 1 - 9
digit indicates order of word in output string
  -1 indicates first word, 2 second word, etc (starts at 1, not 0)
if input string is empty, return empty string
input string will only contain valid consecutive numbers
digit 1 - 9 can appear anywhere in word

Do i need to validate input (i.e. input is string)? No
Word will always contain a digit 1 - 9? Yes
No repetition of digits? Correct
Can be 1 up to 9, not necessarily 9 words? Correct

algorithm:
create new empty string
split the input string into array of words
set a digit var to 1
continue iterating through array (multiple iterations) while digit var is less than or equal to length of array
  element that matches regex of var, then concat element to string
  increment digit var
return string
*/

function word_order(string) {
  if (string.trim().length === 0) return '';

  let orderedArr = [];
  let arr = string.split(' ');
  let digit = 1;

  while (digit <= arr.length) {
    arr.forEach(function (word) {
      let regex = new RegExp(digit);
      if (word.match(regex)) {
        orderedArr.push(word);
        digit += 1;
      }
    });
  }

  return orderedArr.join(' ');
}

console.log(word_order('is2 Thi1s T4est 3a') === "Thi1s is2 3a T4est");
console.log(word_order('4of Fo1r pe6ople g3ood th5e the2') === "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(word_order('') === '');
console.log(word_order('  ') === '');
