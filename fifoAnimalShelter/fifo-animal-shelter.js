'use strict';

const animalSheltersQueue = require('./queues.js');

class AnimalShelter {
  constructor () {
    this.shelterQueue = new animalSheltersQueue();
  }
  enqueue(animal) {
    this.shelterQueue.enqueue(animal);
  }
  dequeue(pref) {
    // console.log('dequeue testing', this.shelterQueue.storage);

    if (pref === 'dog') {
      let current = this.shelterQueue.storage.head;
      while(current.next) {
        if (current.value === 'dog') {
          return current.value;
        } else {
          current = current.next;
        }
      }
      return 'Hurray! All of our dogs have been adopted! Checkout our cats too! They are equally adorable.';
    }

    if (pref === 'cat') {
      let current = this.shelterQueue.storage.head;
      while(current.next) {
        if (current.value === 'cat') {
          return current.value;
        } else {
          current = current.next;
        }
      }
      return 'Hurray! All of our cats have been adopted! Checkout our dogs too! They are equally adorable.';
    } 

    if (pref !== 'dog' || pref !== 'cat') {
      this.shelterQueue.dequeue();
    }
  }
}
  
module.exports = {AnimalShelter};