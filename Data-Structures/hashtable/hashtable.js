'use strict';

// Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List
class LL {
  constructor() {
    this.head = null;
  }

  // add a node th the head
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // if empty LL, then add new node to the head
      this.head = newNode;
    } else {
      // else, add new node to the head
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  get() {
    //
  }
}

// Hash Table
class HashTable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  // internal methods
  // hash method
  hash(key) {
    const index = key.split('').reduce((acc, cur) => {
      acc += cur.charCodeAt(0);
    }, 0) * 19 % this.size;
    return index;
  } 

  // add method
  add(key, value) {
    const index = this.hash(key);
    if (!this.storage[index]) {
      // if no data is stored at index, then add key-value pair to the head in LL
      // and sotre LL at index in the storage
      const ll = new LL();
      ll.add([key, value]);
      this.storage[index] = ll;
    } else {
      this.storage[index].add([key, value]);
    }
  }

  // get method
  get(key) {
    //
  }

  // contains method
  contains(key) {
    //
  }
}