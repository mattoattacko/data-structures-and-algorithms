'use strict';

let Shelter = require('../fifo-animal-shelter.js');
  
describe('Adds a cat or dog to shelters queue. Tests enqueue.', () => {
  it('Adds a cat or dog to shelters queue. Tests enqueue.', ()=> {
    let queue = new Shelter.AnimalShelter();
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
  });
});

describe('If pref is dog, returns earliest dog.', () => {
  it('If pref is dog, returns earliest dog.', ()=> {
    let queue = new Shelter.AnimalShelter();
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    let dequeueValue = queue.dequeue('dog');
    expect(dequeueValue).toEqual('dog');
  });
});

describe('If pref is cat, returns earliest cat.', () => {
  it('If pref is cat, returns earliest cat.', ()=> {
    let queue = new Shelter.AnimalShelter();
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    let dequeueValue = queue.dequeue('cat');
    expect(dequeueValue).toEqual('cat');
  });
});