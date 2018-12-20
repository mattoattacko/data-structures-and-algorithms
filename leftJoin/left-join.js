'use strict';

// Write a function that LEFT JOINs two hashmaps into a single data structure.
// The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
// The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
// Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.

// LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

const leftJoin = module.exports = {};

leftJoin.leftjoins = (hashmap1, hashmap2) => {
  let returnedObject = {};
  var theKeyArray = Array.from(hashmap1.keys());

  for(let i = 0; i < theKeyArray.length; i++) {
    let newKey = theKeyArray[i];
    let valueFromLeft = hashmap1.get(newKey);
    let valueFromRight = hashmap2.get(newKey);
    if (valueFromRight === undefined) {
      valueFromRight = null;
    }
    returnedObject[newKey] = [valueFromLeft, valueFromRight];
  }
  return returnedObject;
};