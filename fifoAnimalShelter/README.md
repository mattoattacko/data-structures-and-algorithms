# First-in, First out Animal Shelter.
* Code Challenge 12: First-in, First out Animal Shelter.

## Challenge
* Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
* Implement the following methods:
* enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
* dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
* I worked with a tutor and got help from Ashley as I was extremely confused how to proceed. 
* I used enqueue to an an animal to a new queue. A dequeue function was used to check if our preference is cat (or dog).
* find() was used to located the earliest instance of cat.
* We used dequeue to again check if our pref was dog, and used find() to locate the earliest instance of dog.
* If our preference was neither dog nor cat, the earliest of either dog or cat is returned. 

## Solution
![Animal Shelter Whiteboard]()