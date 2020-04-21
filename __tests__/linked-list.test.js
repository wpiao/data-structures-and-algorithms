'use strict';

const { Node, LinkedList } = require('../Data-Structures/linkedList/linked-list.js');

describe('Node Module', () => {
  it('should create a new node', () => {
    const val = 'test value';
    const node = new Node(val);
  
    expect(node.value).toEqual(val);
    expect(node.next).toBeNull();
  });
});

describe('Linked List Module', () => {
  it('should create a new empty linked list', () => {
    const ll = new LinkedList();

    expect(ll.head).toBeNull();
    expect(ll.append).toBeDefined();
    expect(ll.insert).toBeDefined();
    expect(ll.includes).toBeDefined();
    expect(ll.toString).toBeDefined();
  });

  it('should properly insert a new head', () => {
    const ll = new LinkedList();
    const head = new Node(1);
    ll.head = head;
    let current = head;
    // append 4 more node to the head
    for (let i = 2; i <= 5; i++) {
      current.next = new Node(i);
      current = current.next;
    }

    expect(ll.insert(0).head.value).toEqual(0);
  });

  it('head should properly point to the first node in the linked list', () => {
    // create 5 nodes in the linked list
    const ll = new LinkedList();
    const head = new Node(1);
    ll.head = head;
    let current = head;
    for (let i = 2; i <=5; i++) {
      current.next = new Node(i);
      current = current.next;
    }

    expect(ll.head.value).toEqual(1);
  });

  it('should be able to insert multiple nodes', () => {
    // create 5 nodes in the linked list
    const ll = new LinkedList();
    const head = new Node(1);
    ll.head = head;
    let current = head;
    for (let i = 2; i <= 5; i++) {
      current.next = new Node(i);
      current = current.next;
    }

    expect(ll.head.next.next.next.value).toEqual(4);
    expect(ll.head.next.next.next.next.value).toEqual(5);
  });

  it('should return true when finding a value within the linked list that exists', () => {
    // create 5 nodes in the linked list
    const ll = new LinkedList();
    const head = new Node(1);
    ll.head = head;
    let current = head;
    for (let i = 2; i <= 5; i++) {
      current.next = new Node(i);
      current = current.next;
    }

    expect(ll.includes(3)).toBe(true);
  });

  it('should return false when not finding a value within the linked list that does not exist', () => {
    const ll = new LinkedList();
    const head = new Node(1);
    ll.head = head;
    let current = head;
    for (let i = 2; i <= 5; i++) {
      current.next = new Node(i);
      current = current.next;
    }

    expect(ll.includes(7)).toBe(false);
  });

  it('should return a collection of all the values that exists in the linked list', () => {
    const ll = new LinkedList();
    const head = new Node(1);
    ll.head = head;
    let current = head;
    for (let i = 2; i <= 5; i++) {
      current.next = new Node(i);
      current = current.next;
    }

    expect(ll.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL')
  });
});