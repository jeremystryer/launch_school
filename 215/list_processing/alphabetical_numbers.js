// Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:
// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// RULES:
// input: array of numbers 0 - 19
// output: array of numbers sorted based on English word of each number

// array contains all values 0 - 19
// sequence of input array will be 0 - 19
// can use built-in sort function

// ALGORITHM
// create an object of words as keys and numbers as values
// create an array of keys which will be an array of words
// sort the array of words in ascending order --> ['eight', 'eighteen', 'eleven', 'fifteen']
// map through the array of words and look up the value for each of the words from object
// return new array

function alphabeticNumberSort(numberArray) {
  const WORDS_TO_NUMBERS = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
                             six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11,
                             twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16,
                             seventeen: 17, eighteen: 18, nineteen: 19 };

  let words = Object.keys(WORDS_TO_NUMBERS).sort();
  return words.map(word => WORDS_TO_NUMBERS[word]);
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
