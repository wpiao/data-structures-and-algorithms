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

  it('should successfully handle a collision within the hashtable and should successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    // create a collision
    const ht = new HashTable(1024);
    ht.add('alex7', 'alex7');
    ht.add('elax7', 'duplicate');

    expect(ht.hash('alex7')).toEqual(ht.hash('elax7'));
    expect(ht.get('alex7')).toEqual('alex7');
    expect(ht.get('elax7')).toEqual('duplicate');
  });

  it('should successfully hash a key to in-range value', () => {
    const ht = new HashTable(5);
    const hash1 = ht.hash('sdfewr');
    const hash2 = ht.hash('ghjiw');
    const hash3 = ht.hash('uiojbvc');
    const hash4 = ht.hash('oukcbuwe');
    const hash5 = ht.hash('ijckbuwh');

    expect(hash1 >= 0 && hash1 < 5).toEqual(true);
    expect(hash2 >= 0 && hash2 < 5).toEqual(true);
    expect(hash3 >= 0 && hash3 < 5).toEqual(true);
    expect(hash4 >= 0 && hash4 < 5).toEqual(true);
    expect(hash5 >= 0 && hash5 < 5).toEqual(true);
  })
  
});
