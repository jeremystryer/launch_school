// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

// Expect the output to change with each run due to the random execution times.

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(callbacks) {
  let callbacksArray = Array.prototype.slice.call(arguments);
  let maxTimeSeconds = callbacksArray.length * 2;
  let randomSelectedSecond;

  for (let i = 1; i <= callbacksArray.length * 2; i += 1) {
    setTimeout(function() {
     console.log(i);
    }, i * 1000);
  }

  callbacksArray.forEach(function(callback, index) {
    randomSelectedSecond = Math.floor(Math.random() * maxTimeSeconds);
    setTimeout(callback, randomSelectedSecond * 1000);
  });
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6
