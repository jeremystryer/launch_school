// // // 1) What will the code below output to the console?
// //
// // let message = 'Hello from the global scope!';
// //
// // function func(message) {
// //   message = 'Hello from the function scope!';
// //   console.log(message);
// // }
// //
// // func(message); // 'Hello from the function scope!'
// // console.log(message); // 'Hello from the global scope!' --> Due to variable shadowing, (parameter's message in func blocks access to the globally scoped message). Changing the parameter name from message to m would output 'Hello from the function scope!' since message on line 6 would the variable instantiated on line 3 rathe rathan the local parameter variable.
// //
// // // 2) What will the code below log to the console? What does this output demonstrate in relation to the output of problem one?
// //
// // let myObj = { message: 'Greetings from the global scope!' };
// //
// // function func(obj) {
// //   obj.message = 'Greetings from the function scope!';
// //   console.log(obj.message);
// // }
// //
// // func(myObj); // 'Greetings from the function scope!';
// //
// // console.log(myObj.message); // 'Greetings from the function scope!';
// //
// // // The function parameter obj references the object as myObj when myObj is passed into func. The property message is then reassigned for the object that both of these variables point to.
// //
// // // 3) What will the code below log to the console?
// //
// // let message = 'Hello from the global scope!';
// //
// // function func() {
// //   message = 'Hello from the function scope!';
// //   console.log(message);
// // }
// //
// // func(); // 'Hello from the function scope!';
// // console.log(message); // 'Hello from the function scope!';
//
// // 4) What will the code below log to the console?
//
// let a = 10;
// let obj = {
//   a
// }
//
// let newObj = obj;
// newObj.a += 10;
//
// console.log(obj.a === a); // false
// console.log(newObj === obj); // true

// 5) Consider the code below:

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timom',
  species: 'Suricata suricatta',
};

menager = { warthog: {name: 'Pumbaa', species: 'Phacochoerus africanus'}, meerkat: {name: 'Timom', species: 'Suricata suricatta'} }

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true
// If objects are mutable, why does the second to last line return false?
