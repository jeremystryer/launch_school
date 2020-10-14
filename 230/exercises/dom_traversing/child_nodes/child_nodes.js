// Write code that returns the number of direct and indirect child nodes for a given parent node as an array.

// Any DOM node that has at least one child node is a parent node.
// Indirect child nodes are the child nodes of child nodes.

function childNodes(id) {
  let directChildren;
  let indirectChildren = 0;
  let stringifiedId = String(id);
  let node = document.getElementById(stringifiedId);

  let childNodes = node.childNodes;

  directChildren = childNodes.length;

  for (let index = 0; index < directChildren; index += 1) {
    indirectChildren += countChildren(childNodes[index]);
  }

  return [directChildren, indirectChildren - directChildren];
}

function countChildren(childNode) {
  let quantity = 0;

  (function count(childNode) {
    if (childNode.childNodes.length > 0) {
      // quantity += childNode.childNodes.length;
      for (let index = 0; index < childNode.childNodes.length; index += 1) {
        quantity += childNode.childNodes.length;
        count(childNode.childNodes[index]);
      }
    }
  })(childNode);

  return quantity;
}


// sample output
childNodes(1);
// [9, 12]
childNodes(4);
// [3, 1]
childNodes(9);
// [1, 1]
