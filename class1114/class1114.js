// const SumProd = () => {
//   let productSum = 0
//
//
//   for (let i = 0; i < array.length; i++) {
//
//     if (!arr.isArray(array[i])) {
//       productSum += (array[i] + array[i]) * 1
//       arr.pop()
//
//     } else {
//
//     }
//
//   }
// }
// // use myFlatten concepts
// //recursively is best option. to call it on itself for every new array. But...
// //1. loop through. if (!isArray)
//
// let arr = [1, 2, [3,4, [5,6]]]
//

// //Reed's solution: ----------------
//
//  //1. this solution does NOT add WEIGHT to each sum based on depth: --------
//
// const sum = input => {
//
//   if (!Array.isArray(input)) {
//     return input;
//   } else if (input.length === 1){ //if is an array
//     return sum(input[0]); //slicing off parts of teh array (it is perfectly flat already)
//   } else {
//     //return input[0] + sum();
//     let sliced = input.slice(1);
//     console.log(sliced); //slicing off parts of teh array
//     return sum(input[0]) + sum (sliced)
//   }
// }
//
// console.log(sum([[[1]],1,1,[2],1]));


//2. still only works with 2 dimensional array. on depth 2. -----------------------------
const sumWeight = arr => {
  let output = arr.reduce((acc, el) => {
    let mult = 1;
    let tracker = el;
    if (Array.isArray(el)) {
      mult++;
      tracker = el.reduce((accu, num) => {
        return (accu + num * mult)
      }, 0);
    }
    return acc + tracker;
  }, 0);
  return output;
}

console.log(sumWeight([[1],1,1,1, [2], 1])); //10
console.log(sumWeight([[1],[[1]],1,1, [2], 1])); //11
