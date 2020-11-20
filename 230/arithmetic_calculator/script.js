function calculateAnswer(num1, num2, operation) {
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);

  switch (operation) {
    case '+':
     return num1 + num2;
    case '-':
     return num1 - num2;
    case '*':
     return num1 * num2;
    case '/':
     return num1 / num2;
  }
}

function invalidInput(num1, num2) {
  return (Boolean(num1) === false || Boolean(num2) === false);
}

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  let submitButton = document.querySelector('input[type=submit]');
  let result = document.getElementById('result');

  form.addEventListener('click', event => {
    let operator = document.querySelector('select').value;
    let value1 = document.getElementById('value1').value;
    let value2 = document.getElementById('value2').value;

    if (event.target !== submitButton) {
      return;
    }

    event.preventDefault();

    if (invalidInput(value1, value2)) return;

    result.innerText = calculateAnswer(value1, value2, operator)
  });
});
