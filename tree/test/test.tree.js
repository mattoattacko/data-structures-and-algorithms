'use strict';

const BinarySearchTree = require('./tree.js');
// const BinaryTree = require('./binary-tree.js');
// const Node = require('./node.js');

describe('Binary Search Tree', () => {

  it('what is the output of preOrder method?', () => {
    const tree = new BinarySearchTree();
    const values = [1,2,3,4,5,6,7];
    values.map(value => tree.insert(value));
    expect(tree.preOrder()).toEqual([1,2,4,5,3,6,7]);
  });

  it('what is the output of postOrder method?', () => {
    const tree = new BinarySearchTree();
    const values = [1,2,3,4,5,6,7];
    values.map(value => tree.insert(value));
    expect(tree.postOrder()).toEqual([4,2,5,6,7,3,1]);
  });

  it('what is the output of inOrder method?', () => {
    const tree = new BinarySearchTree();
    const values = [1,2,3,4,5,6,7];
    values.map(value => tree.insert(value));
    expect(tree.inOrder()).toEqual([4,2,5,1,6,3,7]);
  });

  it('what is the output of levelOrder method?', () => {
    const tree = new BinarySearchTree();
    const values = [1,2,3,4,5,6,7];
    values.map(value => tree.insert(value));
    expect(tree.levelOrder()).toEqual([1,2,3,4,5,6,7]);
  });

});