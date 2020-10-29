let cursorInterval;

document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');

    if (!cursorInterval) {
      cursorInterval = setInterval(() => textField.classList.toggle('cursor'), 500);
    }
  });

  document.addEventListener('keydown', event => {
    if (textField.classList.contains('focused')) {
      let content = document.querySelector('.content');

      if (event.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, content.textContent.length - 1);
      } else if (event.key.length === 1) {
        content.textContent += String(event.key);
      }
    }
  });
});

document.addEventListener('click', event => {
  clearInterval(cursorInterval);
  cursorInterval = null;
  let textField = document.querySelector('.text-field');
  textField.classList.remove('focused');
  textField.classList.remove('cursor');
  let content = document.querySelector('.content');
});


// When the user presses a keyboard key while the text-field element has the focused class, append the String value of the key to the content element. Ignore keyboard entries when the text-field element does not have the focused class.
