//subsets Solution: corey: web nov 21 10.55am;
```js
const subsets = (arr) => {
  if(!arr.length) return [[]];
  let last = arr[arr.length - 1]
  let subs = subsets(arr.slice(0, -1))
  return subs.concat(subs.map(el => {
    return el.concat(last)
  }))
}
subsets([1, 2, 3])
```

// ---- corey: 3.30pm -----

```js
document.addEventListener("DOMContentLoaded", () => {
  let select = document.querySelector(".movie-selection");

  function makeRequst(url, callback) {
    axios.get(url).
    then(res => {
      callback(res.data)
    })
  }
    makeRequst("https://ghibliapi.herokuapp.com/films", fillSelectWithTitles)

    select.addEventListener("change", (event) => {
      let url = `https://ghibliapi.herokuapp.com/films/${event.target.value}`
      makeRequst(url, displayMovie);
    })

    function clearPreviousMovie() {
      let movieDisplay = document.querySelector(".movieDisplay");
      while(movieDisplay.firstChild) {
        movieDisplay.removeChild(movieDisplay.firstChild)
      }
    }

    function displayMovie(movie) {
      clearPreviousMovie()
      let movieDisplay = document.querySelector(".movieDisplay");
      let title = document.createElement("h1");
      let description = document.createElement("p");
      let director = document.createElement("h3")
      title.innerText = movie.title;
      description.innerText = movie.description;
      director.innerText = movie.director
      movieDisplay.appendChild(title)
      movieDisplay.appendChild(description)
      movieDisplay.appendChild(director)
    }

    function fillSelectWithTitles(movies) {
      movies.forEach(movie => {
        let option = document.createElement("option");
        option.innerText = movie.title;
        option.value = movie.id;
        select.appendChild(option)
      });
    }
})
```
<!-- ------ corey 3.31pm ------ -->

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>AJAX</title>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="./index.js"></script>
  </head>
  <body>
    <select class="movie-selection" name="">
    </select>
    <div class="movieDisplay">
    </div>
  </body>
</html>
```

<!-- ----- corey: 5.07pm ------ -->
```js
// Write a function that takes in an array as an argument and returns the product of all numbers in that array. Write one version with a for loop, and second one with a for each loop.

// function product(arr) {
//   let output = 1;
//   for(let i = 0; i < arr.length; i = 1 + i) {
//     output * arr[i]
//   }
//   return output
// }

// function product(arr) {
//   let output = 1;
//   arr.forEach(function(el) {
//     output = el * output
//   })
//   return output
// }


// product([1, 2, 3])

// Write a function index * element. that takes in an array and returns an array with every element multiplied by it's index.
// Use Map
// EXP: timesIndex([1, 2, 3]) //=> [0, 2, 6]
// function timesIndex(arr) {
//   return arr.map(function(el, i) {
//     return el * i
//   })
// }
// Write a function that takes in an array of words. I want every other word to be capitalized and lowercases, use map.

// function switchCase(arr) {
//   return arr.map((el, i) => {
//     return i % 2 ? el.toLowerCase() : el.toUpperCase()
//     // if(i % 2) {
//     //   return el.toLowerCase();
//     // } else {
//     //   return el.toUpperCase()
//     // }
//   })
// }

// switchCase(["hello", "cLass", "how", "are", "you"])

//=> ["HELLO", "class", "HOW", "are", "YOU"]

// Write another product function but this time use reduce.

// function product(arr) {
//   return arr.reduce((acc, currEl) => {
//     console.log(acc * currEl)
//     return acc * currEl
//   }, 2)
// }
// product([1, 2, 3, 4, 5])

// write a function that takes in an array of number and returns an array of _only_ the even numbers. Use FILTER!

function evensOnly(arr) {
  return arr.filter((el) => {
    return el % 2 === 0
    // if(el % 2 === 0) {
    //   return true
    // } else {
    //   return false
    // }
  })
}

// evensOnly([1, 2, 3, 4, 5])

// write a getEvens with reduce

// const getEvens = (arr) => {
//   return arr.reduce(function(acc, currEl) {
//     if(currEl % 2 === 0) {
//       acc.push(currEl)
//     }
//     return acc
//   }, [])
// }

// getEvens([1, 2, 3, 4, 5])

// write a function that takes in a matrix, each inner array is made up of two elements. Make these elements a key and value in an object. USE REDUCE
// function makeIntoObject(mtx) {
//   return mtx.reduce((acc, currEl) => {
//     acc[currEl[0]] = currEl[1]
//     return acc
//   }, {})
// }

// makeIntoObject([["hello", "corey"], ["age", 100]])

// => {hello: "corey", age: 100}
// function add(...nums) {
//   console.log(nums)
//   return nums.reduce((acc, currEl) => acc + currEl)
// }

// add(1, 2, 3, 4, 5)

//RECURSION
// A function that calls itself
// Need a base case
// base case tells us to stop and return concrete data;
// inductive step. The step that moves us towards the base case.

//Write a recursive function that takes in an array and sums all elements.
function sum(arr) {
  if(arr.length === 0) { return 0 }
  return arr.pop() + sum(arr)
}
//Write a recursive function of includes. Takes in an array and a target, returns a boolean of true or false.

function include(arr, target) {
  if(arr.length === 0) { return false }
  if(arr[0] === target) { return true }
  return include(arr.slice(1), target)
}
// include([], 4)
include([12, 2, 33, 43, 4], 73) //=> true

// let arr = [1]
// arr.slice(1)

// write a function that returns the fib number that is passed in.
// [0, 1, 1, 2, 3, 5, 8,13 ]
function fibs(num) {
  if(num < 2) return num;
  return fibs(num - 2) + fibs(num - 1)
}
// fibs(4) // 3
// fibs(2)
// fibs(0) + fibs(1)
fibs(7)
```
