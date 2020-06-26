// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

// input: number and a digit that represents digit in number to be rotated
// output: number with relevant digit rotated

// given numberSequence and rotater
// using rotater, find relevant digit from numberSequence to be rotated
// rotater indicates which digit based on counting starting at furthest left
// digit to be rotated gets removed from current place and appended to end of numberSequence
// return the new number with relevant digit relocated

// ALGORITHM
// given numberSequence
// let numberSequenceArr = String(numberSequence).split('')
// let numberToRotateIndex = numberSequenceArray.length - rotater
// numberSequenceArr.push(numberSequnenceArray[numberToRotateIndex]
// numberSequenceArr.splice(numberToRotateIndex, 1)
// numberSequenceArr.join('') and convert to Number

function rotateRightmostDigits(numberSequence, rotater) {
  let numberSequenceArr = String(numberSequence).split('');
  let numberToRotateIndex = numberSequenceArr.length - rotater;
  numberSequenceArr.push(numberSequenceArr[numberToRotateIndex]);
  numberSequenceArr.splice(numberToRotateIndex, 1);
  return Number(numberSequenceArr.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
