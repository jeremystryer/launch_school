// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

function wordToDigit(sentence) {
  let numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  numberWords.forEach(function (numberWord, index) {
    let regex = new RegExp(numberWord, 'gi');
    sentence = sentence.replace(regex, index);
  });

  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."'

console.log(wordToDigit('Nine eight seven'));
// '9 8 7'

console.log(wordToDigit('Six two and one. Bye.'));
// '7 2 and 1. Bye.'
