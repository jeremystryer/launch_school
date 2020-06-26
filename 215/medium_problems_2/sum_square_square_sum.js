// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

// input: number >= 0
// output: number

// given input number n
// get a collection of all numbers from 1 through n

// add up all values from 1 up to n
// square the sum of all of these values

// get square of each number up to n
// add up all these squared numbers

// return first sum - second sum

// given input number n
// create an array (numberSequence) of values from 1 up to n --> function with for loop (generateNumberSequence)
// reduce this array to one value --> add all numbers together and then square them -- save into variable squareOfSum
// map over numberSequence array and square each number
// reduce the returned array to the sum total and save into variable sumOfSquares
// return squareOfSum - sumOfSquares

function sumSquareDifference(n) {
  if (n === 0) return 0;
  const SUM_NUMBERS = (sum, number) => sum += number;
  let numberSequence = generateNumberSequence(n);
  let squareOfSum = numberSequence.reduce(SUM_NUMBERS) ** 2;
  let sumOfSquares = numberSequence.map(number => number ** 2).reduce(SUM_NUMBERS);
  return squareOfSum - sumOfSquares;
}

function generateNumberSequence(n) {
  let sequence = [];
  for (let counter = 1; counter <= n; counter += 1) {
    sequence.push(counter);
  }
  return sequence;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
console.log(sumSquareDifference(0));      // 0
