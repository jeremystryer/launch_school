// Given a string, write a method change_me which returns the same string but with all the words in it that are palindromes uppercased.

// input: string
// output: string with words that are palindromes in uppercase

// What is a palindrome?
//  A palindrome is a word that is the same when reversed.

// RULES
// assume input will always be string
// if input string is empty, then return empty string
// preserve cases of all words in input strings EXCEPT for palindromes which will be upcased

// split string into an array of words
// map over array
//  check whether word is a palindrome
//    if it is, then return uppercase version of word
//    if it is not, then return word as is
// convert returned array to string
// return string

// check whether word is a palindrome
//  input: word
//  output: boolean
//  split word into array of letters
//  make a copy of array of letters
//  iterate over letters copy array starting at end of array
//    iterate over letters array starting from beginning
//      check if letter from copy array === letter from letters array
//      if at any point, they are not equal, quit iteration and return false
//      if iteration completes and false is not returned, then return true


function change_me(sentence) {
  return sentence.split(' ').map(function (word) {
    return isPalindrome(word) ? word.toUpperCase() : word;
  }).join(' ');
}

function isPalindrome(word) {
  let letters = word.split('');
  let lettersCopy = letters.map(letter => letter);
  j = 0;

  for (let i = lettersCopy.length - 1; i >= 0; i -= 1) {
    if (lettersCopy[i] !== letters[j]) return false;
    j += 1;
  }

  return true;
}

console.log(change_me("We will meet at noon") === "We will meet at NOON");
console.log(change_me("No palindromes here") === "No palindromes here");
console.log(change_me("") === "");
console.log(change_me("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally");
