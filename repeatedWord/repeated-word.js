'use strict';

let repeatedWord = (string) => {
  string = string.toLowerCase();
  let array = string.split(' '); // this must be done as string.split(' '). Just using .split('') will cause the string to split at each letter rather than each word.
  // console.log(array); this will show us the current array and the values in the index
  if(!array[0]) {
    // console.log('The string is empty');
    return 'No repeats found. String empty.';
  }
  for(let a = 0; a < array.length-1; a++) {
    for(let b = a+1; b < array.length; b++) {
      if(array[a] === array[b]) {
        // console.log(array[a]);
        return array[a];
      }
    }
  }
  // console.log('No repeats found');
  return 'No repeats found.';
};

module.exports = repeatedWord;