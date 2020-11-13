/*
Given the HTML, write some JavaScript code that updates the options on one dropdown when the selection in the other dropdown changes. For instance, when the user chooses an option under Classifications, the items in the Animals dropdown should change accordingly. Use the lookup tables below to see which animals and classifications go together.

Selection Change with Filter1: Animal Classifications

Selection	Animals Options
Vertebrate	Bear, Turtle, Whale, Salmon, Ostrich
Warm-blooded	Bear, Whale, Ostrich
Cold-blooded	Salmon, Turtle
Mammal	Bear, Whale
Bird	Ostrich
Selection Change with Filter2: Animals

Selection	Animal Classifications Options
Bear	Vertebrate, Warm-blooded, Mammal
Turtle	Vertebrate, Cold-blooded
Whale	Vertebrate, Warm-blooded, Mammal
Salmon	Vertebrate, Cold-blooded
Ostrich	Vertebrate, Warm-blooded, Bird
When the user clicks the "Clear" button, the program should reset both dropdowns to their default values.
*/

// SOLUTION



// animalToClassification

document.addEventListener('DOMContentLoaded', () => {
  const classificationToAnimal =
    {
      'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
      'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
      'Cold-blooded': ['Salmon', 'Turtle'],
      'Mammal': ['Bear', 'Whale'],
      'Bird': ['Ostrich'],
    }

  const animalToClassification =
    {
      'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
      'Turtle':	['Vertebrate', 'Cold-blooded'],
      'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
      'Salmon':	['Vertebrate', 'Cold-blooded'],
      'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
    }

  let classifications = document.getElementById('animal-classifications');
  let selectedClassificationsArray;
  let animals = document.getElementById('animals');
  let selectedAnimalsArray;

  function reset() {
    let completeAnimalList = ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'];

    let completeClassificationList = ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'];

    while (animals.length > 0) {
      animals.firstElementChild.remove();
    }

    completeAnimalList.forEach(name => {
      let item = animals.appendChild(document.createElement('option'));
      item.value = name;
      item.innerHTML = name;
    });
  }

  classifications.addEventListener('change', event => {
    reset();
    let selectedClassification = event.target.value;
    if (selectedClassification === 'Classifications') {
      return;
    }

    for (let classification in classificationToAnimal) {
      if (classification === selectedClassification) {
        selectedAnimalsArray = classificationToAnimal[classification];
      }
    }

    let length = animals.children.length;
    let i = 0;

    for (let n = 0; n < length; n += 1) {
      let animal = animals.children[i];

      if (!selectedAnimalsArray.includes(animal.value)) {
        animal.remove();
      } else {
        i += 1;
      }
    }
  });
});
