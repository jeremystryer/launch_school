function childNodes(id) {
  let count = 0;

  function countAllChildren(node) {
    count += 1;

    for (let index = 0; index < node.childNodes.length; index += 1) {
      countAllChildren(node.childNodes[index]);
    }

    return count;
  }

  let directChildren;
  let indirectChildren;
  let node = document.getElementById(id);
  directChildren = node.childNodes.length;
  indirectChildren = countAllChildren(node) - directChildren - 1;
  return [directChildren, indirectChildren];
}

console.log(childNodes(1)); // [9, 12]
console.log(childNodes(4)); // [3, 1]
console.log(childNodes(9)); // [1, 1]
