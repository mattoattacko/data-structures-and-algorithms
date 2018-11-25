'use strict';
let arrTest=[1,2,3,4];
function reverseArray(arr){
  let reverse = [];
  for(let i=0; i<=arr.length-1; i++){
    let a = (arr.length-1) -i;
    reverse.push(arr[a].valueOf());
  }
  return reverse;
}
reverseArray(arrTest);