'use strict';

const leftJoin = require('../code-challenges/leftJoin/left-join.js');
const { Node, LL, HashTable } = require('../Data-Structures/hashtable/hashtable.js');

describe('Left Join two hash tables', () => {
  const empty = new HashTable(10);

  const ht1 = new HashTable(10);
  ht1.add('fond', 'enamored');
  ht1.add('fond', 'enamored1');
  ht1.add('wrath', 'anger');

  const ht2 = new HashTable(10);
  ht2.add('fond', 'averse');
  ht2.add('wrath', 'delight');
  ht2.add('fond', 'averse1');

  const ht3 = new HashTable(10);
  ht3.add('fond', 'averse')
  ht3.add('fond', 'averse1');
  ht3.add('flow', 'jam');

  it('should return {} if left hashtable is empty', () => {
    expect(leftJoin(empty, ht1)).toEqual({});
  });

  it('should append all right hashtable values if all exist in the right hashtable; should handle the situation that has more than one synonym or antonym', () => {
    expect(leftJoin(ht1, ht2)).toEqual({
      'fond': ['enamored1', 'enamored', 'averse1', 'averse'],
      'wrath': ['anger', 'delight']
    });
  });

  it('should append null if specific values does not exist in the right hashtable', () => {
    expect(leftJoin(ht1, ht3)).toEqual({
      'fond': ['enamored1', 'enamored', 'averse1', 'averse'],
      'wrath': ['anger', null]
    });
  });
});