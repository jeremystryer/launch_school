// # Given a string, write a method `palindrome_substrings` which returns all the substrings from a given string which are palindromes. Consider palindrome words case sensitive.

// input: string
// output: array of palindrome strings

// RULES
// assume input is string
// find all palindromes contained within a string
// palindromes are case sensitive (i.e. dad is a palindrome, but Dad is not)
// palindromes must be at least two letters in length (no max length)
// return an empty array if there are no palindromes OR input string is empty

// ALGORITHM
// begin iterating at index 0 of string
//  begin iterating at index 1 of string
//    if word formed using index 0 and index 1 is a palindrome, push it into an array
//  increase index
//    check if word formed from index1 + index2 + index3 is palindrome. if it is, push into array
// increase index by 1
//  begin iterating at index 2

// inner index will always start at 1 more than starting point of outer index


// check if palindrome
//  isPalindrome(word) method --> case sensitive check

function palindrome_substrings(str) {
  let palindromes = [];

  for (let i = 0; i < str.length - 2; i += 1) {
    for (let j = i + 2; j <= str.length; j += 1) {
      let substring = str.slice(i, j);
      if (isPalindrome(substring)) {
        palindromes.push(substring);
      }
    }
  }

  return palindromes;
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

console.log(palindrome_substrings("supercalifragilisticexpialidocious"));   // ["ili"])
console.log(palindrome_substrings("abcddcbA"));                              // ["bcddcb", "cddc", "dd"])
console.log(palindrome_substrings("palindrome"));                           // []
console.log(palindrome_substrings(""));                                     // []
