// Write a function that colors a specific generation of the DOM tree. A generation is a set of elements that are on the same level of indentation. We'll be using a "styled" HTML for this exercise to better visualize the generations. You may use the .generation-color class to color the specific generation. You can assume that only non-negative integers will be provided as arguments.

function colorGeneration(generationNum) {
  if (generationNum === 0) return;

  let colorElements = [document.body];

  for (let idx = 0; idx < generationNum; idx += 1) {
    debugger;
    colorElements = colorElements.map(element => [...element.children]).flat();
  }

  colorElements.forEach(element => {
    element.classList.add('generation-color');
  });
}

colorGeneration(1);
colorGeneration(4);
colorGeneration(7);
colorGeneration(8);
colorGeneration(3);
colorGeneration(0);
