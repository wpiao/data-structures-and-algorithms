'use strict';

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

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(node) {
    // will complete it ASAP
  }
}

module.exports = { Node, BinaryTree };