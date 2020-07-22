// In this kata, you will be given array of Objects a=[{obj1},{obj2},...]. You will return merged Objects. If a key exists in one or more Objects and since you can not have duplicate values for a single key in your final set, you keep the most recent value for that key as show in the example below.

// var a={1:'1',2:'2',3:'3'},
//     b={3:'4',5:'6',6:'7',7:'8'},
//     c={5:'9',8:'9',6:'12',23:'35'}
//     o=[a,b,c];

// var objConcat=(o)=> {
//   return a.concat(b).concat(c) ?
//should return the following
// { '1': '1','2': '2','3': '4','5': '9','6': '12','7': '8','8': '9','23':'35' }
//key 3 exist in both a and b, so in the final result above we keep {3:'4'} because that is most recent seen
// key 5 exist in both b and c, so we keep {5:'9'} from c
// key 6 exist in both b and c so we keep {6:'12'} from c


/*
input: array of objects
output: an objected which is created by merging objects from input array

rules:
merge all objects together and return a single object
an object in array may contain same key as another object
-- if it does, then the value for the returned object should be that of the latest object in array

questions:
possible that same key is written in same object? yes, in which case first instance of key's value will be replaced with second value
empty objects? yes, possible
validate inputs? no

algorithm:
-create an empty object
-iterate through array
-each element is an object
-for each element (i.e. object)
-  if object from line 1 contains key of iterating element, reassign value to current value
-    for (key in obj1) {
-      obj2.includes(key);
-    }
-  else add key value pair from iteration
-    assign using bracket notation
-      obj2[key] = obj1[key]
return object

*/
function objConcat(arrayOfObjects) {
  let mergedObject = {};

  arrayOfObjects.forEach(function (obj) {
    for (let key in obj) {
      mergedObject[key] = obj[key];
    }
  });

  return mergedObject;
}

const OBJECT1 = {1:'1',2:'2',3:'3'};
const OBJECT2 = {3:'4',5:'6',6:'7',7:'8'};
const OBJECT3 = {5:'9',8:'9',6:'12',23:'35'};

const ARRAY = [OBJECT1, OBJECT2, OBJECT3];

console.log(objConcat(ARRAY));
// { '1': '1','2': '2','3': '4','5': '9','6': '12','7': '8','8': '9','23':'35' }
