'use strict';

const util = require('util');

class Hashmap {

  constructor (size) {
    this.size = size;
    this.map = new Array(size);
  }
  
  set(key, value) {
    let hash = this.hash(key);
    if( ! this.map[hash] ) { this.map[hash] = []; } 
  }
}
let myHash = new Hashmap(10);
myHash.set('John', 'Instructor');

console.log(myHash);
