// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// input: string
// output: string with number words converted to numbers

// RULES
// number words can only be digits 0 - 9
// need to account for number words that have punctuation
// need to account for number words that might appear within a larger word ('nine' in 'ninety')

// ALGORITHM
// create an array of number words ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
// iterate through number words
//  create a regex out of current number word, using word boundaries
// replace all instances (globally) of that regex within sentence
// return changed sentence

function wordToDigit(sentence) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  NUMBER_WORDS.forEach(function (numberWord, index) {
    let regex = new RegExp('\\b' + numberWord + '\\b', 'g');
    sentence = sentence.replace(regex, index);
  });

  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Please call me at five-five-five one-two-three-four. Thanks.'));
// "Please call me at 5-5-5 1-2-3-4. Thanks."

console.log(wordToDigit('Please call me at (five five five) one, two, three, four. Thanks.'));
// "Please call me at (5 5 5) 1, 2, 3, 4. Thanks."
