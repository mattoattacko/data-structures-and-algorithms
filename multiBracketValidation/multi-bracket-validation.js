'use strict';

let featuredTask = module.exports = {};

featuredTask.multiBracketValidation = (input) => {
  let multiBracket = 0;
  let string = input;
  let stringSplit = string.split('');

  if (input === '') {
    return 'string cannot be empty';
  }
  //confirm with someone
  for(let a = 0; a < stringSplit.length; a++) {
    if (stringSplit[a] === '[' || stringSplit[a] === '(' || stringSplit[a] === '{') {
      multiBracket++;
    }
    if (stringSplit[a] === ']' || stringSplit[a] === ')' || stringSplit[a] === '}') {
      multiBracket--;
    }
  }
  if (multiBracket === 0) {
    return true;
  } else {
    return false;
  }
};