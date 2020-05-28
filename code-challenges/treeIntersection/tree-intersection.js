'use strict';

const treeIntersection = (tree1, tree2) => {
  const root1 = tree1.root;
  const root2 = tree2.root;
  const result = [];
  if (root1 && root2) {
    // iterate over tree1 and store each node value in an empty object
    // use preorder pattern root -> left -> right
    const values1 = {} // this object will hold all tree1's node values
    const walk1 = node => {
      if (values1[node.value]) {
        values1[node.value]++;
      } else {
        values1[node.value] = 1;
      }
      if (node.left) walk1(node.left);
      if (node.right) walk1(node.right);
    }
    walk1(root1);

    // iterate over tree2 and check if each node' value appears in values1 object
    // use preorder pattern: root -> left -> right
    const walk2 = node => {
      if (values1[node.value]) {
        result.push(node.value);
      }
      if (node.left) walk2(node.left);
      if (node.right) walk2(node.right);
    }
    walk2(root2);
    return result;
  } else {
    // Handle edge case: if either tree is empty then return empty array
    return result;
  }
}

module.exports = treeIntersection;