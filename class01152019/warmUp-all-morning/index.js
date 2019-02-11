// WARM UP! Implement a Stack, Queue, and Node class.
//=================================================
// // -------------- Stack : ---------------------
// // (corey)
//
// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//
//   push(val) {
//     this.stack.push(val)
//     return this.stack
//   }
//
//   pop() {
//     return this.stack.pop()
//   }
//
//   peek() {
//     return this.stack[this.stack.length - 1]
//   }
//
//   isEmpty() {
//     return this.stack.length === 0
//   }
//
// }
//
// let st = new Stack();
//
// console.log(st.isEmpty()); // true
// st.push(5)
// console.log(st.isEmpty()); // false
// st.push(4)
// console.log(st.peek()) // 4
// st.pop()
// console.log(st); // Stack { stack: [ 5 ] }
//
//
// //---------- Queue: -------------
// // --------- corey: ------------
//
// class Queue {
//   constructor () {
//     this.queue = [];
//   }
//
//   enqueue(val) {
//     this.queue.push(val)
//     return this.queue
//   }
//
//   dequeue() {
//     return this.queue.shift()
//   }
//
//   peek() {
//     return this.queue[0]
//   }
//
//   isEmpty() {
//     return this.queue.length === 0;
//   }
// }
//
// let q = new Queue();
// console.log(st.isEmpty());
//
// //-------------- Node: (Linked List)---------
// // ------------- mine: ---------------------
// class Node {
//   constructor (data) {
//     this.data = data;
//     this.next = null;
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
// }
//
// //implement a node using a new stack class;
// //you will probably need a head or a top.
// //Re: https://github.com/mmosayed/DSA-Curriculum/blob/master/Linked%20List/lesson-js.md
//
// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
//
//
// push(value) {
//   let newNode = new Node(value)
//   newNode.next = this.head;
//   this.head = newNode;
// }
//
// append(value) {
//
// }
//
// print() {
//
// }
//
// nodeAt(index) {
//
// }
//
// pop() {
//
// }
//====================================================
//-------------- Node: -------------
// ------------- corey: ------------
//Stack - last in first out behaviour. it does not need an array.
class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    //instead of this.Stack
    //bc the word 'Stack' is arbitrary
  }


// ```
// start      push      push      push         pop               pop         pop
// (null)    1 -> h    2 -> h    3 -> h        2 -> h = h.next   1 -> h      (null)
//                     |         |             |
//                     1 -> t    2 -> h.next   1 -> t
//                               |
//                               1 -> t
// ```
  push(val) {
    let newNode = new Node(val); //this is goingto be the next head
    newNode.next = this.head;
    this.head = newNode;
  }


  pop() {
    if (this.head) {
      let itemToPop = this.head; //isolate the head
      this.head = this.head.next //reassign the head to be the next one below it
      return itemToPop.data //return the old head and the data inside of it.
    } //and if there isn't a head, i'm not goinign to let it do anything.
  }

  peek() {
    if (this.head) {
      return this.head.data
    }
    return null; //else //return null
  }

  isEmpty() {
    if (this.head) { return false }
    return true;
  }

}

// st.push(5)
// console.log(st); // // Stack { head: Node { data: 5, next: null } }

let st = new Stack()
console.log(st.isEmpty())   //true
st.push(5);
console.log(st.isEmpty());    //false
st.push(4);
console.log(st.peek());   //4
st.pop()
console.log(st);    //Stack { head: Node { data: 5, next: null } }



//---------- Node Queue: ---------------

class NodeQ {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    let newNode = new NodeQ (val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

  }

  dequeue() {
    if (this.head) {
      let itemToPop = this.head;
      this.head = this.head.next;
      return itemToPop.data;
    }
  }

  peek() {
    if (this.head) {
      return this.head.data
    }
    return null;
  }

  isEmpty() {
    return this.head === null;

    }
  }

}

let queue = new Queue()
console.log(queue.isEmpty())   //true
queue.enqueue(5);
console.log(queue.isEmpty());    //false
queue.enqueue(4);
console.log(queue.peek());   //4
queue.dequeue()
console.log(queue);









//
