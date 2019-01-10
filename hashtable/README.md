# Hashtables
Implement a hashtable that does things

## Challenge
Implement a Hashtable with the following capabilities:

* A method/function named `add` that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
* A method/function named `Find` that takes in the key and returns the value from key/value pair.
* A method/function named `contains` that takes in the key and returns if the key exists in the table already.
* A method/function named `GetHash` that takes in a key and returns the index in the array the key is stored.

## Approach & Efficiency
* I implimented some of the ideas that Ashley and Brandon helped me with. Time Big(O) is O(n). Space should be O(1)...hopefully. 

## API
* The method/function `add` hashs the K/V pair to our hashtable.
* The method/function `Find` uses the key to return the K/V pair.
* The method/function `contains` checks to see if the key portion of the K/V pair is in our hashtable.
* The method/function `GetHash` uses the key to return the location of said key in the array. 
* Extra stuff! The method/function `delete` it is removing a node from the linked list at this.map[hash], using the key as a search value through the linked list. 