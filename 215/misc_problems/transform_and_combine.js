// Given an array, output a string which combines the elements of the array by adhering to the following rules:

// If a number is adjacent to another number, they should be added together.
// String number elements must be converted to their number + 3. i.e. String "1" is integer 4. This must be done before adding the element to any adjacent elements.
// String number elements are worth their stated value. i.e 1 is 1.
// If a number is adjacent to a string number with its same "stated" value at the beginning, then AFTER the string number has been converted to its increased value, those two numbers are multiplied rather than added.
    // Example for clarity:
    // console.log(arrayCombo(['5', 5])); // '40'
    // console.log(arrayCombo(['2', 5])); // '10'

// Strings are left alone except for the following special string words, which should be converted to numbers of the following values:
      // 'dog' = 1
      // 'cat' = 2
      // 'fish' = 3
      // 'bird' = 4
// In the final output string there should be spaces between every element (after conversions and combinations have occured).
//  Anything other than a String or a Number should have String() called on it and then delt with as a a string.

// Example:

// console.log(arrayCombo([1, 2, "challenge", 3, 4])); // "3 challenge 7"
// console.log(arrayCombo([1, 2, "3", 4, 'hello', 'dog', 'cat'])); // "13 hello 3"
// console.log(arrayCombo(["cat", "attack", ['fish'], 4])); // '2 attack 7'

// ([1, 2, "3", 4, 'hello', 'dog', 'cat'])
//     3    6   4   hello     1      2

// input: array
// output: string with elements of array combined:
//  number followed by number --> add together
//  string that represents a number --> add 3 to "number"

//  string that represents number next to (either before or after) SAME number    (not string) --> add 3 to string number and THEN multiply this value * SAME number
//  special string values -->
//      'dog' = 1
//      'cat' = 2
//      'fish' = 3
//      'bird' = 4

// ANY data types other than STRING or NUMBER should have String() invoked
// final output in string has one space between every element from array

// start with array
// iterate through array:
// 1) for any values that are not string or numbers, invoke String() on them

// iterate through array:
// 2) if element is a string --> check if string is a number or special string

// iterate through array:
// 3) is element a number

// with final returned array, join it together on a space

////////////

// input: array1
// let array2 = map over array1 --> invoke a function that returns true if element is not a string or number
    // function isStringOrNumber
    //  String(element) !== element
    //  Number(element) !== element
// if isStringOrNumber(element), String(element)

// array3 = map over array2 --> isStringNumber(element)
    // String(Number(element)) === element
    // if true, then Number(element) + 3
    //

   // array4 = specialValues =   { 'dog': 1, 'cat': 2, 'fish': 3 'bird': 4 }
    // if specialValues[element], specialValues[element]

// array4
    // map over array3 and add consecutive numbers

// join returned array on ' '

function arrayCombo(array) {
  const SPECIAL_VALUES =  { 'dog': 1, 'cat': 2, 'fish': 3, 'bird': 4 };
  let array1 = array;

  let array2 = array1.map(function (element) {
    if (isStringOrNumber(element)) {
      return String(element);
    } else {
      return element;
    }
  });

  let array3 = array2.map(function (element) {
    if (isStringNumber(element)) {
      return Number(element) + 3;
    } else {
      return element;
    }
  });

  let array4 = array3.map(function (element) {
    return SPECIAL_VALUES[element] || element;
  });

  while (hasTwoConsecutiveNumbers(array4)) {
    array4 = addConsecutiveNumbers(array4);
  }

  return array4;
}

function addConsecutiveNumbers(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (isNumber(array[index]) && isNumber(array[index + 1])) {
      newArray.push(array[index] + array[index + 1]);
      index += 1;
    } else {
      newArray.push(array[index]);
    }
  }

  return newArray;
}

function hasTwoConsecutiveNumbers(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (isNumber(array[index]) && isNumber(array[index + 1])) {
      return true;
    }
  }
}

function isStringOrNumber(element) {
  return (String(element) !== element && Number(element) !== element);
}

function isStringNumber(element) {
  return String(Number(element)) === element;
}

function isNumber(element) {
  return Number(element) === element;
}

console.log(arrayCombo([1, 2, "challenge", 3, 4])); // "3 challenge 7"
console.log(arrayCombo([1, 2, "3", 4, 'hello', 'dog', 'cat'])); // "13 hello 3"
console.log(arrayCombo(["cat", "attack", ['fish'], 4])); // '2 attack 7'
