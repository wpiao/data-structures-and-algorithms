'use strict';

const { Node, LinkedList } = require('../Data-Structures/linkedListInsertions/ll-insertions.js');

describe('Node Module', () => {
  it('should create a new node', () => {
    const node = new Node(1);

    expect(node.value).toEqual(1);
    expect(node.next).toBeNull();
  });
});

describe('Linked List Module', () => {
  it('append() should add a node to the end of the linked list', () => {
    const ll = new LinkedList();
    ll.append(1);

    expect(ll.head.value).toEqual(1);
  });

  it('append() shoud add multiple nodes to the end of the linked list', () => {
    const ll = new LinkedList();
    // add three nodes
    for (let i = 1; i <= 3; i++) {
      ll.append(i);
    }

    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
  });

  it('insertBefore() could add a node before a head in the linked list', () => {
    const ll = new LinkedList();
    //add three nodes
    for (let i = 1; i <= 3; i++) {
      ll.append(i);
    }
    // add 0 before head node
    ll.insertBefore(1, 0);

    expect(ll.head.value).toEqual(0);
    expect(ll.head.next.value).toEqual(1);
    expect(ll.head.next.next.value).toEqual(2);
  });

  it('insertBefore() could add a node before a node located in the middle of linked list', () => {
    const ll = new LinkedList();
    // add three nodes
    for (let i = 1; i <= 3; i++) {
      ll.append(i);
    }
    // add node 4 before second node
    ll.insertBefore(2, 4);

    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(4);
    expect(ll.head.next.next.value).toEqual(2);
  });

  it('insertAfter() could add a node after a node located in the middle of linked list', () => {
    const ll = new LinkedList();
    // add three nodes
    for (let i = 1; i <= 3; i++) {
      ll.append(i);
    }

    // add node 4 after second node
    ll.insertAfter(2, 4);

    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(4);
    expect(ll.head.next.next.next.value).toEqual(3);
  });

  it('insertAfter() could add a node after the last node of the linked list', () => {
    const ll = new LinkedList();
    // add three nodes
    for (let i = 1; i <= 3; i++) {
      ll.append(i);
    }

    // add node 4 after last node
    ll.insertAfter(3, 4);

    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.head.next.next.next.value).toEqual(4);
  });
});