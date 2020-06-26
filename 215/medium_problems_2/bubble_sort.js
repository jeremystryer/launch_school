// 'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.
//
// A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.
//
// 6	2	7	1	4	Start: compare 6 > 2? Yes
// 2	6	7	1	4	Swap
// 2	6	7	1	4	6 > 7? No (no swap)
// 2	6	7	1	4	7 > 1? Yes
// 2	6	1	7	4	Swap
// 2	6	1	7	4	7 > 4? Yes
// 2	6	1	4	7	Swap
// 2	6	1	4	7	2 > 6? No
// 2	6	1	4	7	6 > 1? Yes
// 2	1	6	4	7	Swap
// 2	1	6	4	7	6 > 4? Yes
// 2	1	4	6	7	Swap
// 2	1	4	6	7	6 > 7? No
// 2	1	4	6	7	2 > 1? Yes
// 1	2	4	6	7	Swap
// 1	2	4	6	7	2 > 4? No
// 1	2	4	6	7	4 > 6? No
// 1	2	4	6	7	6 > 7? No
// 1	2	4	6	7	1 > 2? No
// 1	2	4	6	7	2 > 4? No
// 1	2	4	6	7	4 > 6? No
// 1	2	4	6	7	6 > 7? No
// 1	2	4	6	7	No swaps; all done; sorted
// We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.
//
// For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.
//
// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.


// input: unsorted array
// output: sorted array --> sorted in ascending order

// array elements will be numbers or strings, so can compare with < or >
// iterate through the array
// compare first element with second element
// if first element is greater than second element, switch place
// continue with second and third elements
// if second is greater than third element, switch place
// continue with third and fourth elements
// if third is greater than fourth element, switch place
// after completing iteration, start iterating again from beginning of array
// if no element is greater than following element (i.e. no places are switched), then return the array as is
// otherwise, repeat iterating process and switching places

// toggle variable called swap set to false
// forEach through array with element AND index as parameters
// let nextElement = array[index + 1];
// if (element > nextElement)
//  save nextElement into temp variable (tempNextElement)
//  save element into temp variable (tempElement)
//  element = tempNextElement
//  array[index + 1] = element
//  set swap var to true
// after iterating through all elements
//  if swap is true then set swap to false and repeat iterating from beginning (index[0])
//  if swap is false, then return array

function bubbleSort(array) {
  let swap = false;
  let index = 0;

  while (index < array.length - 1) {
    if (array[index] > array[index + 1]) {
      swap = true;
      [ array[index], array[index + 1]] = [ array[index + 1], array[index] ];
    }

    index += 1;
  }

  if (swap) bubbleSort(array);
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]


const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
//
const array4 = ['d', 'a', 'c', 'b'];
bubbleSort(array4);
console.log(array4);    // ['a', 'b', 'c', 'd']
