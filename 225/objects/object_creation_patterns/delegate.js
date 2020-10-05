// // Write a delegate function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to.
//
// // Note that this is not the same as using bind. bind returns a new function, whereas delegate maintains the reference.
//
// function delegate(fromObj, method, ...args) {
//   return function() {
//     fromObj[method](args);
//   }
// }

function delegate(obj, method, ...args) {
  return function delegated() {
    return obj[method](...args);
  };
}
//
// // function delegate(context, methodName, ...args) {
// //   return () => context[methodName].apply(context, args);
// // }
//
const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
  // qux: function() { console.log('hello'); }
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'
