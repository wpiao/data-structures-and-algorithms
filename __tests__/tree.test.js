'use strict';

const { Node, BinaryTree } = require('../Data-Structures/tree/tree.js');

describe('Node Module', () => {
  it('create a node', () => {
    const node = new Node(1);

    expect(node.value).toBe(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});

describe('Binary Tree Module', () => {
  it('can instantiate an empty tree', () => {
    const tree = new BinaryTree();

    expect(tree.root).toBeNull();
  });

  it('can instantiate a tree with a single root node', () => {
    const root = new Node(1);
    const tree = new BinaryTree(root);

    expect(tree.root.value).toBe(1);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  it('can add a left node and a right node to a root node', () => {
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    const tree = new BinaryTree(root);

    expect(tree.root.value).toBe(1);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(3);
    expect(tree.root.left.left).toBeNull();
    expect(tree.root.left.right).toBeNull();
    expect(tree.root.right.left).toBeNull();
    expect(tree.root.right.right).toBeNull();
  });

  it('can return a collection from a preorder traversal', () => {
    //
  });

  it('can return a collection from a inorder traversal', () => {
    //
  });

  it('can return a collection from a postorder traversal', () => {
    //
  });
});