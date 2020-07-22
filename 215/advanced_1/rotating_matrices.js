/*
As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

3  4  1
9  7  5
6  2  8

A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

3  4  1
9  7  5

its 90-degree rotation is:

9  3
7  4
5  1

Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

*/

/*
  input: 2 dimensional array
  output: 2 dimensional array

  rules:
  input is 2 dimensional array (no need to validate input)
  within input array is n subarrays
  rotating 90 degrees involves:
    a 2 dimensional array will be returned
    this 2 dimensional array will have as many subarrays as each subarray of input array has elements
    this 2 dimensional array will have x number of elements per subarray - determined by total number of elements / number of returned subarrays (which is number of elements in input subarrays)
      -i.e. if input array contains 4 subarrays containing 3 elements each, returned array will have 3 subarrays containing 4 elements
    take the element at index 0 of last subarray and put it at the index 0 of 1st returned subarray
    element element at index 0 of second to last subarray gets put at index 1 of 1st returned subarray
    continue for all elements at index 0 of subarrays
    then continue with all elements at index 1 of subarrays, always starting with last subarray and working back to 1st subarray

  algorithm:
  check length of 1st subrray of input array and save to length var
  create a new array which will contain length number of subarrays
  reverse the order of subarrays (arr.reverse())
  call transpose function
  reverse array back
*/

// function rotate90(matrix) {
//   let reversedArray = matrix.reverse();
//   let rotatedArray = transpose(reversedArray);
//   matrix.reverse();
//   return rotatedArray;
// }

// function rotate90(matrix) {
//   let matrixCopy = matrix.slice();
//   return transpose(matrixCopy.reverse());
// }

function transpose(someMatrix) {
  let newMatrix = createNewArray(someMatrix[0].length);

  someMatrix.forEach(function (subarr) {
    subarr.forEach(function (elem, index) {
      newMatrix[index].push(elem);
    });
  });

  return newMatrix;
}

function createNewArray(length) {
  let arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push([]);
  }

  return arr;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
console.log(matrix1);         // [ [1, 5, 8], [4, 7, 2], [3, 9, 6] ]
console.log(matrix2);         // [ [3, 7, 4, 2], [5, 1, 0, 8] ]
