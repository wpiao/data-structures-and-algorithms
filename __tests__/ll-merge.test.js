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

  it('Test mergeLists function', () => {
    // list1
    const list1 = new LL();
    for (let i = 1 ; i <= 5; i += 2) {
      list1.append(i);
    }
    // list2
    const list2 = new LL();
    for (let i = 2; i <= 6; i += 2) {
      list2.append(i);
    }

    const mergedList = mergeLists(list1, list2);

    expect(mergedList.head.value).toBe(1);
    expect(mergedList.head.next.value).toBe(2);
    expect(mergedList.head.next.next.value).toBe(3);
    expect(mergedList.head.next.next.next.value).toBe(4);
    expect(mergedList.head.next.next.next.next.value).toBe(5);
    expect(mergedList.head.next.next.next.next.next.value).toBe(6);
    expect(mergedList.head.next.next.next.next.next.next).toBeNull();
  })

})