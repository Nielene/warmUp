// let str = "ratstar"

// const palForward


// const palindrome = (str)=> {
//   // if (str.length%2 ===0){
//     for (i = 0; i < str.length; i++){
//         console.log(str[i]);
//       for (j = str.length -1; j >= 0; j-- ){
//         console.log(str[j]);
//         if(str[i] = str[j]){
//           console.log(str[i]=str[j]);
//           return "this is a palindrome."
//         } else {
//           return "this is NOT a palindrome."
//         }
//       }
//     }
//   // }
//
// }


// console.log(palindrome(str));


//CLASS:

// function palindrome(str) {
//   let checkword = "";
//   for (let i = str.length - 1; i >=0 ; i--){
//     checkword +=str[i]
//   }
//   return str === checkword
// }
//
// console.log(palindrome("ratstars"))





// const pali = (str) => {
//   let i = 0;
//   let j = str.length - 1;
//   while(i<j){
//     if (str[i]!== str[j]){
//       return false;
//     }
//     i++
//     j--
//   }
//   return true;
// }
// console.log(pali("carac"))

//--------



// Afternoon - implement myReduce in multiple ways:
// line 5


//add it to the Array.prototpe

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

// Rinse and repeat:


Array.prototype.myReduce = function (callback, acc) {
Array.prototype.myReduce = function (callback, acc) {
Array.prototype.myReduce = function (callback, acc) {
Array.prototype.myReduce = function (callback, acc) {
Array.prototype.myReduce = function (callback, acc) {

};

};
};
};
};







  let startingIndex = 0;
  if (!acc) {
    acc = this [0]
    startingIndex++
  }

let startingIndex = 0;
if (!acc) {
  acc = this[0];
  startingIndex++
}

let startingIndex = 0;
if (!acc) {
  acc = this[0];
  startingIndex++
}

let startingIndex = 0;
if (!acc){
  acc = this[0];
  startingIndex++
}

let startingIndex = 0;
if (!acc){
  acc = this[0];
  startingIndex++
}

let startingIndex = 0;
if (!acc){
  acc = this[0];
  staringIndex++
}











  for (let i = startingIndex; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

  for (let i = startingIndex; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;






let arr = [1,2,3,4,5]
let reducer = arr.myReduce ((acc, currEl) => acc + currEl, 5)

console.log(reducer);








setTimeout(() => {
  console.log("hello")
}, 3000)


setTimeout(() => {
  console.log("Print in 5 second")
}, 5000)

















//
