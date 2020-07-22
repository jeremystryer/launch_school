/*
Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.
*/

/*
input: 2 sorted arrays
output: 1 array with elements from 2 inputs arrays merged and sorted

rules:
assume inputs are arrays
array can contain 0 or more values
arrays can be of different lengths
assume elements are numbers
sorted in ascending order
function cannot sort the output array -> output array must be built one element at a time

algorithm:
create a result array
create two index variables, one for each array, initialized to 0
iterate through both arrays simultaneously
  condition for iteration is until longer of the 2 arrays has been iterated through
compare elements of both arrays at its index
if element at index of either array is undefined, then push element from other array
if element from 1st array is less, then push element to result array
  increment index for 1st array
if element from 2nd array is less, then push element to result array
  increment index for 2nd array
if elements are equal, then push element from 1st array to result array
  increment index for 1st array
*/

function merge(arr1, arr2) {
  let result = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1Index < arr1.length || arr2Index < arr2.length) {
    let arr1Element = arr1[arr1Index];
    let arr2Element = arr2[arr2Index];

    if (arr1Element === undefined) {
      result.push(arr2Element);
      arr2Index += 1;
      continue;
    } else if (arr2Element === undefined) {
      result.push(arr1Element)
      arr1Index += 1;
      continue;
    }

    if (arr1Element < arr2Element) {
      result.push(arr1Element);
      arr1Index += 1;
    } else {
      result.push(arr2Element);
      arr2Index += 1;
    }
  }

  return result;
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([1, 1], [2, 2, 3]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([1, 2, 9], [5, 6, 8]));      // [1, 2, 5, 6, 8, 9]
