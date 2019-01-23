'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor () {
    this.head = null;
  }
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this; 
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }

  mergeLists(linkedListOne,linkedListTwo) {
    if (linkedListOne == null) return linkedListTwo;
    if (linkedListTwo == null) return linkedListOne;

    let linkedListThree = new LinkedList();
    let whereAreWeOne = linkedListOne.head;
    let whereAreWeTwo = linkedListTwo.head;

    while(whereAreWeOne || whereAreWeTwo) {
      linkedListThree.append(whereAreWeOne.value);
      whereAreWeOne = whereAreWeOne.next;
      linkedListThree.append(whereAreWeTwo.value);
      whereAreWeTwo = whereAreWeTwo.next;
    } 
    return linkedListThree;
  }
}

module.exports = LinkedList;