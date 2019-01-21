'use strict';

const LinkedList = require('./linkedlist.js');
const Node = require('./node.js');

class Stacks {
  constructor () {
    this.top = null;
    this.storage = new LinkedList();
  }

  push(value) {
    this.storage.append(value);
    this.top = new Node(value);
    this.storage.length++;
    return this;
  }

  pop() {
    let poppedValue = this.storage.deleteFromEnd();
    this.top = this.storage.tail;
    this.storage.length--;
    return poppedValue;
  }

  peek() {
    let lastItem = this.storage.getLastValue();
    return lastItem;
  }
}

module.exports = Stacks;