WARM UP! Write a function that determines if a string is a palindrome without using the function reverse. Palindrome is a word that can be spelled forwards and backwards. ratstar



//Corey: afternoon

line 62

Implement myReduce in multiple ways:


```js
Array.prototype.myReduce = function (callback, acc) {
  let startingIdx = 0;
  if (!acc) {
    acc = this[0]
    startingIdx++
  }
  for (let i = startingIdx; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

let arr = [1,2,3,4,5]
let reducer = arr.myReduce((acc, currEl) => acc + currEl, 5)

console.log(reducer);

```


```js
//setting prototype is ES5 so it does not work well with ES6 prototype
Array.prototype.myReduce = function (callback, acc) {
  //set starting startingIndex
  //if we don't have an accumulator, set it to the first index of the  array and set staring index to 1.
  //loop though the array and reset the accumulator, calling the callback on each startingIndex
  //return the accumulator
};

```








//
