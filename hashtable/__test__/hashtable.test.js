'use strict';

// Using Ashley's idea until I can figure this out

const util = require('util'); // ask John about util
let Hashtable = require('../hashtable.js');
let hashtableTesting = new Hashtable(20);

// Using the key/values from the demo code

hashtableTesting.add('John','Boss');
hashtableTesting.add('Cathy','The Real Boss');
hashtableTesting.add('Zach','Kid 1');
hashtableTesting.add('Allie','Kid 2');
hashtableTesting.add('Rosie','Dog');
hashtableTesting.add('Cat','TA');
hashtableTesting.add('Justin','Student');
hashtableTesting.add('Jason','Student');
hashtableTesting.add('Ben','Student');
hashtableTesting.add('Timea','Student');
hashtableTesting.add('Jen','Student');
hashtableTesting.add('Khalil','Student');
hashtableTesting.add('Michael','Student');
hashtableTesting.add('Ovi','Student');

console.log('full hashmap', util.inspect(hashtableTesting,{showHidden:false,depth:null}));

describe('Hashtable Test Suite', () => {

  it('Can we add a key|value pair to our hashtable?', ()=> {
    hashtableTesting.add('asdfasdfasdfasdfasdf','Builder');
    // console.log(hashtableTesting);
    // This is testing what the hash # is - that it returns the accurate spot
    expect(hashtableTesting.length).toEqual(15);
  });

  it('Can we delete a key|value pair on our hasthtable?', ()=> {
    hashtableTesting.delete('Timea');
    console.log(hashtableTesting);
    expect(hashtableTesting.contains('Timea')).toEqual(false);
  });

  it('Can we get a value if we give it a key?', ()=> {
    let giveKeyGetValue = hashtableTesting.find('Ovi');
    expect(giveKeyGetValue).toEqual('Student');
  });

  it('Checks if there is a missing value', ()=> {
    let giveKeyGetValue = hashtableTesting.find('Tucker');
    expect(giveKeyGetValue).toEqual('Key Has No Matching Value');
  });

  it('Returns "True" if we can find a key we are looking for', ()=> {
    let containsTest = hashtableTesting.contains('Rosie');
    expect(containsTest).toEqual(true);
  });

  it('Returns "False" if we cant find the key we are looking for', ()=> {
    let containsTest = hashtableTesting.contains('Ardvark');
    expect(containsTest).toEqual(false);
  });

  it('When given a key, it will return the index in the array the key is stored', ()=> {
    let getHashTest = hashtableTesting.getHash('Ben');
    expect(getHashTest).toEqual(17);
  });

  it('When given a key that does not exist in the hashmap, it will return an message saying there is no matching key in the map', ()=> {
    let getHashTest = hashtableTesting.getHash('Totoro');
    expect(getHashTest).toEqual('There is no matching key in the map');
  });

});