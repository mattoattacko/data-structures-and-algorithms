'use strict';
function insertShfitArray(arr, number) {
  let arrayMiddle = (arr.length / 2);
  for (var i = arr.length - 1; i >= arrayMiddle; i--) {
    arr[i + 1] = arr[i];
  }
  arr[arrayMiddle] = number;
  return arr;
}
insertShfitArray([2, 4, 6, 8], 5);

// James/Matt idea not working atm
// var arrayTester01 = [1,3,7,9];
// var arrayTester02 = [10,20,30,40];
// function insertShiftArray(arr, number) {
//   let newShiftArray = [];
//   for (var i=0; i<arr.length; i++) {
//     let middle = (arr.length/2);
//     console.log(newShiftArray);
//     if( i >= middle){
//       newShiftArray[i] = number[i+1];
//       newShiftArray[i] = arr[i];
//     }
//     if(i <= middle){
//       newShiftArray[i] = number[i+1];
//       newShiftArray[i] = arr[i];
//     }
//   }
//   return newShiftArray;
// }
// insertShiftArray(arrayTester01, 4);
// insertShiftArray(arrayTester02, 25);