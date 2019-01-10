'use strict';

const LL = require('./linkList.js');

class Hashmap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);
    this.length = 0;
  }

  hash(key) {
    let bigTotal = key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0);

    let idx = bigTotal % this.size;

    return idx;  
  }

  //   set(key,value) {
  //     let hash = this.hash(key);
  //     console.log(hash, key, value);

  //     // Please use a LL instead of an array!
  //     if(! this.map[hash] ) { this.map[hash] = []; }

  //     // We used an object here, but this could be anything...
  //     this.map[hash].push({[key]:value});

  // a method/function named add that takes in both the key and value. This method should hash the key and add the key and value pair to the table.

  add(key, value) {
    let hash = this.hash(key);
    if(! this.map[hash] ) { this.map[hash] = new LL(); }
    this.map[hash].append({
      key: key,
      value: value,
    });
    this.length = this.length +1;
    return hash;
  }

  delete(key) {
    let hash = this.hash(key);
    if( this.map[hash] ) { 
      //cool stuff here    
      this.map[hash] = null;
      // the above should be changed so that
      // it is removing a node from the LL
      // at this.map[hash], using the key
      // as a search value through the LL
    }
    return hash;
  }

  // A method/function named Find that takes in the key and returns the value from key/value pair.

  find(key) {
    let hash = this.hash(key);
    let bucket = this.map[hash];
    if (bucket === undefined) {
      return 'Key Has No Matching Value';
    }   
    let current = bucket.head;
    while(current !== null) {
      if (current.value.key === key) {
        return current.value.value;
      }
      current = current.next;
    } 
    return 'Key Has No Matching Value';
  }

  // A method/function named contains that takes in the key and returns if the key exists in the table already.

  contains(key) {
    let hash = this.hash(key);
    let bucket = this.map[hash];
    if (bucket === undefined || bucket === null) {
      return false;
    }
    let current = bucket.head;
    while(current !== null) {
      if (current.value.key === key) {
        return true;
      }
      current = current.next;
    } 
    return false;
  }

  // A method/function named GetHash that takes in a key and returns the index in the array the key is stored.

  getHash(key) {
    let hash = this.hash(key);
    let bucket = this.map[hash];
    if (bucket === undefined) {
      return 'There is no matching key in the map';
    }

    let current = bucket.head;
    while (current !== null) {
      if (current.value.key === key) {
        return hash;
      }
      current = current.next;
    }
    return 'There is no matching key in the map';
  }
}

let hashtable = new Hashmap(20);

hashtable.add('John','Boss');
hashtable.add('Cathy','The Real Boss');
hashtable.add('Zach','Kid 1');
hashtable.add('Allie','Kid 2');
hashtable.add('Rosie','Dog');
hashtable.add('Cat','TA');
hashtable.add('Justin','Student');
hashtable.add('Jason','Student');
hashtable.add('Ben','Student');
hashtable.add('Timea','Student');
hashtable.add('Jen','Student');
hashtable.add('Khalil','Student');
hashtable.add('Michael','Student');
hashtable.add('Ovi','Student');

module.exports = Hashmap;