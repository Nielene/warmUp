//wed nov 14th: coreyladovsky:
My Solution:

const nestSum = (arr, depth = 1) => {
	let output = 0;
	arr.forEach(el => {
		output += Array.isArray(el) ? nestSum(el, depth + 1) : el * depth
	})
	return output
}


//wed nov 14th: reed:
//This solution only works for two dimensional arrays but does weigh the arrays properly
const sumWeight = arr => {
  let output = arr.reduce((acc, el) => {
    let mult = 1;
    let tracker = el;
    if (Array.isArray(el)) {
      mult++;
      tracker = el.reduce((accu, num) => {
        return accu + num * mult;
      }, 0);
    }
    return acc + tracker;
  }, 0);
  return output;
};

//And this solution adds up arrays of any depth but does not weight numbers in nested arrays.
const sum = input => {
 if (!Array.isArray(input)) {
  return input;
 } else if (input.length === 1) {
  return sum(input[0]);
 } else {
  // return input[0] + sum()
  let sliced = input.slice(1);
  console.log(sliced);
  return sum(input[0]) + sum(sliced);
 }
};

//thurs nov 15th: reed: ---------

// Problems based on what we discussed today!

// 1. Write a function that accepts an array of integers and returns a new array with each integer doubled.
// ​
// For example: `doubleArr([1, 2, 3, 4]) => [2, 4, 6, 8]`
// ​
// 2. Write a function that accepts a string with words and returns a string with the first letter of each word capitalized.
// ​
// For example: `capitalize("good morning everybody") => "Good Morning Everybody"`
// ​
// 3. Write a function that accepts an object. Each key and value of this object are identical integers. Return an object with each **even value** doubled.
// ​
// For example `doubleEvenObj({1: 1, 2: 2, 3: 3, 4: 4}) => {1: 1, 2: 4, 3: 3, 4: 8}`


//coreyladovsky thurs nov 15th:

document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button");
  button.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          let resultArray = JSON.parse(xhr.response)["results"];
          let ul = document.querySelector(".pokemon")
          for (let i = 0; i < resultArray.length; i++) {
            let li = document.createElement("li");
            li.innerText = resultArray[i].name;
            ul.appendChild(li)
          }

        } else {
          console.log("ERRRRRR!");
        }
      }
    }
    xhr.open("get", "https://pokeapi.co/api/v2/pokemon/", true);
    xhr.send()

  })
})

//part of the same snippet (consoled out by corey):

//
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
  //   if(xhr.readyState === 4) {
    //     if(xhr.status === 200) {
      //       let movieObj = JSON.parse(xhr.response)
      //       let ul = document.querySelector(".movies");
      //       for(let i = 0; i < movieObj.length; i++) {
        //         let li = document.createElement("li");
        //         li.innerText = movieObj[i].title
        //         ul.appendChild(li)
        //       }
        //     }
        //   }
        // }
        //
        // xhr.open("get", "https://ghibliapi.herokuapp.com/films", true)
        // xhr.send()

//--------------------
//fri nov 16th: optional warmup - corey:------
// Downloads - Screen Shot 2018-11-14 at 9.56.03 AM.png


//reed: fri nov 16th:
//all the different ways of defining and calling a function!

function myFunc() {}

const myFunc = () => {};

class Teacher {
  constructor(name, style) {
    this.name = name;
    this.style = style;
  }
  myMethod() {}
}

myFunc();
let theClass = new Teacher("Reed", "Good");
theClass.myMethod();

// fri nov 16th: corey:
//first one is a recursive one and made to be as short as i could.

const isPalli = (num, divisor = 1)=> {
  if(num < 0) return false;
  if(num < 10) return true;
  while(num / divisor >= 10) { divisor *= 10; }
    let [leading, ending] = [Math.floor(num / divisor), num % 10 ];
    if(leading !== ending) return false;
    return isPalli(Math.floor((num % divisor) / 10), divisor /= 100)
}


const isPalli = num => {
  if(num < 0) return false;
  if(num < 10) return true;
  let divisor = 1;
  while(num / divisor >= 10) {
    divisor *= 10;
  }

  while(num) {
    let leading = Math.floor(num / divisor);
    let ending = num % 10;
    if(leading !== ending) {
      return false
    }
    num = Math.floor((num % divisor) / 10)
    divisor /= 100
  }

  return true
}


const paliNum = int => {
  if(int < 0) return false;
  let arr = [];
  while(int > 0) {
    arr.push(int % 10);
    int = Math.floor(int / 10);
  }
  return paliArray(arr)
}

const paliArray = arr => {
  let [i, j] = [0, arr.length - 1]
  while(i < j) {
    if(arr[i] !== arr[j]) return false;
    i++;
    j--;
  }
  return true;
}
//t accidentally returned. The second one is similar to the recursive but using a while loop. In both the first and second we compare the first and last number, and then remove them. In the third solution, we break off each number with modulo and store it in an array. Then using two pointers to check from the front and back of the array we check for equality. Third solution is most clear to me but uses some extra memory. Other solutions are done in place.
//---------------------

//reed fri nov 16th:
// Answer to the first problem, for syntax posterity!

function testNum(num) {
  return new Promise((resolve, reject) => {
    resolve(num > 10);
  });
}

console.log(testNum(11));
//----------

// corey: mon nov 19th :

// // Write a function that takes a starting number and returns an array from that number down to zero.

// // countDown(9) // => [9, 8, 7,6 ,5 4, 3, 2,1]

// function countDown(num) {
//   let output = [];
//   for(let i = num; i > 0; i -= 1) {
//     output.push(i)
//   }
//   return output;
// }

// // countDown(9)

// // Write a function that takes in a starting number and ending number and returns an array of all numbers in between including the start and ending number.
// // range(4, 9) // => [4, 5, 6, 7, 8, 9]

// if(start  < end ) {
//   smallest = start
// } else {
//   smallest = end
// }

// const range = (start, end) => {
//   let smallest = start < end ? start : end ;
//   let largest = start < end ? end : start ;
//   let output = [] ;
//   for(let i = smallest; i <= largest; i += 1) {
//     output.push(i)
//   }
//   return output
// }
// range(9, 4)

// write a function that takes in two numbers and returns the larger number. Should be a one line function usint ternary.
// larger(4, 6) //=>  6
// const larger = (num1, num2) => {
//   return num1 > num2 ? num1 : num2
// }

// Write a function that takes a highNumber and a divisor. Return all numbers from 0 to highNumber that are divisible by divisor.
// divisible(20, 6) // => [6, 12, 18]
// function divisible(highNum, divisor) {
//   let output = [];
//   for(let i = divisor; i <= highNum; i += divisor ) {
//     output.push(i)
//   }
//   return output
// }

//O(highNum / divisor) || O(n / m)

// function divisible(highNum, divisor) {
//   let output = [];
//   for(let i = divisor; i <= highNum; i++) {
//     if(i % divisor === 0) {
//       output.push(i)
//     }
//   }
//   return output
// }
// //O(highNum) || O(n)

// // divisible(20, 6)

// function divisible(highNum, divisor) {
//   let output = [];
//   let i = divisor;
//   while( i <= highNum) {
//     output.push(i);
//     i += divisor
//   }
//   return output
// }
// // divisible(20, 6)

// write a function that takes in number. Returns an array of all number from that number down to 0 dividinng by 2. Write a while loop and for loop version.
// dividor(50) //=> [50, 25, 12, 6, 3, 1]

// function halfer(num) {
//   let output = [];
//   for(let i = num; i > 0; i = Math.floor(i / 2)) {
//     output.push(i)
//   }
//   return output
// }

const halfer = num => {
  let output = [];
  let i = num;
  while(i > 0) {
    output.push(i)
    i = Math.floor(i / 2)
  }
  return output
}

//output: [50, 25, 12, 6, 3, 1]
//i : 0

halfer(50)

//------------

//corey: mon 19th nov: optional warmup solution:

const contiguousSum = arr => {
  let [maxSum, runningTotal] = [arr[0], arr[0]];
  for(let i = 1; i < arr.length; i++) {
    if(runningTotal < 0 && arr[i] > 0) {
      runningTotal = arr[i]
    } else {
      runningTotal += arr[i]
    }
    if(runningTotal > maxSum) {
      maxSum = runningTotal
    }
  }
  return maxSum
}
//----------

//5-1-web-days

coreyladovsky [10:00 AM]
@channel OPTIONAL WARM UP: You are given a one dimensional array that may contain both positive and negative integers, find the sum of contiguous subarray of numbers which has the largest sum.
For example, if the given array is {-2, -5, 6, -2, -3, 1, 5, -6}, then the maximum subarray sum is 7 (see highlighted elements).
