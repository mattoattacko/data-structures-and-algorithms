'use strict';

// Write a function that LEFT JOINs two hashmaps into a single data structure.
// The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
// The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
// Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.

const leftJoinTesting = require('../left-join.js');

// Using examples from the submission guidelines

const synonymHashmap = new Map();
synonymHashmap.set('fond', 'enamored');
synonymHashmap.set('wrath', 'anger');
synonymHashmap.set('diligent', 'employed');
synonymHashmap.set('outfit', 'garb');
synonymHashmap.set('guide', 'usher');

const antonymHashmap = new Map();
antonymHashmap.set('fond', 'averse');
antonymHashmap.set('wrath', 'delight');
antonymHashmap.set('diligent', 'idle');
antonymHashmap.set('guide', 'follow');
antonymHashmap.set('flow', 'jam');

describe('Does It Left Join', () => {

  // LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

  it('Yes It Left Joins', () => {
    let hashmap = leftJoinTesting.leftjoins(synonymHashmap, antonymHashmap);
    expect(hashmap).toEqual({'fond': ['enamored', 'averse'], 'wrath': ['anger', 'delight'], 'diligent': ['employed', 'idle'],'outfit': ['garb', null], 'guide': ['usher', 'follow']});
  });
});