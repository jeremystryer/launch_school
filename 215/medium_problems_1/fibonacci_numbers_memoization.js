// Our recursive fibonacci function from the previous exercise is not very efficient. It starts slowing down with an nth argument value as low as 35. One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.
//
// Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).
//
// For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

function fibonacci(nth) {
  let lastFib;

  if (nth <= 2) {
    return 1;
  } else {
    return fibonacci(nth - 1) + fibonacci(nth - 2);
  }
}

console.log(fibonacci(1));       // 1  --> (1)
console.log(fibonacci(2));       // 1  --> (1, 1)
console.log(fibonacci(3));       // 2  --> (1, 1, 2)
console.log(fibonacci(4));       // 3  --> (1, 1, 2, 3)
console.log(fibonacci(5));       // 5  --> (1, 1, 2, 3, 5)
console.log(fibonacci(12));      // 144 --> (1, 1, 2, 3, 5, 8, 13, 21...)
console.log(fibonacci(20));      // 6765
