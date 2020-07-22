// Consider the following series:
//
// 0,1,2,3,4,5,6,7,8,9,10,22,11,20,13,24...There is nothing special between numbers 0 and 10.
//
// Let's start with the number 10 and derive the sequence. 10 has digits 1 and 0. The next possible number that does not have a 1 or a 0 is 22. All other numbers between 10 and 22 have a 1 or a 0.
//
// From 22, the next number that does not have a 2 is 11. Note that 30 is also a possibility because it is the next higher number that does not have a 2, but we must select the lowest number that fits and is not already in the sequence.
//
// From 11, the next lowest number that does not have a 1 is 20.
//
// From 20, the next lowest number that does not have a 2 or a 0 is 13, then 24 , then 15 and so on.
//
// Once a number appers in the series, it cannot appear again.
//
// You will be given an index number and your task will be return the element at that position. See test cases for more examples.
//
// Note that the test range is n <= 500.

/////////////

// input: number representing index
// output: number which is element found at given index

// RULES
// create a series of unique numbers starting at 0 where the number that follows is the lowest possible number that does not contain any digits of previous number AND is not already part of series
// input is the index for which i want to retrieve value of from series
// output is the value found at that index
// input number is up <= 500
// assume input is greater than or equal to 0
// series begins with 0,1,2,3,4,5,6,7,8,9,10,22,11,20,13,24...

// ALGORITHM
// create an array to hold used numbers
// create a variable for currentNumber and initialize to 0
// push currentNumber into used numbers array
// create a loop
//   convert last element in array to a string and then split into an array of digits --> String(currentNumber).split('');
//   if currentNumber is not already in array and currentNumber does not include either of the digits in the array of digits
//      push currentNumber to array of used numbers
//      increase index by 1
//   increase currentNumber by 1
// repeat steps until index === input number
// then return last value in array


function findNum(number) {

}

function numberExcludesDigits(number, digits) {
  return !(digits.some(digit => String(number).includes(digit)));
}

// console.log(findNum(0));          // 0
// console.log(findNum(1));          // 1
// console.log(findNum(5));          // 5
console.log(findNum(11));         // 22
// console.log(findNum(100));        // 103
// console.log(findNum(500));        // 476
