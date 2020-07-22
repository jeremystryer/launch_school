// Your task is to Combine two Strings. But consider the rule...
//
// By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks, only two input strings and as result one output string;-)...
//
// And here's the rule:
// Input Strings a and b: For every character in string a swap the casing of every occurrence of the same character in string b. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of a followed by the changed version of b. A char of a is in b regardless if it's in upper or lower case - see the testcases too.
// I think that's all;-)...
//
// Some easy examples:
//
// Input: "abc" and "cde"      => Output: "abCCde"
// Input: "ab" and "aba"       => Output: "aBABA"
// Input: "abab" and "bababa"  => Output: "ABABbababa"
// Once again for the last example - description from KenKamau, see discourse;-):
//
// a) swap the case of characters in string b for every occurrence of that character in string a
// char 'a' occurs twice in string a, so we swap all 'a' in string b twice. This means we start with "bababa" then "bAbAbA" => "bababa"
// char 'b' occurs twice in string a and so string b moves as follows: start with "bababa" then "BaBaBa" => "bababa"
//
// b) then, swap the case of characters in string a for every occurrence in string b
// char 'a' occurs 3 times in string b. So string a swaps cases as follows: start with "abab" then => "AbAb" => "abab" => "AbAb"
// char 'b' occurs 3 times in string b. So string a swaps as follow: start with "AbAb" then => "ABAB" => "AbAb" => "ABAB".
//
// c) merge new strings a and b
// return "ABABbababa"

///////////////

// input: 2 strings
// output: 1 merged string with case of letter switched if it appears in both strings

// RULES
// comparing one string to the other, if a letter appears in other string (regardless of whether uppercase or lowercase), switch case of ltter
// if not a letter, then no change
// strings will always have at least one character
// strings may be different lengths


// ALGORITHM
// split first string into array
// iterate through array
//  if character is not a letter, then return as is (guard clause)
//  if character is included in 2nd string, toggle case for every occurrence in 2nd string (i.e. if one occurrence, then switch case, if two then switch back, etc)
//    write a function that counts number of occurrences of given letter in string
//    if number of occurrences is odd, then switchCase and return character
//    if number of occurrences is even, then return character as is
//  if character is not included in 2nd string, then return as is
// join returned array into string and save to variable
// repeat same steps with 2nd string, comparing to first string
// concatenate two strings and return

function workOnStrings(string1, string2) {
  let transformedString1 = string1.split('').map(function (character) {
    if (character.match(/[^a-z]/i)) return character;

    if (string2.toLowerCase().includes(character.toLowerCase())) {
      let count = countOccurrences(character.toLowerCase(), string2.toLowerCase());

      if (count % 2 === 1) return toggleCase(character);
      return character;
    } else {
      return character;
    }
  }).join('');

  let transformedString2 = string2.split('').map(function (character) {
    if (character.match(/[^a-z]/i)) return character;

    if (string1.toLowerCase().includes(character.toLowerCase())) {
      let count = countOccurrences(character.toLowerCase(), string1.toLowerCase());

      if (count % 2 === 1) return toggleCase(character);
      return character;
    } else {
      return character;
    }
  }).join('');

  return transformedString1 + transformedString2;
}

function toggleCase(char) {
  if (char === char.toLowerCase()) {
    return char.toUpperCase();
  } else if (char === char.toUpperCase())  {
    return char.toLowerCase();
  }
}

function countOccurrences(char, string) {
  return string.split('').filter(letter => letter === char).length;
}

console.log(workOnStrings("abc","cde") === "abCCde");
console.log(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe") === "abcDeFGtrzWDEFGgGFhjkWqE");
console.log(workOnStrings("abab", "bababa") === "ABABbababa");
console.log(workOnStrings("abab2", "bababa6!") === "ABAB2bababa6!");
