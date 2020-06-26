// A triangle is classified as follows:
//
// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.
//
// Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.
//
// You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

/////////////////////
// assume always 3 arguments
// assume argument is always greater than or equal to 0

// input: 3 numbers >= 0
// output: string with value of 'right', 'acute', 'obtuse', or 'invalid'

// invalid triangle
//  input number === 0
//  sum of 3 input numbers !== 180

// right
//  1 input is 90
// acute
//  all 3 inputs are each < 90
// obtuse
//  1 input > 90

// given 3 numbers
// return invalid if input number is invalid
//    is an input number === 0?
//    is sum of 3 input numnbers !== 180?
// iterate through numbers
// if a number === 90, then right
// if a number > 90, then obtuse
// if a number < 90, then acute

// start with 3 numbers
// create array of [angle1, angle2, angle3]
// helper invalid function - using some function
//   angle === 0 ?
// another helper invalid function - function reduce
//  angles.reduce((total, angle) => total += angle)
// if either helper function returns true, then return invalid from main function
// main function - for loop
//  if a number === 90, then return right
//  if a number > 90, then return obtuse
//  if a number < 90, then return acute

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (checkIfAngleIsZero(angles) || checkIfAnglesSumIs180(angles)) {
    return 'invalid';
  }

  angles.sort((a, b) => b - a)

  for (let index = 0; index < angles.length; index += 1) {
    let angle = angles[index];

    if (angle === 90) return 'right';
    if (angle > 90) return 'obtuse';
    if (angle < 90) return 'acute';
  }
}

function checkIfAngleIsZero(angles) {
  return angles.some(angle => angle === 0);
}

function checkIfAnglesSumIs180(angles) {
  let sum = angles.reduce((total, angle) => total += angle);
  return sum !== 180;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(80, 80, 80));       // "invalid"
