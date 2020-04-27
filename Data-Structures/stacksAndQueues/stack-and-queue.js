'use strict';

//---------------------------------------------------------------------------------------
// requirement for this code challenge: use linked list to implement stack and queue
//---------------------------------------------------------------------------------------

// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack class
class Stack {
  constructor() {
    this.top = null; // give access to last item in the stack
  }

  // push
  push(value) {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      // new node points to current top and then make new node top
      node.next = this.top;
      this.top = node;
    }
    return this;
  }

  // pop
  pop() {
    if (!this.top) {
      return null;
    } else {
      // top points current top's next node
      const poppedValue = this.top.value;
      this.top = this.top.next;
    }
    return poppedValue;
  }

  // peek
  peek() {
    if (!this.top) {
      return null;
    } else {
      const value = this.top.value
    }
  }

  // isEmpty
  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}