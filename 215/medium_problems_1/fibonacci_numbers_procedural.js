// In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.
//
// Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.
//
// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

function fibonacci(nth) {
  if (nth <= 2) return 1;

  let firstValue = 1;
  let secondValue = 1;
  let sum;
  let counter = 3;

  while (counter <= nth) {
    sum = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = sum;
    counter += 1;
  }

  return sum;
}

console.log(fibonacci(4));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

// Note that JavaScript can accurately compute intergers up to 16 digits long; this means that fibbonacci(78) is the largest Fibbonacci number that you can accurately compute with simple operations in JavaScript.
