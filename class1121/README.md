write a function that takes in an array as an argument and returns the product of all numbers in that array. Write one version with a for loop and the second with a for each loop.


//2.
write a function index * element. that takes in an array and returns an array with every element multiplied by its index.
Use Map
exp: timesIndex([1,2,3]) //=> [0,2,6]


//3.
write a funciton that takes in an array of words. i want every other word to be capitalized and lowercased, use map.

switchCase(["hello", "class", "how", "are", "you"])
//=> ["HELLO", "class", "HOW", "are", "YOU"]



//4.
write another product function but this time use reduce.

reduce (callback, optional initialValue)

callback -> accum, currentEl
(i.e. previousValue, currentValue)

if (initialValue) =>
acc = initialValue

if !initialValue
=> acc = arr[0] && currEl = arr[1]

---------- corey: ---------
COREY note: reduce takes in a callback and an OPTIONAL initial value.
note this setup:
```js
function product(arr) {
  return arr.reduce( *function(acc, currEl){}* , *iniVal*)
}
```



//5.
write a funciton that takes in an array of numbers and returns an array of _only_ the even numbers. Use Filter.


//6.
write a getEvens with reduce.
\N.\B.
let arr = [1,2,9]
console.log(arr.pop()) ==> 9
console.log(arr.push(57)) ==> 4 - the length of the array!


acc :    []   [2]   [2,4]
currEl :  2    3     5

5%2 are you 0. no. so return acc.


acc = callback(acc, currEl)



//7.
write a funciton that takes in a matrix, each inner array is made up of two elements. Make these elements a key and value in an object. Use REDUCE .

makeIntoObject(
  [["hello", "corey"],
  ["age", 100]])

// => {hello: "corey", age: 100}


//notes:

obj = {};
obj["ban"] = "yell"; //setter
*acc[currEl[0]] = currEl[1]*
*{}<-currEl[0] = currEl[1]*
  *hello        =    corey*
  *key        =    value*
obj = {ban: "yell"}

the obj is hte key:

obj["ban"] //=>"yell" //getter


//8. concat:

let arr = [1,2,3]
let another = [4,5,6]
arr.concat(another)
//[1,2,3,4,5,6]
log(arr) // 1,2,3

nonmutating

//9.
DOM manipulation:
next file.



//10 .
recursive fucntion

```js
function call() {
  call()
}
```
RECURSION:
a function that calls itself
need a base case
base case tells us to stop and return concrete data;
inductive step. the step that moves us towards the base case.


//10.
write a recursive function taht takes in an array and sums all elements.

//11.
write a recursive function of includes. takes in an array and a target, returns a boolean of true and false.

include([12, 2, 33, 43, 4], 33) //=> true


// 12. fibs

write a funciton that reutnrs the fib number that is passed in.

[0, 1, 1, 2, 3, 5, 8, 13]

fibs(4) // 2


//
