'use strict';

const reverseLL = require('../code-challenges/reverseLL/reverse-ll.js');
const { Node, LinkedList } = require('../Data-Structures/linkedList/linked-list.js');

describe('Reverse Linked List', () => {
  it('should return empty ll if input is empty ll', () => {
    const ll = new LinkedList();

    expect(reverseLL(ll).head).toBeNull();
  });

  it('should return same ll if the input ll only has one node', () => {
    const ll = new LinkedList();
    // add one node
    ll.append(1);

    expect(reverseLL(ll).head.value).toBe(1);
    expect(reverseLL(ll).head.next).toBeNull();
  });

  it('should return reversed ll if the input ll has more than one node', () => {
    const ll = new LinkedList();
    // add three nodes
    ll.append(1);
    ll.append(2);
    ll.append(3);

    expect(reverseLL(ll).head.value).toBe(3);
    expect(reverseLL(ll).head.next.value).toBe(2);
    expect(reverseLL(ll).head.next.next.value).toBe(1);
    expect(reverseLL(ll).head.next.next.next).toBeNull();
  })
});