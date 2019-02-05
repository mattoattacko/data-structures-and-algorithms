'use strict';
// Just using the tree from the demo

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Root - Left - Right ( root -> all the way left till nothing left -> back to first child leaf -> right till nothing)
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

  // Left - Right - Root (start from bottom)
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

  // Left - Root - Right (L -> R if thinking in grids)
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

  // breadth first I think? Ask again
  levelOrder() {
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

module.exports = BinaryTree;