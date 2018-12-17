'use strict';

let featuredTask = module.exports = {};

featuredTask.multiBracketValidation = (input) => {
  let bracket = 0;
  let string = input;
  let stringSplit = string.split('');

  if (input === '') {
    return 'string cannot be empty';
  }
  //confirm with someone
  for(let a = 0; a < stringSplit.length; a++) {
    if (stringSplit[a] === '[' || stringSplit[a] === '(' || stringSplit[a] === '{') {
      bracket++;
    }
    if (stringSplit[a] === ']' || stringSplit[a] === ')' || stringSplit[a] === '}') {
      bracket--;
    }
  }
  if (bracket === 0) {
    return true;
  } else {
    return false;
  }
};