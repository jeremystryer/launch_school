// Write a function that takes an array containing objects as
// elements and returns an array with the values of the objects
// for the given keys.

// input: 2 arrays, first array contains objects and second array contains strings that are keys of objects
// output: array containing values of matching keys

// RULES
// if more than 1 key matches per object, then corresponding values should be in subarrays and returned array will be nested array
// otherwise, single array containing only string keys
// objects in input array always have same keys
// either array (array of objects or array of keys) can be empty --> returns an empty array in either case
// elements from keys array might not match any key in objects --> no value is returned for those "keys"
// assume input is always 2 arrays
// values of keys in object can be any data type

// ALGORITHM

function pluck(objects, keys) {
  let result = [];
  let match;

  objects.forEach(function (object) {
    let subarr = [];
    match = 0;

    keys.forEach(function (key) {
      if (object.hasOwnProperty(key)) {
        match += 1;
      }
    });

    if (match > 1) {
      keys.forEach(function (key) {
        if (object.hasOwnProperty(key)) {
          subarr.push(object[key]);
        }
      });
      result.push(subarr);
    } else {
      keys.forEach(function (key) {
        if (object.hasOwnProperty(key)) {
          result.push(object[key]);
        }
      });
    }
  });

  return result;
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

console.log(pluck([], ['username']));
// []

console.log(pluck([{id: 1, username: 'foo', role: 'admin'},
         {id: 2, username: 'bar', role: 'admin'},
         {id: 3, username: 'baz', role: 'developer'}],
        []));
// []

console.log(pluck([{id: 1, username: 'foo', role: 'admin'},
         {id: 2, username: 'bar', role: 'admin'},
         {id: 3, username: 'baz', role: 'developer'}],
        ['password']));
// []

console.log(pluck([{id: 1, username: 'foo', role: 'admin'},
         {id: 2, username: 'bar', role: 'admin'},
         {id: 3, username: 'baz', role: 'developer'}],
        ['username', 'password']));
// ['foo', 'bar', 'baz'];

console.log(pluck([{id: 1, username: ['foo', 'bar'], role: 'admin'},
         {id: 2, username: ['bar', 'baz'], role: 'admin'},
         {id: 3, username: 'baz', role: 'developer'}],
        ['username']));
// [ ['foo', 'bar'], ['bar', 'baz'], 'baz'];
