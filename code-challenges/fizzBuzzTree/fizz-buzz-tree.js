'use strict';

// Conduct "FizzBuzz" on a binary bree while traversing through it. Change
// values of each of the nodes dependent on the current node's value.
const fizzBuzzTree = (tree) => {
  // helper function
  const modifyValue = (value) => {
    if (value % 15 === 0) {
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
      return 'Buzz';
    } else {
      return value.toString();
    }
  }

  const fizzBuzz = (node) => {
    // root -> left -> right
    node.value = modifyValue(node.value);
    if (node.left) fizzBuzz(node.left);
    if (node.right) fizzBuzz(node.right);
  }

  // handle edge case
  if (!tree.root) {
    return null;
  } else {
    // traverse binary tree through preOrder method way and inspect each node's
    // value and then change it appropriately based on requirement
    // invoke the fizzBuzz with root node
    fizzBuzz(tree.root);
    return tree;
  }
}

module.exports = fizzBuzzTree;