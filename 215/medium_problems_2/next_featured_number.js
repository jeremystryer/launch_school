// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).
//
// Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.
//
// NOTE: The largest possible featured number is 9876543201.

// input: negative number, 0, or positive number
// output: positive number or error message (string)

// featured number:
//  odd number
//  multiple of 7
//  each digit only occurs once

// largest featured number === 9876543201;

// given an integer
// regardless of what number is and whether it is a featured number, begin counting up
// as i count up, check whether number is a featured number (i.e. meets criteria above)
// if it is, then return that number
// if number at some point in count === 9876543201, then return error message

// input: integer --> (20)
// assign integer = 1 to new variable (nextInteger)
// check if nextInteger is multiple of 7 --> [21]
//  if it is not, then continue iteration by adding 1
// check if nextInteger has only unique digits -> separate function
//   split nextInteger into array of digits [2, 1]
//   initialize an empty array
//   iterate through array of digits
//   if digit in array is not in empty array, then push digit to empty array
//   if digit in array is present in empty array, return false, breaking loop
//   if all digits have been iterated through, return true
//   if returns false, then add 1 to nextInteger and repeat from beginning
// check if nextInteger > 9876543201
//   if it is, then return error message (string)

// finally, return nextInteger

// using a while loop
function featured(number) {
  nextNumber = number + 1;

  while (lessThanOrEqualToMaxNumber(nextNumber)) {
    if (multipleOfSeven(nextNumber) && hasUniqueDigits(nextNumber) && isOdd(nextNumber)) {
      return nextNumber;
    }

    nextNumber += 1;
  }

  return "There is no next featured number.";
}

// using a do...while loop
function featured(number) {
  nextNumber = number;

  do {
    nextNumber += 1;
    if (multipleOfSeven(nextNumber) && hasUniqueDigits(nextNumber) && isOdd(nextNumber)) {
      return nextNumber;
    }
  } while (lessThanOrEqualToMaxNumber(nextNumber));

  return "There is no next featured number.";
}

function hasUniqueDigits(number) {
  let stringDigits = String(number).split('');
  let uniqueStringDigits = [];

  for (let index = 0; index < stringDigits.length; index += 1) {
    if (uniqueStringDigits.includes(stringDigits[index])) {
      return false;
    } else {
      uniqueStringDigits.push(stringDigits[index]);
    }
  }

  return true;
}

function multipleOfSeven(number) {
  return (number % 7 === 0 && number !== 0);
}

function isOdd(number) {
  return number % 2 === 1;
}

function lessThanOrEqualToMaxNumber(number) {
  return number <= 9876543201;
}


// console.log(featured(-1));           // 7
// console.log(featured(0));            // 7
// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543201));   // "There is no next featured number."
