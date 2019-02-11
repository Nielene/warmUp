function sum (num1, num2) {
  let total = 0;
  for (let i = num1; i <= num2; i++) {
    total += i;
  }
  return total;
}
console.log(sum(5,10));

//corey mentioned a math formula: see README.md: ------
function sum (start, end) {
  return (end - start + 1) * (end + start)/2
}
//REALLY? I think:
function sum (start, end) {
  return (end - start + 1)/2 * (end + start)
}


//--------------corey:---------
sum(5,10);
function sum (start, end) {
  let total = 0;
  for (let i = start; i <= end; i = i + 1) {
    total += i;
  }
  return total;
}
//in es5 have hoisting, where the function can be put anywhere and still found.

//2.-----------------------


function sumForEach (arr) {
  let total = 0;
  arr.forEach(el => total += el)
  return total;
}
console.log("here",sumForEach([5,6,7,8,9,10]));

//----Jacky:-------

function sumOfArray (array) {
  let total = 0;
  array.forEach(function(element) {
    total = total + element
  })
  return total;
}
console.log(sumOfArray([5,6,7,8,9,10]));


//----corey:--------
// if looping through an array, can use forEach.
function sumBody (arr) {
  let output = 0;
  arr.forEach((el) => {
    output += el
  })
  return output;
}
console.log("hereC",sumBody([5,6,7,8,9,10]));


//3.---------------------


function multiply(arr, num) {
  let mapped = [];
  arr.map((el) => {mapped.push(el * num)})
  return mapped;
}

console.log("herem", multiply([1,2,3], 4));

//3.------Jacky---------------

function multiplyJ(arr, num) {
  let mapped = arr.map((el) => (el * num))
  return mapped;
}

console.log("hereJ", multiplyJ([1,2,3], 4));

//3.-----------
function multiplyJ2(arr, num) {
  let mapped = arr.map((el) => {return (el * num)})
  return mapped;
}

console.log("hereJ2", multiplyJ2([1,2,3], 4));

//3.-----------
function multiplyJe5(arr, num) {
  let mapped = arr.map(function(el) {return (el * num)})
  return mapped;
}

console.log("hereJe5", multiplyJe5([1,2,3], 4));

//3. ----corey: ------

//map takes in a callback. a callback is a function (that is used as an argument). it is a cunciont (just like for each) that gets called on every element. it stores the results in an array and returns that array after the funciton is called.

// function add2 (el) {
//   return el + 2
// }
// //-----
// const add3 = (el) => {
//   return el + 2
// }
//
// [1,2,3].map(add3)
// //-----
// [1,2,3].map(el => {
//   return el + 2
// })
//----Re: from me and J:--
function multiplyJ2(arr, num) {
  arr.map((el) => {return (el * num)})
}

console.log("hereC2", multiplyJ2([1,2,3], 4));
//------

function multiply(arr, num) {
  return arr.map(el => {
    return el * num
  })
  // return answer;
}

function multiply(arr, num) {
  let answer = arr.map(el => {
    return el * num
  })
  return answer;
}

function multiply(arr, num) {
  arr.map(el => {
    return el * num
  })
}

console.log(multiply([1,2,3], 4));
const add2 = el => {
  return el + 2
}

let arr = [1,2,3];
console.log(multiply([1,2,3], 4));
console.log(arr);

const add2 = el => {
  return el + 2
}

//
