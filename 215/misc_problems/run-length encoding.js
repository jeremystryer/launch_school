// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.
//
// Examples
// As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

/*
input: string containing any value (letter, number, symbol, space)
output: a 2 dimensional array (subarrays contain character, frequency of character pair)

rules:
input string can contain any value (letter, number, symbol, space)
case sensitive (e.g. 'l' and 'L' are different values so would appear in different subarrays)
each subarray contains character at index 1 and character frequency at index 0
repeating all characters as indicated by their frequency and joining them in order should return same value as input string

algorithm:
split input string into array of characters
create a result array
iterate through array of characters
  if character is equal to the value at index 1 of last subarray of result array, then increment value at index 0 of subarray
  else
  create an subarray containing [1, character] and push this subarray to the result array
return result array
*/

function runLengthEncoding(string) {
  let characters = string.split('');
  let result = [];
  characters.forEach(function (character, index) {
    if (index === 0) {
      result.push([1, character]);
    } else if (result[result.length - 1][1] === character) {
      result[result.length - 1][0] += 1;
    } else {
      result.push([1, character]);
    }
  });

  return result;
}

console.log(runLengthEncoding("hello world!"))
//  //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// It's very effective if the same data value occurs in many consecutive data elements:
//
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"));
//  // => [[34,'a'], [3,'b']]

console.log(runLengthEncoding('heeLl1 $$$'));
// [ [1, 'h'], [2, 'e'], [1, 'L'], [1, 'l'], [1, '1'], [1, ' '], [3, '$'] ]

console.log(runLengthEncoding(' '));
// [ [1, ' '] ]

console.log(runLengthEncoding(''));
// []
