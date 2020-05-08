'use strict';

const { Queue } = require('../Data-Structures/stacksAndQueues/stack-and-queue.js');
const { Node, BinaryTree } = require('../code-challenges/breadthFirst/breadth-first.js');

describe('Binary Tree Module', () => {
  test('should return empty array if it is empty binary tree', () => {
    const tree = new BinaryTree();

    expect(tree.bfs()).toEqual([]);
  });

  let one = new Node(10);
  let two = new Node(2);
  let three = new Node(30);
  let four = new Node(45);
  let five = new Node(59);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;

  const tree = new BinaryTree(one);
  
  test('should traverse in BFS pattern for non-empty tree', () => {
    expect(tree.bfs()).toEqual([10,2,30,45,59]);
  });
});