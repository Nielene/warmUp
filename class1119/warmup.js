function countDown(num) {
  let arr=[]
  for (let i = num; i>= 0; i--) {
    arr.push(i)
  }
  console.log(arr);
  return arr;
}

// countDown(9)


//corey:
function countDownCorey(num) {
  let output=[];
  for (let i = num; i> 0; i -= 1) {
    output.push(i)
  }
  return output;
}

countDownCorey(9);

//----------------------

function range(num1, num2) {
  let arr = [];
  for (let i = num1; i <= num2; i ++) {
    arr.push(i)
  }
  console.log(arr);
  return arr;
}

range(4,9)

//--------My experiment----------------

function rangeTest(num1, num2) {
  let arr = [];
  let i;

  for ( i = num1; i <= num2; i ++) {
    // arr.push(i)
    console.log(i);
  }
  // console.log(arr);
  return i;
}

rangeTest(4,9)

//----------corey:-------------
function rangeCorey(start, end) {
  let output = [];
  for (let i = start; i <= end; i ++) {
    output.push(i)
  }
  // console.log(output);
  return output;
}

console.log(rangeCorey(4,9));

//-------

// if(strt < end){
//   smallest = start
// } else {
//   smallest = end;
// }

function rangeCorey(start, end) {
  let smallest = start < end ? start : end ;
  let largest = start < end ? end : start ;
  let output = [];
  for (let i = smallest; i <= largest; i += 1) {
    output.push(i)
  }
  // console.log(output);
  return output;
}

console.log(rangeCorey(4,9));

//-------------------------

const larger = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
}

console.log(larger(4,6));

//me: reutnn num that is % 2:---------
// needs work------------

// function even(arr) {
//   arr.forEach((el % 2) => el)
// }
//
// console.log(even([1,2,3,4]));

//---------------------

// const divisible = (highest, divisor) => {
//   let factors = [];
//   let ans;
//
//   for (let i = divisor; i <= highest; i += 1) {
//     ans = (highest % divisor === 0);
//     console.log(ans);//already incrementing by divisor, though. this part is unnecessary.
//
//     (ans) ? factors.push(ans) : null
//
//     // (ans) ? factors.push(i) : factors.push(highest)
//   }
//   return factors;
// }
//
// console.log("hello", divisible(20, 6));


// mine2 solution:---------

const divisible2 = (high, div) => {
  let factors = [];

  for (let i = div; i <= high; i+= div) {
    factors.push(i)
  }
  return factors;
}

console.log(divisible2(20,6));

//------corey/JoJo's solution:---------

function divisibleCorey(highNum, divisor) {
  let output = [];
  for (let i = divisor; i <= highNum; i+= divisor) {
    output.push(i);
  }
  return output;
}
console.log(divisibleCorey(20, 6));

//------corey: ternary:-------------

function divisibleC2(highNum, divisor) {
  let output = [];
  for (let i = divisor; i < highNum; i++) {
    //now can use conditional statement:
    if (i % divisor === 0) {
      output.push(i)
    }
  }
  return output;
}
console.log("test", divisibleC2(20, 6));

//here, time cmplexity is based solely on highNum. vs the other one where the time complexity is based on hte (highNum % divisor)

//--------- mine: While loop: -------

function divisibleWhile (high, div) {
  let output = [];

  let i = div;
  while (i <= high) {

    output.push(i);
    i+= div;
  }
  return output;
}

console.log("test3",divisibleWhile(20, 6));

//------corey:-----

function divisibleWC(highNum, divisor) {
  let output = [];

  let i = divisor;
  while(i <= highNum) {
    output.push(i) //push into array

    i += divisor; //then increment by divisro.
    //not start one ahead eahc time.
  }
  return output;
}
console.log(divisibleWC(20, 6));

//---------while loop:------

function divisor(num, div = 2) {
  let output = [];
  let i = num;

  while (i >= 0.5) {

    output.push(Math.floor(i));
    i /=div ; //<!--i = Math.floor(i / 2)-->
  }

  return output;
}

console.log("test4",divisor(50));

//-------for loops:-----

function divisor(num, div = 2) {
  let output = [];

  // for (let i = num; i >= 0; i-= (Math.floor(num/div))) {

  // for (let i = num; i >= 0.5; Math.floor(i/=div)) {

  for (let i = num; i >= 0.5; i/=div) {

    output.push(Math.floor(i))
    // output.push(i)
  };

  return output;
}

console.log('test5',divisor(50));
// divisor(50)


// -----corey:

function halfer(num) {
  let output = [];
  for (let i = num; i > 0; i = Math.floor(i /2)) {
  //   Variable reassignment:
  //   i ++   i += 1  i = i + 1
  //          i /= 2   i = i / 2
    output.push(i)
    // output.push(Math.floor(i))
  }
  return output;
}
//output: []
// i : 50  50 is > 0 so push to output and continue;
//output: [ 50]
// i : 25  25 is > 0 so push to output and continue;
//output: [ 50, 25]
// i : 12  12 is > 0 so push to output and continue;
//output: [ 50, 25, 12]
// i : 6  6 is > 0 so push to output and continue;
//output: [ 50, 25, 12, 6]
// i : 3  3 is > 0 so push to output and continue;
//output: [ 50, 25, 12, 6, 3]
// i : 1  1 is > 0 so push to output and continue;
//output: [ 50, 25, 12, 6, 3, 1]
// i : 0  0 is !> 0 so return our output

console.log(halfer(50));

//

const halfer = num => {
  let outptu = [];
  let i = num;
  while (i > 0) {
    output.push(i)
    i = Math.floor(i / 2)
  }
  return output;
}
