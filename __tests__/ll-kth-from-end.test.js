'use strict';

const { Node, LL } = require('../Data-Structures/llKthFromEnd/ll-kth-from-end.js');

describe('Node Module', () => {
  it('should create a new node', () => {
    const node = new Node(1);

    expect(node.value).toEqual(1);
    expect(node.next).toBeNull();
  });
});

describe('Linked List Module', () => {
  it('append() should add a node to the end of the linked list', () => {
    const ll = new LL();
    // add three nodes
    for (let i = 1; i <= 3; i++) {
      ll.append(i);
    }

    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.head.next.next.next).toBeNull();
  });

  it('kthFromEnd() should return Exception when k is greater than LL length', () => {
    const ll = new LL();
    // add three nodes
    for (let i = 1; i <= 3; i++) {
      ll.append(i);
    }

    // ll's length is 3
    expect(ll.kthFromEnd(5)).toEqual('Exception');
    expect(ll.kthFromEnd(4)).toEqual('Exception');
  });

  it('kthFromEnd() should return Exception when k is a negative integer', () => {
    const ll = new LL();
    // add three nodes
    for (let i = 1; i <= 3; i++) {
      ll.append(i);
    }

    expect(ll.kthFromEnd(-1)).toEqual('Exception');
    expect(ll.kthFromEnd(-5)).toEqual('Exception');
  });

  it('kthFromEnd() should return Exception when k and length of the LL are same', () => {
    const ll = new LL();
    // add three nodes
    for (let i = 1; i <= 3; i++) {
      ll.append(i);
    }

    // ll's length is 3
    expect(ll.kthFromEnd(3)).toEqual('Exception');
  });

  it('kthFromEnd() should return a number when k is in the middle of the LL', () => {
    const ll = new LL();
    // add five nodes
    for (let i = 1; i <= 5; i++) {
      ll.append(i);
    }

    // ll's length is 5
    expect(ll.kthFromEnd(0)).toEqual(5);
    expect(ll.kthFromEnd(1)).toEqual(4);
    expect(ll.kthFromEnd(2)).toEqual(3);
    expect(ll.kthFromEnd(3)).toEqual(2);
    expect(ll.kthFromEnd(4)).toEqual(1);
  });

  it('kthFromEnd() should work properly when LL size is 1', () => {
    const ll = new LL();
    ll.append(1);

    expect(ll.kthFromEnd(0)).toEqual(1);
    expect(ll.kthFromEnd(1)).toEqual('Exception');
    expect(ll.kthFromEnd(2)).toEqual('Exception');
  });
});