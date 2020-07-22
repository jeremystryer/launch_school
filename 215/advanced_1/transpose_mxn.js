/*
In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

*/

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


console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
