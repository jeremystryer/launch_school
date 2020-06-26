// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.
//
// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

//////////////

// input: array
// output: NEW array with first element from input array moved to end of output array

// RULES
// if input is not array, return undefined
// if input is empty array, return empty array

// STRATEGY
// a couple special conditions to check on input array --> is it empty? is it an array? (maybe: does it contain 1 element?)
// make a copy of array
// add first element to end of array copy
// delete the first element of array copy from index 0

// ALGORITHM
// !Array.isArray(arr) --> return undefined
// if guard clause --> array.length === 0 then return undefined
// if guard clause --> array.length === 1 return array
// let arrCopy = arr;
// push element at arrCopy[0] into arrCopy
// arrCopy.splice(0, 1)
// return arrCopy

function rotateArray(arr) {
  if (!Array.isArray(arr)) return;

  const arrCopy = makeCopy(arr);
  arrCopy.push(arrCopy[0]);
  arrCopy.splice(0, 1);
  return arrCopy;
}

function makeCopy(array) {
  return array.map(elem => elem);
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]

// single element in array
console.log(rotateArray(['a']));                    // ["a"]

// empty array returns empty array
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
