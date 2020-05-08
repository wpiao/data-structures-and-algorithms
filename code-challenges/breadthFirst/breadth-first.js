'use strict';

const { Queue } = require('../../Data-Structures/stacksAndQueues/stack-and-queue.js');

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

  // breadth first traversal
  bfs() {
    const tracker = new Queue();
    const results = [];
    tracker.enqueue(this.root);
    while(tracker.peek()) {
      const currentNode = tracker.dequeque();
      results.push(currentNode.value);
      if (currentNode.left) tracker.enqueue(currentNode.left);
      if (currentNode.right) tracker.enqueue(currentNode.right);
    }
    return results;
  }

  // DFS method
  preOrder() { // root -> left -> right
    const results = [];
    const _walk = node => {
      results.push(node.value); // read the root first
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }

    _walk(this.root);
    return results;
  }

  inOrder() { // left -> root -> right
    const results = [];
    const _walk = node => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    }

    _walk(this.root);
    return results;
  }

  postOrder() { // left -> right -> root
    const results = [];
    const _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    }

    _walk(this.root);
    return results;
  }
}

// not working this way
// class BinaryTreeV1 extends BinaryTree {
//   constructor() {
//     super();
//   }

//   // breadth first traversal
//   bfs() {
//     const tracker = new Queue();
//     const results = [];
//     tracker.enqueue(this.root);
//     while(tracker.peek()) {
//       const currentNode = tracker.dequeque();
//       results.push(currentNode.value.value);
//       if (currentNode.value.left) tracker.enqueue(currentNode.value.left);
//       if (currentNode.value.right) tracker.enqueue(currentNode.value.right);
//     }
//     return results;
//   }
// }

module.exports = { Node, BinaryTree };