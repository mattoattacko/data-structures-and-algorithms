'use strict';

const Node = require('./node.js');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(value);
      return;
    }

    const _insert = node => {
      if(value < node.value) {
        if(node.left === null) {
          node.left = new Node(value);
          return;
        } else if(node.left !== null) {
          return _insert(node.left);
        }
      } else if(value > node.value) {
        if(node.right === null) {
          node.right = new Node(value);
          return;
        } else if(node.right !== null) {
          return _insert(node.right);
        }
      } else {
        return null;
      }
    };
    _insert(node);
  }
  
  search(value) {

    let _walk = node => {
      
      if(value < node.value) {
        _walk(node.left);
      } else if(value > node.value) {
        _walk(node.right);
      } else if(value === node.value) {
        return node;
      }
    };
    _walk(this.root);
  }


  // Root - Left - Right
  preOrder() {
    let results = [];
    let _walk = node => {
      results.push(node.value);
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);

    return results;
  }

  // Left - Root - Right
  inOrder() {
    let results = [];
    let _walk = node => {
      if (node.left) {
        _walk(node.left);
      }
      results.push(node.value);
      if (node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);

    return results;
  }

  // Left - Right - Root
  postOrder() {
    let results = [];
    let _walk = node => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  // Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.

  breadthFirst() {
    let results = [];
    let nodeQueue = [];
  
    nodeQueue.push(this.root);
  
    while (nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if (current.left) {
        nodeQueue.push(current.left);
      }
      if (current.right) {
        nodeQueue.push(current.right);
      }
    }
    return results;
  }
}

module.exports = BinarySearchTree;