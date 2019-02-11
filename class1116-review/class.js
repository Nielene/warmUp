// let str = "heyyyy";
// let str2 = "uhh";
//
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
//
// for (let i = 0; i < str2.length; i++) {
//   console.log(str2[i]);
// }
//
// //------------------------------
//
// let wrds = "Hey";
// let wrds2 = "Uhhh";
//
// const logEachChar = str => {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
// };
//
// // console.log(logEachChar(wrds));
// logEachChar(wrds)
//
// //------------------------------
//
// function addNums(num1, num2) {
//   return num1 + num2;
// }
// console.log(addNums(1,1) === 2);
// console.log(1 + 1);
// console.log(2);
//
// //------------------------------
//
//
// let apiResponse = {
//   message: "success",
//   data: ["dog", "cat", "weasel"]
// };
//
// function processResponse(res) {
//   return res.data.map(animal => {
//     return animal.toUpperCase();
//   })
// }
//
// console.log(
//   processResponse(apiResponse)
// );
//
// let precessedInfo = processResponse(apiResponse);
// // processedInfo === ["DOG", "CAT", "WEASEL"]
//

//------------------------------

let myArr = [];

function processArr(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
}

myArr = myArr.concat("stuff"); //equal to:
// myArr.push("stuff")

console.log("before", myArr); // []
let processedInfo = processArr(myArr);
console.log(processedInfo); // undefined
//undefined bc not returning anything in th...?
console.log("after", myArr); //[0,1,2,3,4]


//------------------------------
//or i could return the arr in the funciton:
// so function's call value will no longer be undefined.
// so now it makes sense to save it to a variable

let myArr = [];

function processArr(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  return arr;
}

myArr = myArr.concat("stuff");

let processedInfo = processArr(myArr);
console.log(processedInfo);

//-----------------------------
//1. ways to define a funciton:

//funciton style (es5),
function myFunc() {}
// es6 style
const myFunc = () => {};
// constructor style aka class or else do the es5 constructor stuff.
class MyClass {
  constructor() {}
  myMethod() {}
}

class Teacher { //defining how teahcer shold behave
  constructor(name, style) {
    this.name = name;
    this.style = style;
  }
  myMethod() {}

}

//2. ways to call a funciton:

//funciton style:
myFunc();
//method style:
let theClass = new MyClass();
let theClass = new Teacher("Reed", "Good"); //now can use methods on the called function
theClass.myMethod();
