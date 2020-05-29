'use strict';

const leftJoin = require('../code-challenges/leftJoin/left-join.js');
const { Node, LL, HashTable } = require('../Data-Structures/hashtable/hashtable.js');

describe('Left Join two hash tables', () => {
  it('sh', () => {
    const ht1 = new HashTable(10);
    ht1.add('fond', 'enamored');
    ht1.add('fond', 'enamored1');
    ht1.add('donf', '1');
    ht1.add('wrath', 'anger');
    console.log(ht1);
    
    expect(leftJoin(ht1)).toEqual({
      'fond': ['enamored1', 'enamored'],
      'donf': ['1'],
      'wrath': ['anger']
    });
  });
});