function isValidName(name) {
  return name.length >= 5;
}

function isValidCategory(cat) {
  let regex = /^\w+$/;
  return regex.test(cat) && cat.length >= 5;
}

function getSku(name, cat) {
  nameWithoutSpace = name.replace(/\s/g, '');

}

let ItemManager = {
  items: [],

  create(itemName, category, quantity) {
    if (isValidName(itemName) && isValidCategory(category) && quantity) {
      let sku = getSku(itemName, category);

      let item = {
        sku,
        itemName,
        category,
        quantity,
      };

      this.items.push(item);
    } else {
      return false;
    }
  },

  update() {

  },

  // items() {
  //
  // },

  inStock() {

  },

  itemsInCategory() {

  },
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items
