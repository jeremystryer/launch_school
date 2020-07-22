// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// input: odd integer n >= 7
// output: logs 8-pointed star in an nxn grid (return undefined)

// n is odd integer >= 7
// n is number of rows and number of columns
// middle row consists of n stars and 0 spaces
// all other rows consist of 3 stars and (n - 3) spaces
// distribution of stars and spaces change up to middle line and then change in reverse order after middle line

// PATTERN
// (n - 3) / 2 = numberOfSpaces
// 1) *, numberOfSpaces ' ', *, numberOfSpaces ' ', *
// 2) ' ', *, numberOfSpaces -= 1 ' ', *, numberOfSpaces - 1 ' ', *
// 3) '  ', *, numberOfSpaces -= 1 ' ', *, numberOfSpaces - 1 ' ', *

// 1) initialize an empty array
// 2) get the starting point for number of spaces between stars --> (n - 3) / 2
// 3) startingSpaces = 0
// 4) push the line into the array --> startingSpaces + * + numberOfSpacesBetweenStars + * numberOfSpacesBetweenStars + *
// 5) startingSpaces += 1, numberOfSpacesBetweenStars -= 1
// 6) repeat line 4 - 5
// 7) when numberOfSpacesBetweenStars === 0, save value of startingSpaces to another var startingSpacesForBottomHalf and set startingSpaces to 0
// 8) push a line of n stars into array
// 9) push the line into the array --> startingSpacesForBottomHalf + * + numberOfSpacesBetweenStars + * numberOfSpacesBetweenStars + *
// 10) startingSpacesForBottomHalf -= 1, numberOfSpacesBetweenStars += 1
// 11) continue until startingSpacesForBottomHalf === 0

// have a separate function that creates stars repeated x times and spaces repeated y times

function star(n) {
  let result = [];
  let numberOfSpacesBetweenStars = (n - 3) / 2;
  let numberOfStartingSpaces = 0;
  let startingSpaces;
  let spacesBetweenStars;

  while (numberOfSpacesBetweenStars >= 0) {
    startingSpaces = repeatChar(' ', numberOfStartingSpaces);
    spacesBetweenStars = repeatChar(' ', numberOfSpacesBetweenStars);
    console.log(startingSpaces + '*' + spacesBetweenStars + '*' + spacesBetweenStars + '*');
    numberOfStartingSpaces += 1;
    numberOfSpacesBetweenStars -= 1;
  }

  console.log(repeatChar('*', n));
  numberOfStartingSpaces -= 1;
  numberOfSpacesBetweenStars = 0;

  while (numberOfSpacesBetweenStars <= (n - 3) / 2) {
    startingSpaces = repeatChar(' ', numberOfStartingSpaces);
    spacesBetweenStars = repeatChar(' ', numberOfSpacesBetweenStars);
    console.log(startingSpaces + '*' + spacesBetweenStars + '*' + spacesBetweenStars + '*');
    numberOfStartingSpaces -= 1;
    numberOfSpacesBetweenStars += 1;
  }
}

function repeatChar(char, times) {
  let str = '';

  for (let i = 0; i < times; i += 1) {
    str += char;
  }

  return str;
}

star(7);
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(11);
// *    *    *
//  *   *   *
//   *  *  *
//    * * *
//     ***
// ***********
//     ***
//    * * *
//   *  *  *
//  *   *   *
// *    *    *
