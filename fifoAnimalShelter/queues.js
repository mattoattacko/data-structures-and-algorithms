'use strict';

const LinkedList = require('./linked-list.js');
const Node = require('./node.js');

class Queue {
  constructor () {
    this.front = null;
    this.storage = new LinkedList();
  }
  
  enqueue(value) {
    this.storage.prepend(value);
    this.front = new Node(value);
    return this;
  }
  
  dequeue() {
    let dequeuedItem = this.storage.deleteFromFront();
    this.front = this.storage.head;
    return dequeuedItem;
  }

  peek() {
    let firstItem = this.storage.getFirstValue();
    console.log(firstItem);
    return firstItem;
  }
}
  
module.exports = Queue;