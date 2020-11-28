document.addEventListener('DOMContentLoaded', () => {
  let message = document.getElementById('message');
  let spaces = document.getElementById('spaces');
  let replay = document.getElementById('replay');
  let guesses = document.getElementById('guesses');

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

    usedLetter: function usedLetter(entry) {
      entry = entry.toUpperCase();
      return this.letters_guessed.includes(entry);
    },

    recordGuessedLetter: function(entry) {
      this.addLetterToLettersGuessedCollection(entry);
      this.showGuessedLetter(entry);
    },

    addLetterToLettersGuessedCollection: function(entry) {
      this.letters_guessed.push(entry.toUpperCase());
    },

    showGuessedLetter: function(entry) {
      let span = document.createElement('span');

      span.innerText = entry;
      guesses.insertAdjacentElement('beforeend', span);
    },

    incorrectGuess: function(entry) {
      return !this.word.includes(entry.toUpperCase());
    },

    incrementWrongCount: function() {
      this.wrongGuesses += 1;
    },

   fillInSpaces: function(entry) {
    // modify spaces variable so that separate lines variable where i isolate spans from h2 element is not needed

    let lines = spaces.querySelectorAll('span');
    let matchingLettersIndices = this.findMatchingLetters(entry);

    // populate spaces with entry at indices listed in matchingLettersIndices array

    matchingLettersIndices.forEach(index => {
      // modify so that spaces variable can be used instead of lines
      [...lines][index].innerText = entry;
    });
  },

  dropApple: function() {
    let apples = document.getElementById('apples');

    apples.classList.remove(...apples.classList);
    apples.classList.add("guess_" + this.wrongGuesses);
  },

  findMatchingLetters: function(entry) {
    return this.word.reduce(function(acc, currentValue, index) {
      if (currentValue === entry) {
        acc.push(index);
      }

      return acc;
    }, []);
  },

  wonGame: function() {
    let lines = spaces.querySelectorAll('span');
    return [...lines].every(line => line.innerText != "");
  },

  processGuess: function(event) {
    const VALUE = this.getInputValue(event);

    if (this.invalidInput(VALUE) || this.usedLetter(VALUE)) return;
    this.recordGuessedLetter(VALUE);

    if (this.incorrectGuess(VALUE)) {
      this.incrementWrongCount();
      this.dropApple();

      if (this.wrongGuesses === this.maxWrongGuesses) {
        this.unbind();
        message.innerText = "You lost!";
        replay.innerText = "Play again?"
      }
    } else {
      this.fillInSpaces(VALUE);
    }

    if (this.wonGame()) {
      this.unbind();
      message.innerText = "You won!";
      replay.innerText = "Play again?"
    }
  },

  reset: function() {
    replay.innerText = '';
    message.innerText = '';
    apples.classList.remove(...apples.classList);

    [...spaces.children].forEach(child => {
      if (child.nodeName === 'SPAN') child.parentNode.removeChild(child);
    });

    [...guesses.children].forEach(child => {
      if (child.nodeName === 'SPAN') child.parentNode.removeChild(child);
    });
  },

  invalidInput: function(entry) {
    const UNACCEPTABLE_INPUT_REGEX = /[^a-z]/i;
    return UNACCEPTABLE_INPUT_REGEX.test(entry);
  },

  getInputValue: function(entry) {
    let key = 'which' in event ? event.which : event.keyCode;
    return String.fromCharCode(key);
  },

  bind: function() {
    this.processGuessHandler = (e) => this.processGuess(e);
    document.addEventListener("keyup", this.processGuessHandler);
  },

  unbind: function() {
    document.removeEventListener("keyup", this.processGuessHandler);
  },

  init: function() {
    this.reset();
    this.bind();
    this.createBlanksForLetters();
  }
}

  new Game();

  replay.addEventListener('click', event => {
    event.preventDefault();
    new Game();
  });
});
