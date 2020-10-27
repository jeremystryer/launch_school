// Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids. The function returns true for valid swaps and undefined for invalid. To put the focus on the node swapping functionality, you can assume that nodes will have a value for the id attribute and two arguments will always be provided. Use the following HTML and sample codes to test your output:

// Invalid Swaps
// at least one of the id attributes doesn't exist
nodeSwap(1, 20); // undefined

// at least one of the nodes is a "child" of the other
nodeSwap(1, 4); // undefined
nodeSwap(9, 3); // undefined

// Valid Swaps
// one swap
nodeSwap(1, 2);

// multiple swaps
nodeSwap(3, 1);
nodeSwap(7, 9);

/*
input: 2 integers representing ids of nodes
output: return true for valid swaps and undefined for invalid swaps
rules:
if one of the arguments is not actually an id of a node, then swap is invalid
if one of the nodes identified by id is a child of the other node argument, then swap is invalid
otherwise, have the first node take the place of the second node and vice versa
- when swapping nodes, all children and descendants of node are also moved

algorithm:
get the nodes using ids passed in as arg
if one of elements returned is null, then return undefined
get children of each element
if other element is one of children, then return undefined

make a deep clone of each node
replace first node with deep clone of second node
replace second node with deep clone of first node

*/

function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);
  let node1Clone;
  let node2Clone;

  if (node1 === null || node2 === null) {
    return undefined
  }

  if (node1.contains(node2) || node2.contains(node1)) {
    return undefined;
  }

  node1Clone = node1.cloneNode(true);
  node2Clone = node2.cloneNode(true);

  node1.parentElement.replaceChild(node2Clone, node1);
  node2.parentElement.replaceChild(node1Clone, node2);
}
