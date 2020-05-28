'use strict';

const treeIntersection = require('../code-challenges/treeIntersection/tree-intersection.js');

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

describe('Find common values in two binary tree', () => {
  const emptyTree = new BinaryTree();

  // tree 1
  const root1 = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  root1.left = two;
  root1.right = three;
  two.left = four;
  three.right = five;
  const tree1 = new BinaryTree(root1);

  // tree 2
  const root2 = new Node(3);
  const six = new Node(6);
  const seven = new Node(7);
  root2.left = six;
  root2.right = seven;
  six.left = new Node(2);
  seven.right = new Node(3);
  const tree2 = new BinaryTree(root2);

  // tree3
  const root3 = new Node(10);
  const eight = new Node(8);
  const nine = new Node(9);
  root3.left = eight;
  root3.right = nine;
  const tree3 = new BinaryTree(root3);

  it('should return empty array if either tree is empty', () => {
    expect(treeIntersection(emptyTree, tree1)).toEqual([]);
    expect(treeIntersection(tree2, emptyTree)).toEqual([]);
  });

  it('should return common values of two binary tree', () => {
    expect(treeIntersection(tree1, tree2)).toEqual([1, 2, 3]);
  });

  it('should return an empty array if there is no common values between two binary tree', () => {
    expect(treeIntersection(tree1, tree3)).toEqual([]);
    expect(treeIntersection(tree2, tree3)).toEqual([]);
  });
});