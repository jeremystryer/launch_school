// Implement a function that converts the DOM, starting from the body, to nested arrays. Each element in the DOM is represented as ["PARENT_TAG_NAME", [children]] where children are elements as well and as such follow the same format. When an element has no children, it's represented as ["PARENT_TAG_NAME", []]. For instance, if the HTML doesn't have any elements inside the body, the result array would be: ["BODY", []]. Likewise, if the HTML only has a div element as its content, the result array would be: ["BODY", [["DIV", []]]].

// Go over the examples below to better visualize how the DOM is represented as nested arrays.

// example 1 output
// > nodesToArr();
// = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]
//
// // OR
//
// = ["BODY", [
//     ["HEADER", []],
//     ["MAIN", []],
//     ["FOOTER", []]]]


// example 2 output
// > nodesToArr();
// = ["BODY",[["HEADER",[]],["MAIN",[["DIV",[]],["DIV",[]]]],["FOOTER",[]]]]
//
// // OR
//
// = ["BODY", [
//     ["HEADER", []],
//     ["MAIN", [
//       ["DIV", []],
//       ["DIV", []]]],
//     ["FOOTER",[]]]]

// example 3 output
// > nodesToArr();
// = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]]
//
// // OR
//
// = ["BODY", [
//     ["DIV", [
//       ["DIV", []],
//       ["DIV", [
//         ["DIV",[]]]]]],
//     ["DIV", []],
//     ["DIV", [
//       ["DIV", []],
//       ["DIV", []],
//       ["DIV", []]]]]]

function nodesToArr() {
  function getChildrenOf(parent) {
    return Array.from(parent.children)
                .map(child => [child.tagName, getChildrenOf(child)]);
  }

  return ['BODY', getChildrenOf(document.body)];
}
