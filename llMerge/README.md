# Merge two Linked Lists
* Code Challenge 08: Merge two linked lists

## Challenge
* Write a function called `mergeLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
* I had an extremely hard time with this challenge and required help from classmates.

* We made a new linked list and got the current values of the linked lists. We then iterated through the lists. If we founda  current value, we set the next value in our new list to the current value of the first list. We set the next value in the new list to the current value of the second list. We returned to the head of the new list once all current values were exhausted. BigO of is T=O(n)
 and S=O(1).
 
## Solution
![whiteboarding](whiteboard)