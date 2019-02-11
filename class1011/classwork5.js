const anagram = (str1, str2) => {

  // obj ={};
let answer = true;

  let split1 = str1.split("");
  let split2 = str2.split("");

  let sorted1 = split1.sort ((a,b) => a - b);
  let sorted2 = split2.sort ((a,b) => a - b);

  if (sorted1.length !== sorted2.length) {
    return false

  }else {
    let sorted1.length === sorted2.length

    for (i = 0; i<sorted1.length; i++){
      if (sorted1[i] = sorted2[i]) {
        return true;
      }
    }
  }

console.log(anagram("elvis", "lives"));


//Reed -------------
// can split, join , and sort

const isAnagram = (str1, str2) => {
  //convert strings to arrays
  let str1Arr = str1.toLowerCase().split("");
  let str2Arr = str2.toLowerCase().split("");
  //sort arrays
  let arr1Sorted = str1Arr.sort();
  let arr2Sorted = str2Arr.sort();
  //sort takes no argument
    // "d", "e", "e", "r"]
  //join sorted arrays back into strings
  let arr1Join = arr1Sorted.join("");
  let arr2Join = arr2Sorted.join("");
  //test for equality
  return arr1Join === arr2Join;
  // will return "true" or "false". we want to return a boolean.
}
console.log(isAnagram("elvis", "lives"));
//
// //dont use spread operator for strings. it is explicitly for arrays.
// -----------

//can chain sort and join.
// str1Arr.sort().join("");
// (the sorted array).join("")
