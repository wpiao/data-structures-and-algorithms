'use strict';

const leftJoin = (ht1, ht2) => {
  // inner function that store all values of the hashtable in an object
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
            // if the key already exist, then push value to the current array
            values[key].push(value);
          } else {
            // if the key doesn't exist, then add value to the empty array
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
  // pass ht2 to inner function to store all its values to an object
  const record2 = record(ht2);

  // iterate over record1, check if each key in the record1 is in record2
  for (let key in record1) {
    if (record2[key]) {
      record1[key] = [...record1[key], ...record2[key]];
    } else {
      record1[key].push(null);
    }
  }

  // return record1
  return record1;
}

module.exports = leftJoin;

