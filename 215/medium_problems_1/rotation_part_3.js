// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.
//
// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// RULES
// given a number
// output: rotated number
// rotate the number (move the first digit to the end of the number)
// hold the first digit of this new number in place and rotate the second digit (move it to end of number)
// hold the first 2 digits of this new number in place and rotate the the third digit
// continue process until reach final digit of number

// 735291 -> 352917 -> 3 29175 -> 32 1759 -> 321 597 -> 3215 -> 79 -> final: 321579

// input number
// let length = String(number).length
// let rotatedNumber = number;
// let n = 0
// let rotatedNumber = rotateRightmostDigits(rotatedNumber, length - n)
// n += 1 while n < length

function maxRotation(number) {
  let length = String(number).length;
  let rotatedNumber = number;
  let n = 0;

  while (n < length - 1) {
    rotatedNumber = rotateRightmostDigits(rotatedNumber, length - n);
    n += 1
  }

  return rotatedNumber;
}

function rotateRightmostDigits(numberSequence, rotater) {
  let numberSequenceArr = String(numberSequence).split('');
  let numberToRotateIndex = numberSequenceArr.length - rotater;
  numberSequenceArr.push(numberSequenceArr[numberToRotateIndex]);
  numberSequenceArr.splice(numberToRotateIndex, 1);
  return Number(numberSequenceArr.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
