# Trees
Implement a Tree. A happy little tree. 

## Challenge
* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

* Create a BinaryTree class:
* Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which takes in a root node, and returns an array of the nodes.

* At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

* Create a BinarySearchTree class:
* Define a method named `add` that adds a new node in the correct location in the binary search tree.
* Define a method named search that brings in a value of node, and returns the node with the desired value.

## Approach & Efficiency
* It took me a few months, but Hai and Ashley helped me figure out BSTs a bit better.

* `preOrder`, `postOrder`, `inOrder`, and `levelOrder` all return an array with the nodes in the correct traversal order. 

* Should have a BigO of Time = O(logN), Space = O(1)

## API

* The BinarySearchTree will set our root to null.
* `add()` will take a value, then add that value to our tree.
* `search()` will take a value, then search for that value in our BST. If it finds the node, it will return it. If it does not find the node, it will return null. 