function sum(arr) {
  let total = 0;
  if (arr.length === 0) {
    return
  }
  total += arr.pop()

  return sum(arr)
}

console.log(sum([1,2,3]));

//------ corey: --------

function sumC(arr) {
  if (arr.length === 0) {return 0}
  return arr.pop() + sumC(arr)
        // 6      +    0
}

console.log(sumC([6]));
console.log(sumC([6,2,2,8]));

//how do we step towards the base case? arr.pop()
// teh simplest one: base case.
// and then ONE STEP above that and attach it.
// get it to work and it should work for th e others.

//11.----------mine: ------------------
function include(arr, target) {
  if (arr.length === 0) { return false}
  else if (arr.pop() === target) {return true}

  return include(arr, target)
}

console.log(include([],8)) // false
console.log(include([8],8)) // true
console.log(include([4],8)) // false
console.log(include([12, 2, 33, 43, 4],33))

//------------corey: ---------------
// two base cases: one for false and one for true.
//so, when do we want to return TRUE?

function includeC(arr, target) {
  if (arr.length) {return false}
  if (arr[0] === target) {return true}

  return include(arr.slice(1), target)

}

console.log("here", includeC([2], 4));
console.log("here", include([12, 2, 33, 43, 4],33))//true;

// let arr = [1];
// arr.slice(1);

// 12. -------------

// function fibs(index) {
//   let arr = [0, 1, 1, 2, 3, 5, 8, 13];
//
//   if (arr.length === 0) {return}
//
//   return fibs(arr[index])
//
// }
//
// console.log(fibs(4));


//------- corey gave base case 1: -----------

function fibs (num) {
  if (num < 2) return num;
  else if (num >= 2) {return arr[num-2] + arr[num-1]}

  return fibs(num)
}

let arr = [0, 1, 1, 2, 3, 5, 8, 13];
console.log("heres", fibs(5));

//----------- corey: -----------

function fibsC (num) {
  if (num < 2) return num;

  return fibsC(num - 2) + fibs(num - 1)
}

let arr1 = [0, 1, 1, 2, 3, 5, 8, 13];
console.log("heresC", fibsC(2));
console.log("heresC", fibsC(3));
console.log("heresC", fibsC(0));
fibsC(4); //3
fibsC(1) = 1 //bc it hits out base case

fibsC(2)
fibsC(0) + fibs(1)

fibsC(3)
fibsC(1) + fibsC(2)
  1  +  fibsC(0) + fibsC(1)
  1  +     0    +    1
  = 2


//
