// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.
//
// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

function lightsOn(numberOfSwitches) {
  const SWITCHES = createSwitches(numberOfSwitches);
  let multipleOf = 1;

  while (multipleOf <= numberOfSwitches) {
    SWITCHES.forEach(function (value, index) {
      if ((index + 1) % multipleOf === 0) {
        SWITCHES[index] = toggle(value);
      }
    });

    multipleOf += 1;
  }

  const SWITCHES_ON = [];

  SWITCHES.forEach(function (value, index) {
    if (value === 1) SWITCHES_ON.push(index + 1)
  });

  return SWITCHES_ON;
}

function createSwitches(numberOfSwitches) {
  let switches = [];
  for (counter = 1; counter <= numberOfSwitches; counter += 1) {
    switches.push(0);
  }
  return switches;
}

function toggle(value) {
  return value === 0 ? 1 : 0;
}



console.log(lightsOn(1));        // [1]
console.log(lightsOn(2));        // [1]
console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
