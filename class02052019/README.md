reed [9:56 AM]
@channel WARM UP! Implement four classes: Stack, Queue, Node, and Linked List.

//------------- Reed: ---------------

1. ask clarifying questions

Node
-> value
-> next

Linked List
-> head
-> size

-> add (node)
-> remove At Ind (i)


2. Planning:

Node class
-> define value
-> define next  
    -> default null (instead of undefined)

LL class
-> define head (def: null)
-> define size (def: 0)

-> add      (add and remove LL will take up the majority of space during White-boarding.)
    -> Check for head
        -> if no head, make node head
        -> if head, loop through list until null  (finds the tail - recursively or while loop)

(in singly linked list, nodes are connected by their previous node => to get to 2, use 1 and call next.)
to remove 2, don't 'delete' 2, remove associations to 2. => (1.next = 3)

-> removeAt(ind)
    -> get to n - 1 .. node
    -> remove 'next' association

              **FIRST**

      1 ------>  2  -------> 3
        <------     <-------

              **THEN**

      ,______________________,  
      |                      |
      V                      |
      1 ------>  2  -------> 3
      |                      ^
      |______________________|    

the associations 2 has with them doesn't matter bc will never access 2.  


3. implement with code:

```js
this.add = (val) => {
  let newN = new Node (val)
  if (!this.head) {
    this.head = newN;
  } else {
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next
    }
    currNode.next = newN
  }
}

```
```js
this.removeAt = (ind) => {
  if (ind > this.size) {
    return -1
  }
  let currNode = this.head
  for (let i = 0; i < ind; i++) {
    currNode = currNode.next
  }
  if (currNode.next.next) {
    currNode.next = currNode.next.next
  } else {
    currNode.next = null;
  }
}
```

1. ask clarifying questions
2. plan
3. implement with code
4. plug in inputs/check in everything is good - as the interviewer if they have any values they want me to plug in.
