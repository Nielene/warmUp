// WARM UP! Write a function, fibs(), that accepts an integer as an argument and returns that number of numbers from the Fibonacci Sequence.
//
// This is the Fibonacci Sequence: https://www.mathsisfun.com/numbers/fibonacci-sequence.html


const fibs = (int) => {
  let fibo = [0,1];

  for (let i = 0; i > fibo.length; i++) {
    fibo.push(fibo[i-1] + fibo[i-2]);
    // console.log(fibo[2]);
  }

  return fibo
}
console.log(fibs(4));


// const fibs = (int) => {
//   let fibo = 0
//   for (let i = 0; i < fibo.length; i++) {
//     fibo[i] += fibo[i-1] + fibo[i-2];
//   }
//   return fibo;
// }
//
// console.log(fibs(1));

//--------Reed-------------


// const fibs = (n) => {
//   let arr = [];
//   if (n>=2) {
//     arr = [0,1]
//   } else if (n === 1) {
//     arr = [0]
//   }
//
//   while (arr.length < n) {
//     arr.push(arr[arr.length - 2] + arr[arr.length - 1])
//   }
//
//   return arr;
// }
//
// console.log(fibs(4));

//--------Reed-------------


// const fibs = (n) => {
//   let arr = [0,1]
//
//   if (n<=2) {
//     return arr.slice(0,n);
//   }
//
//   while (arr.length < n) {
//     arr.push(arr[arr.length - 2] + arr[arr.length - 1])
//   }
//
//   return arr;
// }
//
// console.log(fibs(4));

//-----------Reed - Recursion --------
// today's lesson.




//
