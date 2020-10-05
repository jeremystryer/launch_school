/*
Consider the following series:

0,1,2,3,4,5,6,7,8,9,10,22,11,20,13,24...There is nothing special between numbers 0 and 10.

Let's start with the number 10 and derive the sequence. 10 has digits 1 and 0. The next possible number that does not have a 1 or a 0 is 22. All other numbers between 10 and 22 have a 1 or a 0.

From 22, the next number that does not have a 2 is 11. Note that 30 is also a possibility because it is the next higher number that does not have a 2, but we must select the lowest number that fits and is not already in the sequence.

From 11, the next lowest number that does not have a 1 is 20.

From 20, the next lowest number that does not have a 2 or a 0 is 13, then 24 , then 15 and so on.

Once a number appers in the series, it cannot appear again.

You will be given an index number and your task will be to return the element at that position. See test cases for more examples.

Note that the test range is n <= 500.
*/


/*
Problem
Create a sequence of numbers where each number does not contain any of the digits of the previous number. Given an input representing an index (0 based), find the number in the sequence of that index.

Rules:
 - Number in sequence cannot contain any digits found in the previous number
 - Numbers in sequece cannot be repeated
 - Number needs to be the lowest possible number that has not yet appeared in the sequence
 - Index is less than or equal to 500
 - Index needs to be 0 or greater
 - Index is 0 based

Data Structure
Arrays

Algorithm
  - Create an empty gaps collection
  - Create a sequence collection, with 0 already present
  - Start with 0
   - Iterate through the numbers in the gaps collection.
     - If one of them matches criteria, delete it from gaps collection
     - Push it to sequence collection
     - skip the rest of following steps
   - Does the next number (in this case 1) have digits that are present in the current number?
    - If yes,
       - Add that number to the gaps collection
       - continue looking for number
  - Is the next number already present in the sequence that we're building?
    - If yes, continue looking for number
  - If both are no, then add the number to the sequence, and increment the currentIdx

*/


function findNum(index) {

}

findNum(1); // 1
findNum(5); // 5
findNum(11); // 22
// gaps  = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
//  sequence = [0,1,2,3,4,5,6,7,8,9,10,22];
// let currentIdx = 11
// 0,1,2,3,4,5,6,7,8,9,10,22
findNum(100); //103
findNum(500); // 476
});
