'use strict';

const leftJoin = (ht1, ht2) => {
  // inner function that record all values of the hashtable in an object
  const record = ht => {
    // iterate over hashtable and record all values in an object
    const values = {};
    for (let i = 0; i < ht.size; i++) {
      const current = ht.storage[i];
      if (current) {
        // assume all key/value pairs are stored in a linked list
        let currentNode = current.head;
        while (currentNode) {
          const key = currentNode.value[0];
          const value = currentNode.value[1];
          if (values[key]) {
            values[key].push(value);
          } else {
            values[key] = [value];
          }
          currentNode = currentNode.next;
        }
      }
    }
    return values;
  }
  // pass ht1 to inner function to store all its values to an object
  const record1 = record(ht1);
  return record1;
}

module.exports = leftJoin;

