console.log(document.head.childNodes.length);
// 3
console.log(document.head.children[0].tagName);
// 'TITLE'
console.log(document.head.textContent);
// "
//       Title
//     "
console.log(document.body.children.length);
// 3
console.log(document.body.childNodes.length);
// 5
console.log(document.querySelector('div').parentNode.parentNode.tagName);
// 'BODY'
console.log(document.querySelector('div section').children[2].nextElementSibling);
// null
console.log(document.querySelectorAll('div').length);
// 1
//
var nodeA = document.body.firstElementChild;
console.log(document.querySelector('footer').children.length);
// 1
console.log(document.querySelector('body').replaceChild(
document.querySelector('footer'), document.body.firstElementChild).tagName);
// 'HEADER'
console.log(document.body.appendChild(nodeA));
// <header>Header<header>

console.log(document.querySelector('section').textContent.split("\n").map(function(text) {
  return text.trim();
}).filter(function(text) {
  return text.length > 0;
}));
// ["H1", "Hello", "World"]

console.log(document.querySelector('section').children);
HTMLCollection(3) [h1, p, p]
console.log(document.querySelector('section').textContent);
// "
//             H1
//             Hello
//             World
//           "

console.log(document.querySelector('span.emphasis').parentNode.tagName);
// 'FOOTER'


//////////

let nodeA;
let thingsToLog = [
  () => document.head.childNodes.length, // 1
  () => document.head.children[0].tagName, // 2
  () => document.head.textContent, // 3
  () => document.body.children.length, // 4
  () => document.body.childNodes.length, // 5
  () => document.querySelector('div').parentNode.parentNode.tagName, // 6
  () => document.querySelector('div section').children[2].nextElementSibling, // 7
  () => document.querySelectorAll('div').length, // 8
  () => { nodeA = document.body.firstElementChild; return document.querySelector('footer').children.length }, // 9
  () => document.querySelector('body').replaceChild(document.querySelector('footer'), nodeA).tagName, // 10
  () => document.body.appendChild(nodeA), // 11
  () => document.querySelector('section').textContent.split("\n").map(text => text.trim()).filter(text => text.length > 0), // 12
  () => document.querySelector('section').children, // 13
  () => document.querySelector('section').textContent, // 14
  () => document.querySelector('span.emphasis').parentNode.tagName // 15
];

let test = n => console.log(thingsToLog[n-1]());
let test2 = n => thingsToLog.slice(0, n).forEach(expr => console.log(expr()));
