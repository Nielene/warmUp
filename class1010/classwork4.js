

// function stringCompression (str){
//
//   compress = ""
//
//   for (let i=0; i<str.length-1; i++){
//     for (let j = i+1; j<str.length; j++){
//       if (arr[i]===arr[j]){
//         compress[str[i]]=1
//       }
//     }
//     if(!compress[str[i]]){
//       compress[str[i]]=1
//     }else{
//       compress[str[i]] +=1
//     }
//   }
//     // compress = str.
//     return compress
// }
//
// console.log(stringCompression("aaabbcca"));


//

//corey:

const compress = (str) => {
  let counter = 0; // 1 - 4
  let output = "";
  let currentChar = str[0]; // a

  for (i = 0; i < str.length; i++){
    if (str[i] === currentChar) {
      counter++;
    } else {
      output += currentChar + counter; //a4 so will exit for loop and print "output += cC + counter" line .
      //bc the "else" means it moved on to b =>not a; so immediately push the a4 to the return output;

      currentChar = str[i];
      counter = 1;
    }
  }
  output += currentChar + counter;  //let last a show up
  return output;
}

console.log(compress("aaaabbccca"))



// reed:
// const compressString = (str) => {
//   let currentChar;
//   let count;
//   let answerStr = "";
//
//   for (let i = 0; i < str.length; i++) {
//     if (!currentChar && !count) {
//       // starting things off.
//       currentChar = str[i];
//       count = 1;
//     } else if (str[i] !== currentChar) {
//       // if the next character is NOT the same as the previous, we want to make sure we push our previous character and count to our string and start again.
//       answerStr = answerStr + currentChar + count;
//       currentChar = str[i];
//       count = 1;
//     } else {
//       // if the next character IS the same as the previous, we don't change currentChar, we just increase the count.
//       count += 1;
//     }
//   }
//
//   // this accounts for the last character and count, which, because we were checking based on the next character in our logic, wouldn't be pushed inside the loop.
//   answerStr = answerStr + currentChar + count;
//
//   return answerStr;
// }
