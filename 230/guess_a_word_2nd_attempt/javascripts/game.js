document.addEventListener("DOMContentLoaded", () => {
  const MAX_WRONG_GUESSES = 6;
  const MESSAGE = document.getElementById('message');


  let randomWord = (function() {
    let words = ['apple', 'banana'];

    return function() {
      let idx = Math.floor(Math.random() * words.length);
      let word = words[idx];
      words.splice(idx, 1);
      return word;
    }
  })();


  function Game() {
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      return this;
    }

    this.lettersGuessed = [];
    this.incorrectGuesses = 0;
    this.init();
  }

  Game.prototype = {
    init: function() {
      this.createBlanks();
    },

    createBlanks: function() {
      let spacesArea = document.getElementById("spaces");
      for (let i = 0; i < this.word.length; i += 1) {
        spacesArea.insertAdjacentElement('beforeend', document.createElement('span'));
      }
    },

    displayMessage: function(text) {
      message.innerText = text;
    },
  }

  new Game();
});
