let sedan = makeCar(8);
sedan.accelerate();
console.log(sedan.speed); // 8

let coupe = makeCar(12);
coupe.accelerate();
console.log(coupe.speed); // 12

// Write a makeCar function that works as shown above.

// function makeCar(rate) {
//   return {
//     speed: 0,
//     rate: rate,
//     accelerate: function() {
//       this.speed += this.rate;
//     },
//   };
// }

// Use your new definition of makeCar to create a hatchback car whose rate of acceleration is 9 mph/s.

let hatchback = makeCar(9);

// Our application now needs to handle braking to slow down. Extend the code from problem 1 to handle specifying a braking rate for each car. Also, add a method that tells the car to apply the brakes for one second. It should work like this:

function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate,
    brakeRate,
    accelerate() {
      this.speed += this.accelRate;
    },
    brake() {
      this.speed -= brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      };
    }
  };
}

sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed); // 8
sedan.brake();
console.log(sedan.speed); // 2
sedan.brake();
console.log(sedan.speed); // 0
