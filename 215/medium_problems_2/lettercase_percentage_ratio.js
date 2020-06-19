// Write a function that takes a string, and returns an object containing the following three properties:
//
// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// input: string of at least 1 character
// output: object
//    properties: lowercase, uppercase and neither
//        values: string representing a float with two decimal points indicating percentage of occurrence of property

// neither is any character that is not letter (a-z or A-Z), so can be number, space, or any other value

// save length of string into variable strLength
// initialize output object
// add properties of lowercase, uppercase, neither and values 0
// split string into characters
// forEach through array
// check with regex if character is lowercase leter => /a-z/
//    if yes, add 1 to lowerCase count in object
// check with regex if character is uppercase leter => /A-Z/
//    if yes, add 1 to upperCase count in object
// else add 1 to neitherCount in object

// iterate through object and change value to (currentValue / strLength) * 100
// then call toFixed(2) on result => result.toFixed(2)
// then String on this result => String(result.toFixed(2));
// reassign value in object to this
// return object

function letterPercentages(string) {
  let strLength = string.length;
  let percentagesOfTypes = {lowercase: 0, uppercase: 0, neither: 0};
  let characters = string.split('');

  characters.forEach(function (char) {
    if ((/[a-z]/).test(char)) {
      percentagesOfTypes['lowercase'] += 1;
    } else if ((/[A-Z]/).test(char)) {
      percentagesOfTypes['uppercase'] += 1;
    } else {
      percentagesOfTypes['neither'] += 1;
    }
  });

  for (type in percentagesOfTypes) {
    let percentageAsNumber = (percentagesOfTypes[type] / strLength) * 100
    percentagesOfTypes[type] = String(percentageAsNumber.toFixed(2));
  }

  return percentagesOfTypes;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('1Aa'));
// {lowercase: '33.33', uppercase: '33.33', neither: '33.33'}
