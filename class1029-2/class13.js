// WARM UP! Write a function that accepts an array. It should reverse that array and then rotate it by 1 index. e.g. reverseRotate("dog") => "dgo"


const reverseRotate = (str, shift) => {
  let arr = [];
  for (let i = 0; i < shift % str.length; i++) {

    arr.push(str.split("")) ;
    // console.log(str2); // [ 'd', 'o', 'g' ]
    // str2.push(split.shift())

    // console.log(str2.pop());
    // console.log(str2.unshift(str2.pop()));

    // console.log(str2.unshift("it"));
    // console.log(str2);

    // str2.join("")
  }
  return arr;

}

console.log(reverseRotate("dog"));
