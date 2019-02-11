//1.

function evens (arr) {
  return arr.filter(el => el % 2 === 0)
}

console.log(evens([1,2,3,4,5]));

// reduce method. not working:-----
// function evensRed(arr) {
//   return arr.reduce((acc, curr)=> {
//     return acc.push(curr => curr % 2 ===0)
//
//   }, [])
// }
// console.log(evensRed([1,2,3,4,5]));


//----reduce. working version:

function evensRed(arr) {
  return arr.reduce((acc, curr)=> {
    if (curr % 2 ===0) {
      acc.push(curr)
    }
    return acc;

  }, [])
}
console.log(evensRed([1,2,3,4,5]));


//corey:

function evensRedC(arr) {
  let newArr = arr.reduce((acc, curr)=> {
    if (curr % 2 ===0) {
      acc.push(curr)
    }
    return acc;

  }, [])
  return newArr;
}
console.log(evensRedC([1,2,3,4,5]));


//------- question:

let arr = [1,2,3,4]

console.log(arr.push(14));//=> length : push evalustes to the length of the array. that is the return value of push. //=> 5

console.log(arr); //[1,2,3,4,14]
