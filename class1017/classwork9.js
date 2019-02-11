// const capitalizeWithExceptions = (str, arr) => {
// // split str ing itnot an array of words
// let wordArr = str.split(" ")
// //loop throug the array
// let capitalizedArr = wordArr.map((el) => {
//   if (!arr.includes(el)) { // have to optimize or else will have to loop through entire array constantly
//     return (el[0].toUpperCase() + el.slice(1));
//   } else {
//     return el
//   }
// })
//
// return capitalizedArr.join(" ")
// }
//
// console.log(
//   capitalizeWithExceptions("it's a beautiful morning", ["it's", "a"])
// );

// write an if statement to check to se if thae world in our string is in the exeption array
//if not, capitalize the first character
// if so, dont do anything to it
// push it into a new array and join that array

//Expected log: "it's a Beautiful Morning"



//use forEach and then map

const capitalizeWithExceptions = (str, arr) => {
// split str ing itnot an array of words
let wordArr = str.split(" ")
//loop throug the array

let noGoObj = {};

arr.forEach((el) => {
  noGoObj[el] = true;
})

let capitalizedArr = wordArr.map((el) => {
  if (!arr.includes(el)) { // have to optimize or else will have to loop through entire array constantly
    return (el[0].toUpperCase() + el.slice(1));
  } else {
    return el
  }
})

return capitalizedArr.join(" ")
}

console.log(
  capitalizeWithExceptions("it's a beautiful morning", ["it's", "a"])
);


//


let arr = [1,2,3,4,5];

arr.forEach((el) => {
  console.log(el)
})


arr.forEach((el) => {
  console.log(el + 1);
})

//

arr.forEach((el) => {
  console.log(el)
})
arr.forEach((el2) => {
  console.log(el2);
})        // 5*5 instead of 5*2







//
