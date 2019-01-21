# First repeated word
* Find the first repeated word in a book.

## Challenge
* Write a function that accepts a lengthy string parameter.
* Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
* I got help from Brandon and other classmates for this.

* We used an array to store each word pulled from a given string. We iterated through the array, noting each index position and its value. 

* After our array had values pushed into it, we looped through it again to compare the value of each element to each other element that was stored. 

* Matching elements were noted and returned. We repeated this until the entire array.length was complete. 

## Solution
![Repeated Word Whiteboard](../assets/repeated-word-whiteboard.JPG)