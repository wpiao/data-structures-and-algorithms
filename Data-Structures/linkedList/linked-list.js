'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    // if it is the first node, then make this node head
    if (!this.head) {
      this.head = node;
    } else {
      // else find the last node, then append this node to it
      let current = this.head;
      // traverse to the last node
      while(current.next) {
        // if next is not null, then traverse to next node
        current = current.next;
      }

      current.next = node;
    }
    return this;
  }

  insert(value) {
    const newHead = new Node(value);
    // point this new node to current head
    newHead.next = this.head;
    // assign head with new head node
    this.head = newHead;
    return this;
  }

  includes(value) {
    // if it is a empty ll, then return false
    if (!this.head) {
      return false;
    } else {
      // else traverse from first to last node to find out if there is targeted value
      let current = this.head;
      while(current.next) {
        if (current.value === value) {
          return true;
        } else {
          current = current.next;
        }
      }
      // check the last node
      if (current.value === value) {
        return true;
      } else {
        return false;
      }
    }
  }

  toString() {
    let result = '';
    // traverse from first node
    if (!this.head) {
      return 'This is empty Linked List';
    } else {
      let current = this.head;
      while (current.next) {
        result += `{ ${current.value} } -> `;
        current = current.next;
      }
      result += `{ ${current.value} } -> NULL`;
    }

    return result;
  }
}

module.exports = { Node, LinkedList };
