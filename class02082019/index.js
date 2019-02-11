let myObj = {
  user: {
    id: 1,
    name: "Reed",
  },
  post: {
    title: "My Post",
    body: "Cool post bruh",
    user: 1,
  }

}

let arrObj = Object.keys(myObj)
let arrObj2 = Object.values(myObj)

console.log(arrObj);
console.log(arrObj2);
