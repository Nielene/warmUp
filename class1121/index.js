function productLoop(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    // product *= arr[i];
    product = product * arr[i];
  }
  return product;
}

console.log(productLoop([1,2,3]));

// for each: mine: -------
// DO NOT RETURN INSIDE A FOR EACH LOOP. SAME AS FOR A FOR LOOP. FOR EACH IS ONLY FOR ITS SIDE EFFECTS.S SAME AS FOR A FOR LOOP. IT IS JUST FOR GOING THROUGH AN ARRAY.

function productEach(arr){
  let product = 1;
  arr.forEach(el => {
    product = product * el;
  })
  return product;
}

console.log(productEach([1,2,3]));

//----corey's-----------
//reassign the output to itself multiplied by each element in the array. capture the output to not lose the last arr[i] * output value that came before the most recent one.

function productCLoop(arr) {
  let output = 1;
  for (let i = 0; i < arr.length; i++) {
    output = output * arr[i]
  }
  return output;
}
console.log(productCLoop([1,2,3]));

//----- corey's forEach: ------

function productCEach(arr) {
  let output = 1; //can write in es5 / anon function:
  arr.forEach(function(el) {
    output = el * output
  })
  return output;
}

console.log(productCEach([1,2,3]));


//2. --------mine-------------

function timesIndex(arr) {
  return arr.map((el, index) => {
    return el * index
  })
}

console.log(timesIndex([1,2,3]));

// ----- vs implicit return: mine: ----------
// no {return ..} pair.

function timesIndexImp(arr) {
  return arr.map((el, index) => el * index)
}

console.log(timesIndexImp([1,2,3]));

//------ corey said can use es6 and put everything in one line: -----------
// not { and return } pair ANYWHERE.

const timesIndexAllImp = (arr) => arr.map((el, index) => el * index)

console.log("here", timesIndexAllImp([1,2,3]));

//--------------- corey: -----
// can use es5 instead of es6 notation
// THEY ALL HAVE AN OPTIONAL INDEX AS AN ARGUMENT.
// me: for each part of a function, use a return. except for a forEAch.
function timesIndexC(arr) {
  return arr.map (function (el, i) {
    return el * i
  })
}

timesIndexC([1,2,3])

//3. -----------------------

function switchCase (arr) {

  return arr.map((el, index) => {
    if (index % 2 === 0) {
      return el.toUpperCase()
    } else {
      return el.toLowerCase()
    }
  })
}

console.log(switchCase(["hello", "class", "how", "are", "you"]));

//3. ---------ternery--------------

// corey: dont need parentheses around (index%2===0). but DO WANT THAT SPACE BEFORE AND AFTER THE ?
// the implicit return is fine.
function switchCaseTern (arr) {

  return arr.map((el, index) =>
    index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
  )
}

console.log("here", switchCaseTern(["hello", "class", "how", "are", "you"]));

//--------------corey:-------------
// know going to use map because we were given that hint.

function switchCaseC(arr) {
  return arr.map(function(el, i) {
    if (i % 2 !== 0) {
      return el.toLowerCase();
    } else {
      return el.toUpperCase();
    }
  })
}

console.log("C",switchCaseC(["hello", "class", "how", "are", "you"]));

//--------------corey: sexy it up -------------
// if i % 2 gives 0, it is a falsey. if not , it is truthy:

function switchCaseC(arr) {
  return arr.map(function(el, i) {
    if (i % 2) {
      return el.toLowerCase();
    } else {
      return el.toUpperCase();
    }
  })
}

console.log("C",switchCaseC(["hello", "class", "how", "are", "you"]));


//--------------corey: sexy it up -------------
// ternery and truthy/falsey i % 2

function switchCaseC(arr) {
  return arr.map(function(el, i) {
    return i % 2 ? el.toLowerCase() : el.toUpperCase()
  })
}

console.log("C",switchCaseC(["hello", "class", "how", "are", "you"]));

//--------------corey: sexy it up -------------
// get rid of es5 and do all es6 (erick request):

function switchCaseC(arr) {
  return arr.map((el, i) => {
    return i % 2 ? el.toLowerCase() : el.toUpperCase()
  })
}

console.log("C",switchCaseC(["hello", "class", "how", "are", "you"]));

//4. -------------mine:----------------

// const addThings=(arr)=> {
//   arr.reduce((callback, initialValue) {
//
//   }, 1)
// }

// //---------- corey: ---------
// // COREY note: reduce takes in a callback and an OPTIONAL initial value.
// // note this setup:

// function product(arr) {
//   return arr.reduce(*function(acc, currEl){}*,*iniVal*)
// }

//------

function product(arr) {
  return arr.reduce(function(acc, currEl){
    console.log(acc * currEl);//to show the process.
    return acc * currEl
  })
}

console.log(product([1,2,3,4,5]));

//-----corey: with optional inital Value: ---


function productInit(arr) {
  return arr.reduce(function(acc, currEl){
    console.log(acc * currEl);//to show the process.
    return acc * currEl
  }, 2)  //initial val = 2; currEl = 1 (0 el in arr)
}

console.log(productInit([1,2,3,4,5]));

//-----corey: with optional inital Value: ---


function productInitE6(arr) {
  return arr.reduce((acc, currEl) => {
    console.log(acc * currEl);//to show the process.
    return acc * currEl
  }, 2)  //initial val = 2; currEl = 1 (0 el in arr)
}

console.log(productInitE6([1,2,3,4,5]));

//5.------mine: filter: -------------

function evenNumbers(arr) {
  return arr.filter(el => el % 2 ? null : el)
}

console.log("even", evenNumbers([1,2,3,4]));

//5.------mine: filter: -------------
//corey: instead of "null", can also use "false", "0", empty string "", "NaN", "undefined".
//corey: but dont want to use a ternery if not returning an else statement.
function evenNumbersNoTern(arr) {
  return arr.filter(el => {
    if (el % 2 === 0) {
      return el
    }
  })
}

console.log("evenNoTern", evenNumbersNoTern([1,2,3,4]));

// ----- corey: -------

// function evensOnly(arr) {
//   return arr.filter(function(el) {
//     if(el % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   })
// }
//
//
// function evensOnly(arr) {
//   return arr.filter(function(el) {
//     return (el % 2 === 0)
//
//   })
// }
//
//
// function evensOnly(arr) {
//   return arr.filter((el) {
//     return (el % 2 === 0) {
//
//   })
// }
//
// evensOnly([1,2,3,4,5])

//-----------
// wrong:
function getEvensRed(arr) {
  let newArr = []
  return arr.reduce((el,index) => {
    if(index % 2 === 0) {
      return newArr.push(el)
    }
  })
  return newArr;
}

console.log(getEvensRed([1,2,3,4])
);

//--- mine again: incomplete:

function getEvensRed2(arr) {
  // let newArr = []
  return arr.reduce((accum, currEl) => {
    if(currEl % 2 === 0) {
      [].push(currEl);
      return
    }
  },[])
  // return newArr;
}
console.log(getEvensRed2([1,2,3,4])
);

//--------corey: ----------
// given: optional InitVal = [], so accum on first call is the empty array.
const getEvensC = (arr) => {
  return arr.reduce(function(acc, currEl) {
    if (currEl % 2 === 0) {
      acc.push(currEl)
    }
    return acc
  }, [])
}

console.log(getEvensC([1,2,3,4,5]))


//---- not yet: mine: ---------

function makeIntoObject(mtx) {
  return mtx.reduce(function(acc, currEl){
    // if (currEl[currEl]) { //bracket notation
      console.log(currEl[currEl]);
      acc[currEl] = currEl[currEl]
      //doing: obj[[1,2]] = [1,2][1,2]
    // }
    return acc;
  }, {})
}

console.log(makeIntoObject([["hello", "corey"],
["age", 100]]));


//--------------------

function makeIntoObjectC(mtx) {
  return mtx.reduce((acc, currEl) => {
    acc[currEl[0]] = currEl[1]
    console.log(currEl[0], acc[currEl[0]], currEl[1]);
    //hello corey corey
    // age 100 100
    return acc
  }, {})
}

console.log(makeIntoObjectC([["hello", "corey"],
["age", 100]]));
//{ hello: 'corey', age: 100 }

// ["hello", "corey"] = currEl
// "hello" = currEl[0]
// acc[currEl[0]]
//acc is the name for our object.
// wrap [currEl[0] inside acc bc acc is empty obj and wh=ish to set the key heoollo into that empty obj
// "corey" = currEl[1]


//-----------
//8. concat: ----------
let arr = [1,2,3]
let another = [4,5,6]

//concat:
arr.concat(another) //[1,2,3,4,5,6]
console.log(arr); // [1,2,3]
//nonmutating

//slice:
arr.slice(1); // [1,2,3]
arr.slice(1,2) // [2]
console.log(arr); //non mutating also// [1,2,3]

let arr1 = [1,2,3]
let another = arr1;
another.push(5);
console.log(arr1); // [1,2,3,5]
//we just creates a viable that points to th every shave spont in memory. so when whe mutated that spot, arr got mutated as well.

let arr2 = [1,2,3]
let another = arr2;
arr2.push(5);
console.log(another); // [1,2,3,5]
//also changed another for the same reason. changed the same spot.

//

let arr3 = [1,2,3]
let another = arr3.slice(0);
arr3.push(5);
console.log(another); // [1,2,3]
//slice does not mutate the arry. it makes its own. pointing to a new space in memory. so since slice is very helpful, it makes its own coyp. this sis very usefull.


//

let arr4 = [1,2,3]
let another = [...arr4];
arr4.push(5);
console.log(another); // [1,2,3]
// this separates out the arr in to indiv args and wrpaping into an array. [...arr] makees it a new array in memeory

//

let arr5 = [1,2,3]
let another = [4,5,6];

let mixed = [...arr5, ... another]
console.log(mixed); // [1,2,3,4,5,6]

// sprled operartor does not mutate it. makes a copy. reminds of concat. another use of spread operator.

console.log(...arr5); //[1,2,3]


//
funciton add(...nums) {
  return nums.reduce((acc, currEl) => acc + currEl)
}
add(1,2,3,4,5,6,7,8)
// [1,2,3,4,5,6,7,8]
// 36;

//nums = array
//because reduce is an array mehtod






//
