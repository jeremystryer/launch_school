// A triangle is classified as follows:
//
// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.
//
// Write a function that takes the lengths of the three sides of a ctriangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
//
// equilateral: 3 equal sides
// isosceles: two equal sides, 1 unequal
// scalene : 3 unequal sides
// no side can be
// sum of 2 shortest sides > long side
//
// input: 3 integers >= 0
// output: a string of value equilateral, isosceles, scalene, or invalid
//
// check if any input is 0 --> guard clause, return invalid if any input is 0
// check which inputs (if any) are equal
//    3 inputs are equal?
//    2 inputs are equal?
//      is their sum greater than 3rd input?
//    no inputs are equal?
//      is the sum of two smaller inputs greater than 3rd input?

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];
  if (sides.includes(0)) return 'invalid';
  let sortedSides = sortSides(sides);

  if (sortedSides.every(side => side === sides[0])) return 'equilateral';
  if ((sortedSides[0] === sortedSides[1] || sortedSides[1] === sortedSides[2]) && sortedSides[0] + sortedSides[1] > sortedSides[2]) {
    return 'isosceles';
  } else if (sortedSides[0] + sortedSides[1] > sortedSides[2]) {
    return 'scalene';
  } else {
    return 'invalid';
  }
}

function sortSides(sides) {
  let sortedSides = [];
  sortedSides.push(sides[0])

  for (let index = 1; index < sides.length; index += 1) {
    if (sides[index] >= sortedSides[sortedSides.length - 1]) {
      sortedSides.push(sides[index]);
    } else {
      sortedSides.unshift(sides[index]);
    }
  }

  return sortedSides;
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 1.5, 3));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(4, 9, 4));        // "invalid"
console.log(triangle(4, 7, 4));        // "isosceles"
console.log(triangle(4, 4, 10));        // "invalid"
