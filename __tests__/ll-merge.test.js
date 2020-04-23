'use strict';

const { Node, LL, mergeLists } = require('../code-challenges/llMerge/ll-merge.js');

describe('Node Module', () => {
  it('should create a new node', () => {
    const node = new Node(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });
});

describe('LL Module', () => {
  it('append() can add a node to the end of the the LL', () => {
    const ll = new LL();
    // add three nodes
    for (let i = 1; i <= 3; i++) {
      ll.append(i);
    }

    expect(ll.head.value).toBe(1);
    expect(ll.head.next.next.value).toBe(3);
  });

})