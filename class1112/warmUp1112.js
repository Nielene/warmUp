// let array = [
//   {id: 1, comment: "This is bad"},
//   {id: 2, comment: "This is good"}
// ]
//
// const filterWord = (arr, badWord) => {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     //arr[i] = {id: 1, comment: "this is bad"}
//     let comment = arr[i].comment;
//     //comment = "this is bad"
//     let splitComment = comment.split(" ");
//     //splitComment = ["this", "is", "bad"]
//     if (!splitComment.includes(badWord)) {
//       answer.push(arr[i]) //the intact object, with the id AND the comment.
//     }
//   }
//   return answer;
// }
//
// let myArr = [
//   {id: 1, comment: "This is bad"},
//   {id: 2, comment: "This is good"}
// ]
//
// console.log(filterWord(myArr, "bad"));
// //could use includes on a string to get substring, instead of a for loop. includes is a o(n) operation. try to avoid it. if comment is finite length, includes is o(1). but ehwn thinkging of BigO complexity, we are starting to think of infinity. what data we expect to grow exponentially and waht daata we epect to stay finite.


//---------------

let array = [
  {id: 1, comment: "This is bad"},
  {id: 2, comment: "This is good"}
]

const filterWord = (arr, badWord) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let comment = arr[i].comment;
    let splitComment = comment.split(" ");
    let okToPush = true;
    for (let j = 0; j < splitComment.length; j++) {
      if (badWord[splitComment[j]]) {
        okToPush = false;
      }
    }

    if(okToPush) {
      answer.push(arr[i])
    }
  }
  return answer;
}

let myArr = [
  {id: 1, comment: "This is bad"},
  {id: 2, comment: "This is good"}
]

console.log(filterWord(myArr, {
  "bad": true,
  "dude": true,
  "gun": true
}));
