// Implement a function that converts the DOM, starting from the body, to nested arrays. Each element in the DOM is represented as ["PARENT_TAG_NAME", [children]] where children are elements as well and as such follow the same format. When an element has no children, it's represented as ["PARENT_TAG_NAME", []]. For instance, if the HTML doesn't have any elements inside the body, the result array would be: ["BODY", []]. Likewise, if the HTML only has a div element as its content, the result array would be: ["BODY", [["DIV", []]]].

// SOLUTION

/*
Each element in the DOM is represented as ["PARENT_TAG_NAME", [children]
starting with body
-get all children of element
-change element to format of an array of [element name, [names of all children]]
*/

function nodesToArr(node = document.body, arr = []) {
  let children = node.children;
  arr.push(node.tagName, tagNames(children));
  return [...children].map(child => nodesToArr(child, arr));
}

function tagNames(collection) {
  return [...collection].map(elem => elem.tagName);
}

////

function nodeToArr(node) {
  return [node.nodeName, [...node.children].map(nodeToArr)];
}

nodeToArr(document.body);
