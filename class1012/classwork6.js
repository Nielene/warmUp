// const rotate = (arr, num = 1) => {
//   let newArr = []
//
//   for(let i=0; i<arr.length-1; i++){
//
//     // if(arr[i]=)
//
//     let rotateArr =
//     newArr[i+num].push(arr[i])
//   }
//   return rotateArr
// }
//
// rotate([1,2,3], 2)


// corey -----------

function rotate (arr, shiftNum) {
  // we do NOT need a new array. we dont actually have to shift it.

let newArray = arr.slice(0); // not necessary

  if(shiftNum > 0) {
    for(let i = 0; i< shiftNum % arr.length; i++) {
        // newArray = (newArray.push(newArray.shift())
        newArray.push(newArray.shift()) //dont reassign
    }
  } else {
    for(let i = 0; i < Math.abs(shiftNum)% arr.length; i++){
      newArray.unshift(newArray.pop())
    }
  }
return newArray;
}

// [1,2,3]
// 1 // => [2,3,1]  // to left
// -1 // => [3,1,2]  // to right

// let arr = [1,2,3]
// console.log(rotate(arr, -1));
// console.log(rotate(arr, 1000)); //purpose of modulo // 1000%3 same as 1%3 when use modulo
// console.log(rotate(arr, 1));
// // rotate(arr)
//
// // let check = arr.push(6) // number of elements
// // console.log(check);





//
