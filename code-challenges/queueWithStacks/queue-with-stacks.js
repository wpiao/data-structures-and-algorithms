'use strict';

// implement queue with two stacks
// queue: FIFO
// stack: FILO

// stack class
class Stack {
  constructor() {
    this.top = null;
    this.storage = new Array();
  }

  push(value) {
    this.storage.push(value);
    this.top = value;
  } 

  pop() {
    const item = this.storage.pop();
    this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];
    return item;
  }

  peek() {
    return this.top;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    // if stack1 and stack2 are empty then return null
    if (this.stack1.storage.length === 0 && this.stack2.storage.length === 0) {
      return null;
    } else if (this.stack2.storage.length === 0) {
      // if stack2 is empty, then pop every elements in stack1 and push it to stack2 in order.
      while (this.stack1.storage.length) {
        let item = this.stack1.pop();
        this.stack2.push(item);
      }
    }
    // stack2 has all the elements that stack1 has in reverse order, so the popped item in stack2 is the first item inserted in the queue
    return this.stack2.pop();
  }
}

module.exports = { Stack, PseudoQueue };