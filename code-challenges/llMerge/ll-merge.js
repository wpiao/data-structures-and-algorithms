'use strict';

//  Zip the two linked lists together into one so that the nodes alternate between the two lists
const mergeLists = (list1, list2) => {
  // create mergedList
  const mergedList = new LL();
  let current1 = list1.head;
  let current2 = list2.head;
  let mergedListCurrent;
  
  // traverse both list1 and list2 together and add respective current node in each list to the mergedList
  while (current1 || current2) {
    // each iteration make sure add list1's current node first and then list2's current node
    if (!mergedList.head) {
      // set up mergedList head
      if (current1) {
        mergedList.head = current1;
        mergedListCurrent = mergedList.head;
        current1 = current1.next;
      } else {
        // in this case, list1 is empty LL
        mergedList.head = current2;
        mergedListCurrent = mergedList.head;
        current2 = current2.next;
      }
    } else {
      // each iteration add respective current node in both LL to the mergedList, strat from list2 current node
      if (current2) {
        mergedListCurrent.next = current2;
        mergedListCurrent = current2;
        current2 = current2.next;
      }
      if (current1) {
        mergedListCurrent.next = current1;
        // add a node to mergerdList
        mergedListCurrent = current1;
        current1 = current1.next;
      }
    }

  }
  return mergedList;
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