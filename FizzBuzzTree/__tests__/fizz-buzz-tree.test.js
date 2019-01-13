'use strict';

// const Node = require('../node.js');
const fizzBuzzTree = require('../fizz-buzz-tree.js');

describe('tests for fizz-buzz-tree', () => {

  let numbersArray = [2,4,6,8,10,12,14,16,18,20,30,60,90];
  let insertedArray = [2,4,'Fizz',8,'Buzz','Fizz',14,16,'Fizz','Buzz','FizzBuzz','FizzBuzz','FizzBuzz'];
  let noChange = [2,8,11];

  it('Tesing for correct output', () => {
    let tree = new fizzBuzzTree();
    let values = numbersArray;
    values.map(value => tree.add(value));
    let newArray = tree.fizzBuzzTree();
    expect(newArray).toEqual(insertedArray);
  });
  // console.log(newArray);

  it('Testing if we have the right amount of elements in our array', () => {
    let tree = new fizzBuzzTree();
    let values = numbersArray;
    values.map(value => tree.add(value));
    let newArray = tree.fizzBuzzTree();
    expect(newArray.length).toEqual(insertedArray.length);
  });
  // console.log(insertedArray);

  it('Testing if no fizz-buzzing has occured', () => {
    let tree = new fizzBuzzTree();
    let values = noChange;
    values.map(value => tree.add(value));
    let newArray = tree.fizzBuzzTree();
    expect(newArray).toEqual(noChange);
  });
  // console.log(noChange);
});