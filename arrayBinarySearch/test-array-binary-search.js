'use strict';

const BinarySearch = require('./array-binary-search.js');

describe('Searching Through the Binary Array', () =>{
    
  it('Testing Input', () =>{
    let arrayTest = [2,4,6,8,10];
    let arrayInputTest = BinarySearch(arrayTest, 6);
    expect(arrayInputTest).toEqual(2);
  });

  it('Testing Empty Array', () =>{
    let arrayTestEmpty = [];
    let indexTestEmpty = BinarySearch(arrayTestEmpty, 0);
    expect(indexTestEmpty).toBe(-1 || null);
  });
});