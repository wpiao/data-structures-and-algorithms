'use strict';

const { Node, Stack, Queue } = require('../Data-Structures/stacksAndQueues/stack-and-queue.js');

describe('Node Module', () => {
  it('should create a node', () => {
    const node = new Node(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });
});

describe('Stack Module', () => {
  it('instantiate an empty stack; push a node; push multiple nodes, pop a node; empty stack after multiple pops, peek the top node, check if the stack is empty', () => {
    // instantiate an empty stack
    const stack = new Stack();
    expect(stack.top).toBeNull();

    // push a node
    stack.push(1);
    expect(stack.top.value).toBe(1);
    expect(stack.top.next).toBeNull();

    // push multiple nodes
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
    expect(stack.top.next.value).toBe(2);
    expect(stack.top.next.next.value).toBe(1);

    // peek the top node
    expect(stack.peek()).toBe(3);

    // check if the stack is empty
    expect(stack.isEmpty()).toBe(false);

    // pop a node
    expect(stack.pop()).toBe(3);

    // pop multiple nodes until empty stack
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.peek()).toBeNull();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should raise exception when pop or peek on empty stack', () => {
    // instantiate an empty stack
    const stack = new Stack();

    // return null when pop on empty stack
    expect(stack.pop()).toBeNull();

    // return null when peek on empty stack
    expect(stack.peek()).toBeNull();
  });
});

describe('Queue Module', () => {
  it('instantiate an empty queue, enqueque a node, enqueque multiple nodes, peek the front node value, dequeque a node, empty the queque through dequeque, check if the queue is empty, raise exception when dequeque or peek on empty queue', () => {
    // instantiate an empty queue
    const queue = new Queue();
    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();

    // enqueque a node
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
    expect(queue.rear.value).toBe(1);

    // enqueque multiple nodes
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toBe(1);
    expect(queue.rear.value).toBe(3);
    expect(queue.rear.next).toBeNull();

    // peek the front value
    expect(queue.peek()).toBe(1);

    // check if the queue is an empty queue
    expect(queue.isEmpty()).toBe(false);

    // dequeque a node
    expect(queue.dequeque()).toBe(1);

    // dequeque multiple nodes until it is empty
    expect(queue.dequeque()).toBe(2);
    expect(queue.dequeque()).toBe(3);
    expect(queue.peek()).toBeNull();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should return null when dequeque or peek on empty queue', () => {
    // create an empty queue
    const queue = new Queue();

    // return null when peek on empty queue
    expect(queue.peek()).toBeNull();

    // return null when dequeque on empty queue
    expect(queue.dequeque()).toBeNull();
  });
});