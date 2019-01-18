'use strict';

const Stack = require('./queue-stacks.js');

class PseudoQueue {
  constructor () {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(value) {
    this.stackOne.push(value);
    return this;
  }

  dequeue() {
    if (this.stackTwo === null) {
      if (this.stackOne === null) { return 'This is an empty queue. You can not dequeue'; }
      while (this.stackOne.storage.length > 0) {
        let tempValue = this.stackOne.pop();
        this.stackTwo.push(tempValue);
      }
    }
    return this.stackTwo.pop();
  }
}

module.exports = PseudoQueue;