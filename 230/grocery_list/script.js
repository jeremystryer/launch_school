document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let list = document.querySelector("#grocery-list");
  const getValueOf = (selector) => document.querySelector(selector).value;
  const invalidItem = (item) => Boolean(item) === false;

  form.addEventListener("submit", event => {
    event.preventDefault();

    let itemName = getValueOf("#name");

    if (invalidItem(itemName)) return;

    let quantity = getValueOf("#quantity") || '1';

    let bullet = document.createElement('li');
    bullet.textContent = quantity + ' ' + itemName;
    list.append(bullet);
    form.reset();
  });
});
