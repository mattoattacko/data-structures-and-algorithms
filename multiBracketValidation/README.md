# Multi-bracket Validation.
Code Challenge 13 

## Challenge
On your main file, create…
JavaScript: a function called multiBracketValidation(input)

Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}

Write at least three test assertions for each method that you define.

## Approach & Efficiency
We decided to use a simple for loop to iterate a split sring, checking each ones value to the index. If we were given any of the [{( or instead )}] characters, we added/subtracted one to the counter respectively. If, at the end, we see that we got to zero on our counter, we knew that everything was "balanced". If we didn't hit zero, we knew it wasn't balanced and would recieve false. It's a dope solution. 

## Solution
Not sure why this dang image won't rotate correctly...
![alt text](https://github.com/mattoattacko/data-structures-and-algorithms/blob/master/multiBracketValidation/assets/multiBracketValidation.JPG)
