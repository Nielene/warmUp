class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
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




class Queue {
  constructor(){
    this.in = new Stack ();
    this.out = new Stack ();
  }

  enqueue(val) {
    this.in.push(val)
  }

  dequeue() {
    this.move()
    return this.out.pop();
  }

  move() {
    if (this.out.isEmpty()) {
      while(!this.in.isEmpty()) {
        this.out.push(this.in.pop())
      }
    }
  }

  isEmpty() {
    return this.in.isEmpty() && this.out.isEmpty();
  }

  peek() {
    this.move();
    return this.out.peek();
  }
}



let queue = new Queue()
console.log(queue.isEmpty())   //true
queue.enqueue(5);
console.log(queue.isEmpty());    //false
queue.enqueue(4);
console.log(queue.peek());   //5
console.log(queue.dequeue()); //5
queue.dequeue()
console.log(queue.isEmpty()); //true
