let list1 = [
  { firstName: 'Maria',
    lastName: 'Y.',
    age: 30,
    language: 'JavaScript'
  },
  { firstName: 'Victoria',
    lastName: 'T.',
    age: 35,
    language: 'Python'
  }
]

//--------------

// const getAverageAge = arr => {
//   let sumOfAges = 0;
//   let average;
//   let array1 = []
//   for (let i = 0; i < arr.length; i++) {
//     sumOfAges += arr[i].age
//     // return Math.round( sumOfAges / arr.length)
//     // array1.push(average)
//
//     // console.log(arr);
//     // console.log(arr[i].age);
//   }
//   return Math.round( sumOfAges / arr.length)
//   // return array1;
//
// }
//
// console.log(getAverageAge(list1));


//--------forEach

// function getAverageAge (array) {
//   let sumOfAges  = 0;
//   array.forEach (personObj => {
//     sumOfAges += personObj.age;
//   })
//   return Math.round(sumOfAges/ array.length)
// }
// console.log(getAverageAge(list1));

//-------------------Reduce

// const getAverageAge = arr => (
//   Math.round(arr.reduce((acc, currEl) =>
//     acc.age + currEl.age
//   ) / arr.length
// )
//
// console.log(getAverageAge(list1));

//es6 - if your funciton is in perentheses instead of curly brackets, everythign in it will return - an implicit return.

//------ explicit
// const getAverageAge = arr => {
//   return Math.round(arr.reduce((acc, currEl) => {
//     return acc.age + currEl.age
//   }) / arr.length)
// }
//
// console.log(getAverageAge(list1));

//------------

const getAverageAge = arr => {
  return Math.round(arr.reduce((acc, currEl) => {
    return acc + currEl.age
  }, 0) / arr.length)
}

console.log(getAverageAge(list1));
