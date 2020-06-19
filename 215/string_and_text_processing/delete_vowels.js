// Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).

function removeVowels(strings) {
  const VOWELS = /[aeiou]/gi;
  return strings.map(string => VOWELS.test(string) ? string.replace(VOWELS, '') : string);
}

function removeVowels(array) {
  return array.map(string => string.replace(/[aeiou]/gi,''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
