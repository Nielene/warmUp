// WARM UP!
//Write a function that removes all duplicates in an array. Exp [1, 2, 1, 1, 3, 2] // => [1, 2, 3]










//------------------------Or---------

// const removeDups = arr => {
//   let result = {};
//   for (let i = 0; i < arr.length; i++) {
//     // let temp = arr[i];
//     // if (result[temp]){
//       // result[tempt] = result[temp] + 1
//     // }else {
//       // result[temp] = 1;
//     // }
//     result[arr[i]] = arr[i]
//   }
//   // return Object.keys(result)             // but resulting in strings
//   return Object.values(result)  // now returning numbers!!! DONE!
// }
// console.log(removeDups([1,2,2,1,1,1,3,2])); // but resulting in strings

  //in console: ----------------
// let obj = {a: "a"}
// obj -> {a: "a"}
// obj["a"] = "b"    -> "b"
// obj   -> {a: "b"}

//SUMMARY:--------------------------
// const removeDups = arr => {
//   let result = {};
//   for (let i = 0; i < arr.length; i++) {
//
//     result[arr[i]] = arr[i]
//   }
//   // return Object.keys(result)    // but resulting in strings
//   return Object.values(result)  // now returning numbers!!! DONE!
//   //Object.keys  &  Object.values is so vital and important
// }
// console.log(removeDups([1,2,2,1,1,1,3,2])); // but resulting in strings


//---------Or---------
const removeDups = arr => {
  let result = {};
  arr.forEach (el => result[el] = el);
  return Object.values(result)
}
console.log(removeDups([1,2,3]));


// ----------------console

[1,2,3] === [1,2,3]  // --> false
