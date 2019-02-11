// WARM UP! Write a function that accepts an array. It should reverse that array and then rotate it by 1 index. e.g. reverseRotate("dog") => "dgo"


const reverseRotate = (str) => {
  let str2 = [];
  str2 = str.split("");
  // console.log(str2); // [ 'd', 'o', 'g' ]
  str2.push(str2.shift())
  console.log(str2.pop());
  // console.log(str2.unshift(str2.pop()));
  console.log(str2.unshift("it"));
  // console.log(str2);
  str2.join("")
}

console.log(reverseRotate("dog"));
