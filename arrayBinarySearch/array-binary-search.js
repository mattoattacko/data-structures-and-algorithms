'use strict';

module.exports = exports =  (arr, num) => {
  var searchMinimum = 0;
  var searchMaximum = arr.length - 1;
  
  while (searchMinimum <= searchMaximum) {
    let indexMidPoint = ((searchMinimum + searchMaximum)/2 | 0);
    let currentNumbers = arr[indexMidPoint];
    if (currentNumbers === num){
      return indexMidPoint;
    } else if (currentNumbers > num){
      searchMaximum = indexMidPoint - 1;
    } else {
      searchMinimum = indexMidPoint + 1;
    }
  }
  return -1;
};