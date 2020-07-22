// Run the following code. Why is every warning displayed twice? Change the code so that each warning is displayed only once, as intended.

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let i = 0; i < species.length; i++) {
  const thisSpecies = species[i];
  var newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

// Since var newSpecies isn't changed after being assigned to a value in one iteration, that value continues to be assigned to newSpecies during subsequent iterations until reassigned. Assign a falsey value to newSpecies at the end of the for block (could be an empty string or boolean false) in order to fix.

// Alternatively, use let instead of var on line 17 when declaring newSpecies. Since let has block scope (var has function scope), newSpecies will be assigned a value of undefined by default at the beginnning of each iteration.
