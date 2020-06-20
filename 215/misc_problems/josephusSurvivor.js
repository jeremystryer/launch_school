
// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// josephus_survivor(7,3) => means 7 people in a circle;
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!

// input is two numbers
//    first number is total number of survivors
//    second number is the incrementer for eliminating each person
// output is a single number in the range of 1...number1

// given (7, 3)
// => [1,2,3,4,5,6,7]
// starting at first element, count up by 3 (input 2)
//    so first iteration would return number 3
//    for number that is returned, eliminate it
// once incrementing takes me past the length of the array, counting counting
//  from beginning of array
// repeating these steps until one element remains in array

// input: survivors, incrementer
// create an array of 1 up through survivors
//    for loop cycle through 1 up to number of survivors, generating array

// create an array that contains elements 1 - arg1
// while we have more than 1 element
  // walk k elements through the array
  // on the kth element
    // delete that element
// return the last element standing

// initialize empty array, for loop from 1 up to and incl. arg1
//    push each num to empty array

// while (arr.length > 1) [1,2,3,4,5,6,7]
// index = 0
// incrementer is 3 from input
// have a counter = 1
// for every iteration, add 1 to counter
// when counter === incrementer, splice element
// when index === arr length, index to 0
// return arr[0]


function josephusSurvivor(survivors, incrementer) {
  let listOfSurvivors = createListOfSurvivors(survivors);
  let index = 0;
  let countUpToIncrementer = 1;

  while (listOfSurvivors.length > 1) {

    if (countUpToIncrementer === incrementer) {
      listOfSurvivors.splice(index, 1);
      countUpToIncrementer = 0;
      index -= 1;
    }

    index += 1;
    countUpToIncrementer += 1;

    if (index >= listOfSurvivors.length) index = 0;
  }

  return listOfSurvivors[0];
}

function createListOfSurvivors(total) {
  let listOfSurvivors = [];

  for (let count = 1; count <= total; count += 1) {
    listOfSurvivors.push(count);
  }

  return listOfSurvivors;
}



console.log(josephusSurvivor(7,3)); // 4
console.log(josephusSurvivor(11,19)); // 10
console.log(josephusSurvivor(1,300)); // 1
console.log(josephusSurvivor(14,2)); // 13
