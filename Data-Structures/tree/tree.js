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
      if (this.left) _walk(this.left);
      results.push(node.value);
      if (this.right) _walk(this.right);
    }

    _walk(this.root);
    return results;
  }

  postOrder() { // left -> right -> root
    const results = [];
    const _walk = node => {
      if (this.left) _walk(this.left);
      if (this.right) _walk(this.right);
      results.push(node.value);

      _walk(this.root);
      return results;
    }

    
  }
}

module.exports = { Node, BinaryTree };