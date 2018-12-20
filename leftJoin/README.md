# Hashmap LEFT JOIN
Implement a simplified LEFT JOIN for 2 Hashmaps.

## Challenge
* Write a function that LEFT JOINs two hashmaps into a single data structure.
* The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
* The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
* LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
* The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

## Approach & Efficiency
I worked on this challenge with Ashley and Brandon.

We create a return object to hold our key value pairs. We have an array that is constructed from one of our inputs. We use a `for loop` to iterate through the key array. Each key it iterates through is stored in a variable, and that variable is used to accessed both of the input maps. A value missing will result in `null`. Our first variable will have all the keys from map one. 

## Solution
![alt text](https://github.com/mattoattacko/data-structures-and-algorithms/blob/master/leftJoin/assets/leftJoin_whiteboard.jpg "Whiteboard for Code Challenge 28")
