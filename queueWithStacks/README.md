# Code Challenge 11
* Implement a Queue using two Stacks.

## Challenge
* Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement the standard queue interface, but will internally only utilize 2 `Stack` objects. Ensure that you create your class with the following methods:

* `enqueue(value)` which inserts `value` into the PseudoQueue, using a first-in, first-out approach.
* `dequeue()` which extracts a value from the PseudoQueue, using a first-in, first-out approach.
* The `Stack` instances have only `push`, `pop`, and `peek` methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency
* I was stuck so I had some help from classmates.
* We created two sperate stacks, and used `push` to get  all of the values given into the first stack `stackOne` (used for enqueue).
* We used `pop` to get the values from `stackOne` and moved them into `stackTwo` (used for dequeue).
* Process was repeated until all of the values were taken from `stackOne` and placed into `stackTwo`, leaving no values in `stackOne`.
* The value of `stackTwo` is returned.
* Time = O(2n) & Space = O(2n).

## Solution
![Code Challenge 11](https://github.com/mattoattacko/data-structures-and-algorithms/blob/master/queueWithStacks/assets/whiteboard-codechallenge-11.JPG)
