// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

// input: two-dimensional array, each inner subarray contains a string and integer
// output: array of strings

// RULES
// assume input is always two-dimensional array
// assume each subarray contains 2 values which are string and integer
// order of values in subarrays can be either [string, integer] or [integer, string]

// ALGORITHM
// 1) iterate through array and sort each subarray so that order is [string, integer]
// 2) iterate through properly sorted array
//  a) initialize an empty array
//  b) push string followed by a space to empty string
//  c) repeat times indicated by integer
//  d) for the last iteration, concatenate string without space
// 3) return array

function buyFruit(groceryList) {
  let sortedGroceryList = groceryList.map(function (items) {
    if (typeof(items[0]) === 'number') {
      return [items[0], items[1]] = [items[1], items[0]];
    } else {
      return [items[0], items[1]];
    }
  });

  let fruits = [];
  let counter = 0;

  sortedGroceryList.forEach(function (items) {
    while (counter < items[1]) {
      fruits.push(items[0]);
      counter += 1;
    }
    counter = 0;
  });

  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

console.log(buyFruit([['apple', 3], [1, 'orange'], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
