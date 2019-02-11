// Tues Oct 9 2018
//
// WARM UP - write a code block that takes in an array and logs an object of the count of each element. Exp arr = ["h", "e", "l", "l", "o"]. should give back {h: 1, e: 1, l: 2, o: 1}

let arr = ["h", "e", "l", "l", "o"]
let obj = {}

for (let i=0; i<arr.length; i++){
  if(obj[arr[i]] === undefined){
    obj[arr[i]] = 1
  }else{
    obj[arr[i]] += 1;
  }
}
console.log(obj);


//Reed's solution:

// let myArr = ["hello", "e", "love", "love", "o", "e"];
// let answer = {};
//
// for (let i = 0; i < myArr.length; i++){
//   if(!answer[myArr[i]]) {
//     answer[myArr[i]] = 1;
//   }else{
//     answer[myArr[i]] += 1;
//   }
// }
// console.log(answer);


//Read using SPLIT:

// let myStr = "hello, love, ever, love, ever, ever"
// let myArr = myStr.split(" ")
// let answer = {};
//
// console.log(myArr);
//
// for (let i = 0; i < myArr.length; i++){
// // myArr[0] === "h"
//   if(!answer[myArr[i]]) {
//     answer[myArr[i]] = 1;
//   }else{
//     answer[myArr[i]] += 1;
//   }
// }
// console.log(answer);


// let arr = [0, 1, 2, 3]
// let k = 3
// let ans = []
//
// //eyeballing: two pairs : [0,3] and [1,2]
//
// for (let i=0; i<arr.length-1; i++){
//   for (let j=i+1; j<arr.length ; j++)
//   if( i!==j && arr[i] + arr[j] === k){
//     //micro-optimizations - but does not optimize the time complexity at it approaches n.
//     ans.push([arr[i]], arr[j]);
//   }
// }
// console.log(ans);
//
// //change ans to obj:
// let obj = {}
// for (let i = 0; i < obj.length ; i ++){
//   if (!obj[ k - arr[i] ]) {
// // and search for the missing one.
//   }
// }





// NOTES:
// 1.
// for (let i = 0; i < 100 ; i ++){
//   console.log(i);
// }

//2.
// let myArr = [99, 32, 6, 12]
//
// for (let i = 0; i < myArr.length ; i ++){
//   // console.log( i );
//   // OR
//   console.log( myArr[i] );
// }


//arrays 13.

//mine:

// let min = 2
// let max = 12
// let step
//
// for (let i = min; i <= max; i += step){
//   if(step){
//     console.log(i);
//   }else{
//     step = 1
//     console.log(i);
//   }
// }


//reed:
// using objects:
// 13

// let inputNumns = {
//   min: 4,
//   max: 10,
//   step: 2
// }
//
// if(!inputNums.step){
//   inputNumns.step= 1;
// }
//
// let arr = []
//
// for(let i = inputNums.min; i<=inputNums.max; i +=inputNums.step){
//   arr.push(i);
// }
// console.log(arr);
//
// //OR 13
//
// let min = 2;
// let max = 12;
// let step = 5;
//
// let arr = [];
//
// if(!step){
//   step =1;
// }
//
// for (let i = min; i<=max; i +=step){
//   arr.push(i)
// }
//
// console.log(arr);
//
// //13
//
// let inputNumns = {
//   min: 4,
//   max: 10,
// }
//
// inputNums.step = inputNumns.step || 1;
// }
//
// let arr = []
//
// for(let i = inputNums.min; i<=inputNums.max; i +=inputNums.step){
//   arr.push(i);
// }
// console.log(arr);

//
//arrays 15.

let arr = [0, 1, 2, 3]
let target = 3;

let answer = [];

// a double for loop:
for (let i = 0; i< arr.length -1; i++){
  for (let j= i + 1; j < arr.length; j++) {
    if(arr[i] + arr[j] === target){
      answer.push( [i, j] );
    }
  }
}

console.log(answer);

//.
