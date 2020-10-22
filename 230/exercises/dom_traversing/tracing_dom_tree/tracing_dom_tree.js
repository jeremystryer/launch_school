function domTreeTracer(id) {
  function getTagNames(elements) {
    return elements.map(({tagName}) => tagName);
  }

  let domTree = [];
  let node = document.getElementById(id);

  do {
    let parent = node.parentElement
    let children = Array.prototype.slice.call(parent.children);
    domTree.push(getTagNames(children));
    node = node.parentElement;
  } while (node.tagName !== 'BODY');

  return domTree;
}

console.log(domTreeTracer(1)); // ["ARTICLE"]]
console.log(domTreeTracer(2)); // ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
console.log(domTreeTracer(22)); // [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
