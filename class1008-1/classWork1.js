// FOR LOOP:

// let result = ""
//
// for (let num = 0; num<=50; num++){
//   // console.log(num);
//   if(num%2 ===1){
//   // if(num%2 !=0)
//     // console.log(result += num);
//     // result = result + num
//     result += num
//   }
// }
// console.log("Final result: " + result);

//WHILE LOOP:

// let result = ""
// let num = 0
//
// while (num<=50){
//   if (num %2 != 0){
//     result += num
//   }
//   // console.log(num)
//
//   num++
// }console.log("Final result: " + result);


//Corey's Solution:
// For Loop:

// let result = "";
// for(let i = 0 ; i < 50 ; i++) {
//   if (i % 2 === 1){
//     result += i ;
//   }
// }
//
// console.log(result)


// While Loop:

let result = "";
let i = 0;

while (i<=50){
  if (i%2 !==0) {
    result += i + ","
  }
  i++
}
console.log(resutl)

//N.B. i%2===1  or  i%2!==0  or i%2 != 0  or even i%2 alone
//N.B: a string + anything = a string
