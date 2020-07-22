// Write a function that takes an array containing objects as
// elements and returns an array with the values of the objects
// for the given keys.

// input: array containing 1 or more objects, an array containing 1 or more strings that are search terms for object keys
// output: array containing values from objects whose keys match search terms
// values in objects can be ANY DATA TYPE (including UNDEFINED)
// assume that objects contain the same keys
// returned array will contain subarrays if there is more than one matching key per object

// ALGORITHM
// create an empty array
// iterate through the arrayOfObjects (each element is an object)
//  create a subarr container for matches
//  create an array of keys from the object
//  iterate through the searchKeys
//  if the objectKeys array includes the search key, push the value of that key to the subarray
// if the subarray length is greater than 0, push the subarray to the array

// iterate through the array, checking all subarrays
//  if all subarrays have a length of 1, then flatten the arr

// return the array

function pluck(arrayOfObjects, searchKeys) {
  let arr = [];

  arrayOfObjects.forEach(function (object) {
    let subarr = [];
    let objectKeys = Object.keys(object);

    searchKeys.forEach(function (searchKey) {
      if (objectKeys.includes(searchKey)) {
        subarr.push(object[searchKey]);
      }
    });

    if (subarr.length > 0) {
      arr.push(subarr);
    }
  });

  return arr.every(subarr => subarr.length === 1) ? arr.flat() : arr;
}


console.log(pluck([{id: 1, username: 'foo', role: 'admin'},
         {id: 2, username: 'bar', role: 'admin'},
         {id: 3, username: 'baz', role: 'developer'}],
        ['id', 'role']));
// [[1, 'admin'], [2, 'admin'], [3, 'developer']]

console.log(pluck([{id: 1, username: 'foo', role: 'admin'},
         {id: 2, username: 'bar', role: 'admin'},
         {id: 3, username: 'baz', role: 'developer'}],
        ['username']));
// ['foo', 'bar', 'baz'];

console.log(pluck([{id: undefined, username: 'foo', role: 'admin'},
         {id: true, username: 'bar', role: 'admin'},
         {id: [1, 2, 3], username: 'baz', role: 'developer'}],
        ['id', 'password']));
// undefined, true, [1, 2, 3] ]
//
console.log(pluck([{id: 1, username: 'foo', role: 'admin'},
         {id: 2, username: 'bar', role: 'admin'},
         {id: 3, username: 'baz', role: 'developer'}],
        ['password']));
// []
