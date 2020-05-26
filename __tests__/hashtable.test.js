'use strict';

const { Node, LL, HashTable } = require('../Data-Structures/hashtable/hashtable.js');

describe('Node Module', () => {
  it('should create a node' , () => {
    const node = new Node(1);

    expect(node.value).toEqual(1);
    expect(node.next).toBeNull();
  });
});

describe('Linked List Module', () => {
  it('should create a ll', () => {
    const ll = new LL();
    expect(ll.head).toBeNull();

    ll.add(2);
    expect(ll.head.value).toEqual(2);

    ll.add(3);
    expect(ll.head.value).toEqual(3);
  });
});

describe('Hashtable Module', () => {
  it('should add a key/value to hashtable', () => {
    const ht = new HashTable(1024);
    ht.add('alex', 'alex');
    ht.add('alex1', 'alex1');
    
    expect(ht.get('alex')).toEqual('alex');
    expect(ht.get('alex1')).toEqual('alex1');
    expect(ht.contains('alex')).toEqual(true);
    expect(ht.contains('alex1')).toEqual(true);
    expect(ht.contains('alex2')).toEqual(false);
  });

  it('should retrieve a value based on a key', () => {
    const ht = new HashTable(1024);
    ht.add('alex2', 'alex2');
    ht.add('alex3', 'alex3');
    expect(ht.get('alex2')).toEqual('alex2');
    expect(ht.get('alex3')).toEqual('alex3');
  });

  it('should successfully return null for a key that does not exist in the hash table', () => {
    const ht = new HashTable(1024);
    ht.add('alex4', 'alex4');
    expect(ht.get('alex5')).toBeNull();
    expect(ht.get('alex6')).toBeNull();
  });

  it('should successfully handle a collision within the hashtable', () => {
    // create a collision
    const ht = new HashTable(1024);
    ht.add('alex7', 'alex7');
    ht.add('elax7', 'duplicate');

    expect(ht.get('alex7')).toEqual('alex7');
    expect(ht.get('elax7')).toEqual('duplicate');
  });
});
