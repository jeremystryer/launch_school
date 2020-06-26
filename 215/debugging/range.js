// We are assigned the task to implement a range function that returns an array of integers beginning and ending with specified start and end numbers. When only a single argument is provided, that argument should be used as the ending number and the starting number should be 0.
//
// Check our code below. Why do the the example invocations fail with an error saying Maximum call stack size exceeded? Can you fix the code, so it runs without error and satisfies the requirements?

function range(start, end) {
    if (!end) {
      start = 0;
      end = start;
    }

  const range = [];
  let element;
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));
console.log(range(-5, 0));

// The range function defined on lines 15 - 17 overrides the range function defined on lines 5 - 10. When the range function is invoked on line 21, the second argument is disregarded (since JavaScript functions
// will not throw an error when more arguments are passed into the function than the function has paramters defined for). The number value 10 is assigned to the parameter end and then on line 16 range is called
// recursively as range(0, 10). This creates a stack size issue.

// This can be fixed by deleting the second range function and adding an if statement to the first range function to deal with only one argument

// function range(start, end) {
//   if (end === undefined) {
//     end = start;
//     start = 0;
//   }
//
//   const range = [];
//   let element;
//   for (element = start; element <= end; element++) {
//     range.push(element);
//   }
//
//   return range;
// }


// FURTHER EXPLORATION

// There are two reasons why the following is not a working solution. Can you spot them?

// function range(start, end) {
//   if (!end) {
//     start = 0;
//     end = start;
//   }
//
//   // ...
// }

// 1) !end will evaluate to true when end is 0 (since 0 is falsy). So if you want a range of -5 to 0, the function will return an array of [0] because of what is explained in the second point below.
// 2) Since 0 is assigned to start and THEN end is assigned the value of start (which is now 0), both start and end will have values of 0s, returning an array of [0] from the function.
