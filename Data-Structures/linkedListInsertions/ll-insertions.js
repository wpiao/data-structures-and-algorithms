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
    if (!this.head) {
      this.head = node;
    } else {
      // traverse ll from head to last node
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  insertBefore(value, newVal) {
    // traverse ll from head to last node to find out if the ll has newVal
    if (!this.head) {
      return this;
    } else {
      let previous = null;
      let current = this.head;
      const node = new Node(newVal);
      while(current) {
        // if current node value is equal to target value then insert new node before current node
        if (current.value === value) {
          // if head value is equal to target value then insert new node before head node
          if (!previous) {
            node.next = this.head;
            this.head = node;
            return this;
          } else {
            // previous node points at new node and new node points at current node
            previous.next = node;
            node.next = current;
            return this;
          }
        } else {
          // if current node value is not equal to target value, then move to next node
          previous = current;
          current = current.next;
        }
      }
    }
    return this;
  }

  insertAfter(value, newVal) {
    if (!this.head) {
      return this;
    } else {
      // traverse the linked list
      let current = this.head;
      const node = new Node(newVal);
      while(current) {
        // if current node value is equal to target value, then insert new node after current node
        if (current.value === value) {
          // if current node is last node, then make last node points at new node
          if (!current.next) {
            current.next = node;
            return this;
          } else {
            // if not, then current node points at new node and now node points at next node
            node.next = current.next;
            current.next = node;
            return this;
          }
        } else {
          //if current node value is not equal to target value, then move to next node
          current = current.next;
        }
      }
    }
    return this;
  }
}

module.exports = { Node, LinkedList };