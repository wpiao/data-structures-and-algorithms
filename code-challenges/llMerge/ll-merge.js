'use strict';

//  Zip the two linked lists together into one so that the nodes alternate between the two lists
const mergeLists = (list1, list2) => {
  // create mergedList
  const mergedList = new LL();
  let current1Head = list1.head;
  let current2Head = list2.head;
  // set mergedList head
  if (current1Head) {
    mergedList.head = current1Head;
  } else if (current2Head) {
    mergedList.head = current2Head;
  } else {
    // in this case, both list1 and list 2 are empty LL
    return mergedList;
  }
  
  // traverse both list1 and list2 together and add respective current node in each list to the mergedList
  // let current1 = 
  // while(current1 || current2) {
  //   // each iteration make sure add list1's current node first and then list2's current node
  //   //

  // }
}
//-----------------------------------------------
// could use module from previous code-challenge
//-----------------------------------------------
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  // add node to the end of the LL
  append(value) {
    const node = new Node(value);
    // if head is null, then make new node head
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      // traverse to the end of the LL, then add new node to the end of the LL
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }
}

module.exports = { Node, LL, mergeLists };