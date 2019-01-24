'use strict';

let LinkedList = require('../ll-merge');
let list = new LinkedList();


describe('Linked List Constructor', () => {
  it('constructor() will be null', ()=> {
    expect(list.head).toBeNull();
  });
});

describe('Merged Linked List', () => {
  it('mergeLists() will merge together two linked listed', ()=> {
    let linkedListOne = new LinkedList();
    linkedListOne.append(1);
    linkedListOne.append(2);
    linkedListOne.append(3);
    let linkedListTwo = new LinkedList();
    linkedListTwo.append(5);
    linkedListTwo.append(6);
    linkedListTwo.append(7);
    let mergedList = list.mergeLists(linkedListOne,linkedListTwo);
    expect(mergedList.head.value).toBe(1);
    expect(mergedList.head.next.value).toBe(5);
    expect(mergedList.head.next.next.value).toBe(2);
    expect(mergedList.head.next.next.next.value).toBe(6);
    expect(mergedList.head.next.next.next.next.value).toBe(3);
    expect(mergedList.head.next.next.next.next.next.value).toBe(7);
  });
});