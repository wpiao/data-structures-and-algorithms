'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  // add a node
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      // traverse the LL and find the last node and then points last node to new node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  // find the kth node value from the end of the LL
  kthFromEnd(k) {
    // handle k is a negative integer
    if (k < 0) {
      return 'Exception';
    } else {
      // traverse the LL from head to last node and unshift current node value to an empty array
      const temp = [];
      let current = this.head;
      while(current) {
        temp.unshift(current.value);
        current = current.next;
      }
      let result = 'Exception';
      if (k < temp.length) {
        return temp[k];
      } else {
        return result;
      }
    }
  }
}

module.exports = { Node, LL };