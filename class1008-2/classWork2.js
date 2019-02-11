let str = "pear"
  if (str.length % 2 !==0){
    console.log(str[(str.length-1)/2])
  }else{
    console.log(
       str [Math.floor(str.length/2) -1]  + str[Math.ceil (str.length/2) ]
    )
    // console.log(str[(str.length-1)/2])
  }


// // Corey's Solution:
//
// let str = "eart";
// let midIdx = Math.floor (str.length /2);
// if(str.length % 2 ===1) {
//   console.log(str[midIdx]);
// }else{
//   console.log(str[midIdx -1 ] + str[midIdx]);
// }
//
// //if(str.length % 2 === 1)
// // console.log(str.slice(midIdx -1 , midIdx +1));
