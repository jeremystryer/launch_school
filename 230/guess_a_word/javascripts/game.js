document.addEventListener('DOMContentLoaded', () => {
  let message = document.getElementById('message');
  let spaces = document.getElementById('spaces');
  let replay = document.getElementById('replay');

  let randomWord = function() {
    let words = ['APPLE', 'BANANA', 'ORANGE', 'PEAR'];

    return function() {
      let randomIdx = Math.floor(Math.random() * words.length);
      selectedWord = words[randomIdx];
      words.splice(randomIdx, 1);
      return selectedWord;
    };
  }();

  function Game() {
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      return this;
    }
    this.word = this.word.split("");
    this.letters_guessed = [];
    this.wrongGuesses = 0;
    this.maxWrongGuesses = 6;
    this.init();
  }

  Game.prototype = {
    createBlanksForLetters: function() {
      for (let count = 1; count <= this.word.length; count += 1) {
        let span = document.createElement('span');
        spaces.append(span);
      }
    },
    displayMessage: function(msg) {
      message.innerText = msg;
    },
    init: function() {
      this.createBlanksForLetters();
    }
  }

  let game = new Game();

  document.addEventListener('keyup', function acceptInput(event) {
    const VALUE = getInputValue(event);

    if (invalidInput(VALUE) || usedLetter(VALUE)) return;
    recordGuessedLetter(VALUE);

    if (incorrectGuess(VALUE)) {
      incrementWrongCount();
      dropApple();

      if (game.wrongGuesses === game.maxWrongGuesses) {
        document.removeEventListener('keyup', acceptInput);
        replay.innerText = 'Play again?';
      }
    } else {
      fillInSpaces(VALUE);
    }

    if (wonGame()) {
      document.removeEventListener('keyup', acceptInput);
      replay.innerText = 'Play again?';
    }
  });

  replay.addEventListener('click', event => {
    event.preventDefault();
    game = new Game();
  });

  // HELPER FUNCTIONS

  function dropApple() {
    let apples = document.getElementById('apples');

    if ([...apples.classList].includes("guess_1")) {
      apples.classList.remove("guess_1");
      apples.classList.add("guess_2");
    } else if ([...apples.classList].includes("guess_2")) {
      apples.classList.remove("guess_2");
      apples.classList.add("guess_3");
    } else if ([...apples.classList].includes("guess_3")) {
      apples.classList.remove("guess_3");
      apples.classList.add("guess_4");
    } else if ([...apples.classList].includes("guess_4")) {
      apples.classList.remove("guess_4");
      apples.classList.add("guess_5");
    } else if ([...apples.classList].includes("guess_5")) {
      apples.classList.remove("guess_5");
      apples.classList.add("guess_6");
    } else {
      apples.classList.add("guess_1");
    }
  }

  function recordGuessedLetter(entry) {
    function addLetterToLettersGuessedCollection() {
      game.letters_guessed.push(entry.toUpperCase());
    }

    function showGuessedLetter() {
      let span = document.createElement('span');
      let guesses = document.getElementById('guesses');
      span.innerText = entry;
      guesses.insertAdjacentElement('beforeend', span);
    }

    addLetterToLettersGuessedCollection();
    showGuessedLetter();
  }

  function wonGame() {
    let lines = spaces.querySelectorAll('span');
    return [...lines].every(line => line.innerText != "");
  }

  function fillInSpaces(entry) {
    // modify spaces variable so that separate lines variable where i isolate spans from h2 element is not needed

    let lines = spaces.querySelectorAll('span');
    let matchingLettersIndices = findMatchingLetters(entry);

    // populate spaces with entry at indices listed in matchingLettersIndices array

    matchingLettersIndices.forEach(index => {
      // modify so that spaces variable can be used instead of lines
      [...lines][index].innerText = entry;
    });
  }

  function findMatchingLetters(entry) {
    return game.word.reduce(function(acc, currentValue, index) {
      if (currentValue === entry) {
        acc.push(index);
      }

      return acc;
    }, []);
  }

  function invalidInput(entry) {
    const UNACCEPTABLE_INPUT_REGEX = /[^a-z]/i;
    return UNACCEPTABLE_INPUT_REGEX.test(entry);
  }

  function usedLetter(entry) {
    entry = entry.toUpperCase();
    return game.letters_guessed.includes(entry);
  }

  function getInputValue(entry) {
    let key = 'which' in event ? event.which : event.keyCode;
    return String.fromCharCode(key);
  }

  function incorrectGuess(entry) {
    return !game.word.includes(entry.toUpperCase());
  }

  function incrementWrongCount() {
    game.wrongGuesses += 1;
  }
});
