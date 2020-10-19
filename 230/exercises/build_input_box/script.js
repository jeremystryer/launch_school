let cursorInterval;
let focusedTextField;

document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');

  textField.addEventListener('click', function(event) {
    event.stopPropagation();

    focusedTextField = textField;
    textField.classList.add('focused');

    cursorInterval = cursorInterval || setInterval(() => textField.classList.toggle('cursor'), 500);
    console.log(cursorInterval);
  });
});

document.addEventListener('keydown', event => {
  if (focusedTextField) {
    let contentDiv = focusedTextField.querySelector('.content');

    if (event.keyCode === 8) {
      contentDiv.textContent = contentDiv.textContent.substring(0, contentDiv.textContent.length - 1);
    } else {
      contentDiv.textContent += event.key;
    }
  }
});

document.addEventListener('click', event => {
  clearInterval(cursorInterval);
  cursorInterval = null;
  if (focusedTextField) {
    focusedTextField.classList.remove('focused');
    focusedTextField.classList.remove('cursor');
    focusedTextField = null;
  }
});
