// Suppose we want to use code to keep track of products in our hardware store's inventory. A first stab might look something like this:

// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;
//
// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

// This code presents a number of problems, however. What if we want to add another kind of drill? Given what we've learned about object orientation in the previous assignment, how could we use objects to organize these two groups of data?

let scissors = {
  id: 0,
  name: 'scissors',
  stock: 8,
  price: 10,
  function: setPrice(cost) {
    if (cost >= 0) {
      this.price = cost;
    } else {
      alert('Invalid price!');
    }
  },
  function: describe() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: $' + this.price);
    console.log('Stock: ' + this.stock);
  },
}

console.log(scissors.setPrice(10));

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
// }

// OR

// function makeTool(id, name, stock, price) {
//   return {
//     id,
//     name,
//     stock,
//     price,
//   }
// }

// makeTool(0, 'scissors', 8, 10);
// makeTool(1, 'Cordless Drill', 15, 45);

////////////////

// Our new organization also makes it easier to write functions dealing with the products, because we can now take advantage of conventions in the objects' data. Create a function that takes one of our product objects as an argument, and sets the object's price to a non-negative number of our choosing, passed in as a second argument. If the new price is negative, alert the user that the new price is invalid.

// function setPrice(tool, cost) {
//   if (cost >= 0) {
//     tool.price = cost;
//   } else {
//     alert('Invalid price!');
//   }
// }

// It would also be useful to have the ability to output descriptions of our product objects. Implement such a function following the example below:
//
// describeProduct(scissors);
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8

// function describeProduct(product) {
//   console.log('Name: ' + product.name);
//   console.log('ID: ' + product.id);
//   console.log('Price: $' + product.price);
//   console.log('Stock: ' + product.stock);
// }
//
// console.log(describeProduct(scissors));
