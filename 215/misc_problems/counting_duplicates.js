// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
// Examples:
//
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// RULES
// input: string
// output: number representing number of characters that appear more than once in string

// assume input is string
// case does not matter (i.e. baB would return 1 since B is repetition of b)
// characters in string are alphanumeric (uppercase and lowercase for letters)
// string can be empty
// return 0 if string is empty OR no character appears more than once
// if character follows same character in string, then does not count as repetition

// ALGORITHM
// 1) create an object that will have characters as keys and number of occurrences as values
// 2) lowercase string
// 3) convert lowercased string into array of chars
// 4) iterate over the array
//  5) if the character is not a key in the object, then assign the character as key and 1 as value to object
//  6) if the character is a key, increase the value whose key is the same as character
// 7) count the number of keys in the object whose values are more than 1
//  8) return the count

function duplicateCount(string) {
  let characterCount = {};
  let lowercaseString = string.toLowerCase();
  let characters = lowercaseString.split('');

  characters.forEach(function (character, index) {
    let keys = Object.keys(characterCount);
    if (!keys.includes(character)) {
      characterCount[character] = 1;
    } else {
      characterCount[character] += 1;
    }
  });

  let count = 0;

  for (character in characterCount) {
    if (characterCount[character] > 1) {
      count += 1;
    }
  }

  return count;
}


console.log(duplicateCount(""));                 // 0
console.log(duplicateCount("abcde"));            // 0
console.log(duplicateCount("aabbcde"));          // 2
console.log(duplicateCount("aabBcde"));          // 2
console.log(duplicateCount("Indivisibility"));   // 1
console.log(duplicateCount("Indivisibilities")); // 2
