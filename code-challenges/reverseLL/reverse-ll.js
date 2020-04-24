'use strict';

const reverseLL = (ll) => {
  if (!ll.head) {
    return ll;
  } else {
    let previous = null;
    let current = ll.head;
    let next = current.next;
    while (current) {
      current.next = previous;
      previous = current;
      current = next;
      if (current) {
        next = current.next;
      }
    }
    ll.head = previous;
  }
  return ll;
}

module.exports = reverseLL;