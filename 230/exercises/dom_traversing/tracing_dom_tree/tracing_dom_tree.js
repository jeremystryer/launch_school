// Write a JavaScript function that takes an element's id and returns the DOM tree of the element in a two-dimensional array. The first subarray contains the element and its siblings, the second contains the parent of the element and its siblings, so on and so forth, all the way up to the "grandest" parent. Assume that the grandest parent is the element with an id of "1". Use the following HTML and test cases to test your code:

// input: integer representing element's id
// output: 2 dimensional array

// rules
// integer represents element's id
// create an array containing this element and all of its siblings
// then create an array containing parent of element and its siblings
// continue process for all parents. final parent has id of 1
// return an array containing all of these subarrays

// algorithm
// input is number
// convert number to its string equivalent
// create an empty array
// retrieve element whose id is the numeric string
// get all element children nodes whose parent is the parent element of the retrieved element
// push the all of these elements into a subarray
// push the subarray into the array
// now make the target node the parent
// repeat steps of getting all children from the parent
// stop when parent is body

function domTreeTracer(id) {
  let stringId = String(id);
  let element = document.getElementById(stringId);
  let allElements = [];

  do {
    let children = Array.prototype.slice.call(element.parentElement.children);
    allElements.push(children.map(child => child.tagName));
    element = element.parentElement;
  } while (element.tagName !== 'BODY')

  return allElements;
}
