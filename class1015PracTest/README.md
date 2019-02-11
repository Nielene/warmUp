#WARM UP!
Write a transpose function that takes in a matrix and transposes. ex [[1, 2, 3], [4, 5, 6] => [[1, 4,], [2, 5], [3, 6]]


# COREY: myREDUCE ------------


# the test:
github. web unit 1 practice exam:
make a file
closne download:

git closne

cd web unit mid exam
npm install - reinstall the ... - nmp install

clear
npm test

in folder atom:
test - unit_.... js specs

"random" : false - not true!

specs on onde side probs on teh other:
unit_md.js vs  unit_lj;jlj;.js

```js
1.
look at specs window: array = [1,2,3]
main window:

function double(array){
return array.map(el +> el * );
}
//calling it is unnecessary:
//double(10) . could use any arg.

2.
function factors(num){
  let output = [];
  for (var i = 1; i <= num; i++) {
    if(num % i ===0) {
      output.push(i)
    }
    return output
  }
}

3. function median (arr){
  let sortedArray = arr.sort((a,b)=>a-b);
  let midIdx = Math.floor(sortedArray.length / 2)
  if(sortedArray.length){
    return sortedArray[midIdx]
  } else {
    return sortedArray[midIdx -1] + sortedArray[midIdx]) /2
  }
}

4.
function product(arr){
  if(arr.length ===0){
    return 0;
  }
  return arr.reduce((acc, curEl) => {
    return acc * curEl
  })
}

5.
function largest(arr) {
  arr.reduce((acc, curEl) => {
    if(acc > curEl) {
      return acc;
    } else {
      return curEl;
    }
  })
}

function largest(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]> largest){
      largest = arr[i];
    }
  }
  return largest
}


function largest(arr) {
  return Math.max(...arr)
}


6.
function and(arg1, arg2){
  return !!(arg1 && arg2)
  // !! gives the result of an empty string
  // ! gives teh opposite
  // ! turns somethieng that is not a boolean INTO a boolean = a datatype conversion
  // !(something that is) - this thing is false and a boolean
  // !! => if arg 1 and arg2 return true, else return false.
}


function and(arg1, arg2){
  if(arg1 && arg2) {
    return true;
  } else {
    return false;
  }
}

it is using ternery: arg1 && arg2 ? : true : false



!!"cat" === true is exactly true bc the !! converts it into a boolean.

"cat" === true   cat is true but it is not actually the boolean true
"cat" === true // is not precisely true
//false

if checks not if true or false but if truthy or falsey.  

"cat" || "dog"
//"cat"  - good enough. so will stop w/o even seeing "dog"
// first qualifying truthy value was "cat"

"cat" && "dog"
//"dog" - bc needed to check "dog". it qualifies. returns 'dog'


7.
function includes(arr, target) {
  let exists = false;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]=== target) {
      exists = true;
      // return true;
    }
  }
  return exists
}

function includes(arr, target) {
  // let exists = false;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]=== target) {
      // exists = true;
      return true;
    }
  }
  return false;
}


8.
function disemvowel (str){
  let result = "";
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if(!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

//vowels.includes("a")
// // true

"aeiou".includes("a") // true
"aeiou".includes("m") // false


```

# REED and COREY : callbacks:

```js

arr = [1,2,3]
answer = []

arr.forEach((el) => {
  answer.push(el + 1);
})
```

Pain points of for loop:
why need to stipulate i = 0 and i = end of array. Of course want to iterate through entire array! and i++ i dont care tthat it is lookin g at each and every element. it is supposed to! also, i is not even a part of the array, its something we have to use to key into the array. WHY!!

I WANT to do all that and not have to say so.

that is the use of "el". it is "arr at i" - arr[i].

it requires a little bit of trust! "el" really IS keying into the array. el at some point ,is going to be q single element of teh array.

not have to articulate where the end of the array is, forEach just knows that when it hits the end of the runway, stop. = the difference between a model and a supermodel.

can console.log(el) - see what it is!
same for console.log(answer).

```js

arr = [1,2,3]
answer = []

arr.forEach((el, i) => { // give i back
  answer.push(el + 1);
})

```
el = 1  at  i = 0
forEach makes i available to me as an optional argument



# What can't you do with a forEach that you could do with a for loop:

to loop outside the context of an array, can use it:

```js
for(let i = 0 ; i < 10 ; i ++){
  console.log(ni)
}
```

```js
arr.forEach(...)

```

```js
//the subj will be the arg of teh cb
// cb is func definition, put input in it and ...
function myCallback(subj, cb) {
  return cb (subj);
}

myCallback (2, (int) => {
  return int * 2;
}) // will throw err if the second arg is not invoked. int = subj

//can invoke uninvoked functions into your arguemnt and invoke it in the cb function

console.log everywhere. to see what everything. is.


```










```js











```




//
