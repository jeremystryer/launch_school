/*
3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6
is represented by the following array of arrays:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
An array of arrays is sometimes called a "nested array" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array"

To access an element in the matrix, you can use bracket notation twice (such as array[][]), and include both the row index and column index within the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.

The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

1  4  3
5  7  9
8  2  6
Write a function that takes an array of arrays representing a 3x3 matrix, and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

*/

/*
input: a 2 dimensional array, with each subarray containing three elements
output: a new 2 dimensional array, with each subarray containing three elements

rules:
  output is array:
    1st subarray contains elements at index 0 from input array
    2nd subarray contains elements at index 1 from input array
    3rd subarray contains elements at index 2 from input array
  elements can be any data type of any value
  no need to validate input

algorithm:
create an array with the same number of subarrays as the input array
iterate through the input array (each element is a subarray)
  iterate through the subarray (each element is a number), tracking index
    push number to new array at index (i.e. pushing number to subarray for a given index)
    first number is pushed to subarray of new array at index 0
    second number is pushed to subarray of new array at index 1
    third number is pushed to subarray of new array at index 2
    ...continues iteration for next subarray, starting at index 0
return new array
*/

// Function 1
function transpose(someMatrix) {
  let newSubarr0 = [];
  let newSubarr1 = [];
  let newSubarr2 = [];

  someMatrix.forEach(function (subarr) {
    newSubarr0.push(subarr[0]);
    newSubarr1.push(subarr[1]);
    newSubarr2.push(subarr[2])
  });

  return [newSubarr0, newSubarr1, newSubarr2];
}

// Function 2
function transpose(someMatrix) {
  let newArray = createNewArray(someMatrix[0].length);

  someMatrix.forEach(function (subarr) {
    let counter = 0;
    while (counter < subarr.length) {
      newArray[counter].push(subarr[counter]);
      console.log(counter);
      counter += 1;
    }
  });

  return newArray;
}

// Function 3
function transpose(someMatrix) {
  let newMatrix = createNewArray(someMatrix[0].length);

  someMatrix.forEach(function (subarr) {
    for (let counter = 0; counter < subarr.length; counter += 1) {
      newMatrix[counter].push(subarr[counter]);
    }
  });

  return newMatrix;
}

// Function 4
function transpose(someMatrix) {
  let newMatrix = createNewArray(someMatrix[0].length);

  someMatrix.forEach(function (subarr) {
    subarr.forEach(function (elem, index) {
      newMatrix[index].push(elem);
    });
  });

  return newMatrix;
}

// Helper function used by last 3 functions
function createNewArray(length) {
  let arr = [];

  for (let i = 0; i < length; i += 1) {
    arr.push([]);
  }

  return arr;
}


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
