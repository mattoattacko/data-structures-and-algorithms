'use strict';

// Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

// Write at least three test assertions for each method that you define.

let ourLinkList = require('./LL-insertions.js');

describe('Linked List', () => {

  it('constructor()', () => {
    let newList = new ourLinkList();
    expect(newList.head).toBeNull();
  });
  it('testing append()', () => {
    let newList = new ourLinkList();
    let startValue = 'First Value';
    newList.append(startValue);
    expect(newList.head.value).toEqual(startValue);
    let newValue = 'New Value';
    newList.append(newValue);
    expect(newList.head.value).toEqual(startValue);
    let followupValue = 'Followup Value';
    newList.append(followupValue);
  });
  it('testing prepend()', () => {
    let multiList = new ourLinkList();
    let startValue = 'First Value';
    multiList.prepend(startValue);
    let nextValue = 'Second Value'; //no need 3rd value imo
    multiList.prepend(nextValue);
    expect(nextValue).toEqual(multiList.head.value);
  });
  it('testing insertBefore()', () => {
    let newList = new ourLinkList();
    let firstValue = 2018;
    let secondValue = 1983;
    newList.insertBefore(firstValue, secondValue);
    expect(newList.head.value).toBe(1983);
  });
  it('testing insertAfter()', () => {
    let newList = new ourLinkList();
    let firstValue = 2019;
    let secondValue = 1984;
    newList.insertAfter(firstValue, secondValue);
    expect(newList.head.value).toBe(1984);
  });
});