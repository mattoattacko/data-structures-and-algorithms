# FizzBuzz Tree

* Conduct “FizzBuzz” on a tree while traversing through it. Change the values of each of the nodes dependent on the current node’s value

## Challenge

* Write a function called `FizzBuzzTree` which takes a tree as an argument.
* Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
* If the value is divisible by 3, replace the value with “Fizz”
* If the value is divisible by 5, replace the value with “Buzz”
* If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
* Return the tree with its new values.

* For explicitly-typed languages: Ensure your node values are of type `Object`, to hold either strings or integers.

## Approach & Efficiency
* Traversal through the fizz-buzz-tree is done by checking each of the values we are given from `numbersArray`. A check is done to see if the number given from `numbersArray` are divisible by either 3, 5, or both 3 and 5. If the number is divisible by 3, we insert "Fizz" instead. This is done in a new tree `insertedArray`. Numbers divisible by 5 are replaced with "Buzz", and numbers divisible by both return "FizzBuzz". 

* Space bigO = O(n). Time bigO = O(n).

## Solution
(I don't remotely understand why my pictures always upload exactly the opposite way that I want them to)

![fizzbuzztree whiteboard](https://github.com/mattoattacko/data-structures-and-algorithms/blob/master/FizzBuzzTree/assets/fizz-buzz-tree.JPG)
