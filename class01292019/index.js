// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//
//   let node1 = new Node(1);
//   let node2 = new Node(2);
//   let node3 = new Node(3);
//   let newNode = new Node(value);
//
//   node1.next = node2;
//   node2.next = node3;
// }
//
//
// findMiddle (headNode) {
//   let counter = 0;
//   let pointer = this.headNode;
//
//   while(counter < headNode) {
//     pointer = pointer.next;
//     counter++
//   }
//
//   headNode.pop()
//   tailNode.pop()
//   return pointer
//
//
//   // for (let i = 0; i < list.length; i++) {
//   //   list[i]
//   // }
// }

//================ Reed: =============

//the tail is teh one taht has 'null' for "next". the head has null for 'prev'. but only for a doubly linked list. this is a singly linked list.
//linked list: nodes contain one association and those nodes are linear.
//trees show that nodes can contain more than one association.
//dont have to return the index (the node), only its value (what the node contains).

//in order to test the answer, making the node list. but in interview, the interviewer would assume you know the attributes of a linked list.
//so, dont need the first 8 lines (including those 2 brackets)

//the 2 fundamental attributes of a linked list: someway to access it (to the head), and a way to keep edit it (push).
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let myHead = new Node(1);
myHead.next = new Node(2, new Node(3, new Node(4, new Node(5))));

// console.log('head:', myHead);

const findMiddle = head => {
  let myCheatingArr = [];
  let myTracker = head;

  while (myTracker) {
    myCheatingArr.push(myTracker.value)
    myTracker = myTracker.next;
  }

  // console.log(myCheatingArr);
  if (myCheatingArr.length % 2) {
    return myCheatingArr[(myCheatingArr.length - 1) / 2]
  } else {
    return myCheatingArr[Math.floor((myCheatingArr.length -1) / 2)]
  }
}

console.log(findMiddle(myHead));

//======== without Cheating. Reed's bare minimum for a linked list: ==============
//what are most common methods available with these data types.
// what is the time complexity of a loop? looping through each index once - is O(n). each node/index. if input is of finite length => O(1). but we dont know.
// to loop through a loop twice, O(n) * 2 = O(n)
// infinity + 1 = infinity. infinity + infiity = infinity.
// a loop within a loop - O(n)^2. where both of those loops depend on the length of the array.
// an operation is dependent on the number of indices.(?). an array of 2 element, vs an array of 200 have relative no. of operations.
// O(1) to access any index. each value, takes an equal no. of space in memory.
// this op is O(n).
// plus, pushing at the end of an array is an O(1). nodes are not indexed. stored through hashing funcitons.
// dont have to shift anything over , like an array does when you shift / unshift from the beginning of an array. o(n) operation.
// a linked list is not an arrrya. shifting/ unshifting/ popping / and pushing are all equally o(1).

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  push(node) { // adds a node to end of linked list
    if (!this.head) {   //
      this.head = node;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = node;
    }
  }

}


//======== JinSoo (Alex) =========
// a. first pointer: head.next.next
// b. second pointer: head.next
// one runner always runs twice as fast as the other runner, when 1 is as 100 m mark, 2 is at 50 m mark.
// so, list of 3: a. reaches null(past 3) and b. reaches 2!
// list of 6: ...

const findMiddle = (head) => {
    let traverseCount = 0
    let middleNode = head;
    let currentNode = head;

    while(currentNode.next) {
        currentNode = currentNode.next;
        traverseCount++;
        if (!(traverseCount % 2)) {
            middleNode = middleNode.next
        }
    }
    return middleNode.value;
}

//=========================



Notes now: (see notes)
hash tables : cryptography and block chains
hashmaps, dictionaries (and maybe hash maps)
















//
