// In these problems, we will be developing a factory function for objects representing countries.

// Consider the code below:

// let chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };
//
// let canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };
//
// let southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// Think about what is necessary and unnecessary in this code. Where is there duplication?
// We are creating three objects with identical properties. We can use an object factory to create these objects instead.

// function createCountry(name, continent) {
//   return {
//     name,
//     continent,
//     getDescription() {
//       return this.name + ' is located in ' + this.continent + '.';
//     },
//   };
// }

// We've decided that we want to track which countries we've visited, and which we haven't. Alter the factory function so that the object it returns includes a property visited with a value of false.

// function createCountry(name, continent) {
//   return {
//     name,
//     continent,
//     visited = false,
//     getDescription() {
//       return this.name + ' is located in ' + this.continent + '.';
//     },
//   };
// }

// This situation seems a bit problematic, though. Suppose we want to add a country that we've already visited. Alter the factory function to use an optional visited parameter with a default value of false.

function createCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    visitCountry() {
      this.visited = true;
    },
    getDescription() {
      let haveVisited;

      if (this.visited) {
        haveVisited = 'I have visited ' + this.name + '.'
      } else {
        haveVisited = 'I haven\'t visited ' + this.name + '.'
      }

      return this.name + ' is located in ' + this.continent + '.  ' + haveVisited;
    },
  };
}
