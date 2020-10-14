document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let paragraph = document.querySelector('p');
  let link = document.querySelector('a');
  let guessButton = document.querySelector("input[type=submit]");
  let answer;
  let guesses;

  function newGame() {
    guessButton.disabled = false;
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
  }

  function invalidInput(input) {
    return !input.match(/^[1-9]+[0-9]*$/);
  }

  form.addEventListener('submit', event => {
    let guess;
    let message;

    event.preventDefault();

    if (invalidInput(input.value)) {
      message = "Enter a valid number (1 - 100)";
      paragraph.textContent = message;
      return;
    }

    guess = parseInt(input.value, 10);
    guesses += 1;

    if (guess === answer) {
      message = `You guessed it! It took you ${guesses} guesses.`;
      guessButton.disabled = true;
    } else if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else {
      message = `My number is higher than ${guess}`;
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });

  newGame();
});
