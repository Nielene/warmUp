// WARM UP: Implement a recursive version of myMap. Do not mutate / modify the original array

//iterative solution: mine:-----
// Array.prototype.myMap = function (callback) {
//   let output = [];
//   this.forEach(el => {
//     output.push(callback(el))
//   })
//   return output;
// };

//recursive solution: mine:-------

Array.prototype.myMap = function (callback) {
  let output = []; // keeps redeclaring this output as an empty array. put this as an argument that wont keep recursively emptying itself.

  if (output.length === this.length) {
    return output;
  }

  this.forEach(el => {
    output.push(callback(el))
  })
  return Array.prototype.myMap()
};

// my test1:
[1,2,3].myMap(el => {
  console.log(el * 2)
});

// //my test2:
// let arr = [1,2,3]
// const myMap = (array, callback) => {
//   array.theMap(el => callback(el * 2))
// }
// console.log(myMap(arr, (el) => {
//   console.log(el);
// }));

//Corey: 1 ---------------
Array.prototype.myMap = function (callback, output=[], idx=0) {
  if (this.length === output.length) {return output}
  output.push(callback(this[idx]))
  return this.myMap(callback, outp ut, idx++)
  // return this.myMap(callback, output, idx +=1)
};

let arr = [1,2,3,4,5]
arr.myMap(el => el * 2)


//Corey: slight change: -----------
Array.prototype.myMap = function (callback, output=[], idx=0) {
  if (this.length === output.length) {return output}
  output.push(callback(this[idx]))
  // return this.myMap(callback, outp ut, idx++)
  return this.myMap(callback, output, ++idx)
};

// let arr = [1,2,3,4,5]
// arr.myMap(el => el * 2)

let a = 2
console.log(++a);
console.log(a);
