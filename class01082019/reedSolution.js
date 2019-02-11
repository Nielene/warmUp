//stack = last in first out. LIFO
//queues = first in first out. FIFO

//the stack limits the way we can access data.
//the whole point of a stack is the limitation
//how browsing history works. browser knows to go back and forward bc it is stored in two stack like structures.
//by default, stacks are not supposed to be available to anybody, except for the current one.
//why do we deliberately limite the ways we can access data? - we decide to model it via a specific abstract data type. ie. if we are doing  a stack , we probably dont need to access it. bc we are implying we only want you accessing the top thing.
//if this becomes inconvinentien, then a stack is probably the wrong abstract data type.
//stack implies, we dont need to do anything else with this data type. an array is too flexible.
//even though a stack works just like an array. but more restricted.
//stack one: only way back;  stack two: only way forward. this implies to programmer what it is for. it communicates something in particular to other engineers who are working on the project.
//we specifically cannot iterate through a stack - that is for arrays. (then you should have used an array.)

class Stack {
  constructor() {
    this.items = [];
    this.length = 0;//there is no explicit connection btw items and length. i create that relationship
  }

  push(item) {
    this.length++;
    this.items.push(item);
  }

  pop() {
    this.length--
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}


let find = (stack, val) => {
  let bin = new Stack();//making a second stack
  let found = false; //what if i dont find it=> infiinte loop. so fix it by combining: (!found || stack.length)//making a while loop. this is when to stop.
  let answer = null;

  while (!found && stack.length) {//if get to end of stack and still dont find it, stack.length is a falsy value adn we escape the while loop (bc stack.length is no longer true)
    if (stack.peek() === val) {
      found = true;
      answer = stack.peek();
    } else {
      bin.push(stack.pop());
      console.log(stack);
    }
  }

  while (bin.length) {
    stack.push(bin.pop())
    console.log('stack',stack, 'bin', bin);
  }
  return answer;

};

  let myStack = new Stack();

  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  myStack.push(4);
  myStack.push(5);

  console.log('found: ', find(myStack, 2));

  console.log(myStack);



//you dont have to implement a stack. and so long ans you know what stack does, jsut make the while loop.
//lodash - lets you make object and array comparisons.
