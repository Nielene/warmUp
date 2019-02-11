function odd (arr) {
  return arr.reduce((acc, curr) => {
    if (curr % 2) {
      acc.push(curr);
    }
    return acc;
  }, [])

}

// console.log(odd([1,2,3,4]));


// ---- Mine!! i did it! --- wow -----

function helloGoodbye(arr) {
  return arr.map(el => el % 2 ? "BYE" : "HEY")
}

// console.log(helloGoodbye([1,2,3,4]));


function helloGoodbyeRed(arr) {
  return arr.reduce((acc, curr) => {
    if (curr % 2) {
      acc.push("BYE")
    } else {
      acc.push("HEY")
    }
    return acc;
  }, [])
}

// console.log(helloGoodbyeRed([1,2,3,4]));

//--------------------


//---- corey:-----------
// falsey valeus in js
// 0, undefined, NaN, null, "", false

const helloGoodbyeC = (arr) => {
  return arr.map(el => {
    if (el % 2) {
      return "BYE"
    } else {
      return "HEY"
    }
  })
}

console.log("C",helloGoodbyeC([1,2,3,4]));

//or ternery : Corey ---

const hel = arr => {
  return arr.map(el => {
    return el % 2 ? "BYE" : "HEY"
  })
}

// Leo says: ---- can reassign el and return it after. (like the reduce)

const helloGoodbyeCL = (arr) => {
  return arr.map(el => {
    if (el % 2) {
      el = "BYE"
    } else {
      el = "HEY"
    }
    return el
  })
}
console.log("CL",helloGoodbyeCL([1,2,3,4]));

// corey : Reduce version --------

const helloGoodbyeCRed = arr => {
  return arr.reduce((acc, currEl) => {
    acc.push(currEl % 2 ? "BYE" : "HEY")
    return acc;
  }, [])
}

// console.log(helloGoodbyeCRed);

//--------
const helloGoodbyeCRed2 = arr => {
  return arr.reduce((acc, currEl) => {
    if (currEl % 2 ) {
      acc.push("BYE")
    } else {
      acc.push("HEY")
    }
    return acc;
  }, [])
}

// console.log(helloGoodbyeCRed);

//3. ----------------mine:------------------


function present(arr, target) {
  return arr.reduce((acc, curr) => {
    if (acc.length === target) {
      return true;
    } else {
      return false
    }
  })
}

// console.log(present([1,2,3], 2));

//----- corey: ------
//reduce(callback, initial val)
//the callback takes in two arguments: acc, curr:
//start with a false; start with the assumption that it is not in there.
// it is a variable we are adjusting: reassigning.
// let acc = false;
const include = (arr, target) => {
  return arr.reduce((acc, currEl) => {
    if (currEl === target) {
      acc = true;
    }
    return acc;
  }, false)
}

// console.log(include([1,2,3,4,5], 2));

//

//----- DIFFERENT WAYS OF SORTING --------
      // COREY

let arr = [4,3,7,5,9,1]

//1. compare and switch adjacent elements.
// BUBBLE SORT (trey)

// declare function bubbleSort
// make notSorted variable set to true
// while notSorted
// change notSorted variable to false;
//   for (let i = 0; i < array.length; i++) {
//     if arr[i] is greater than arr[i + 1]
//       swap positions
//       set notSorted to false
//   }
// return array

//------- okay, got it: --------
function bubbleSort(arr) {
  let notSorted = true;

  let i = 0;
  while (i < arr.length) {
    notSorted = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        // (arr[i] = arr[i + 1]) && (arr[i + 1] = arr[i])
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        notSorted = false;
      }
    }
    i++;
  }
  return arr;
}

console.log(bubbleSort([4,3,7,5,9,1]));


//---C says can have a temporary variable. ---
// tried. not working.

function bubbleSortTemp(arr) {
  let notSorted = true;

  let i = 0;
  while (i < arr.length) {
    notSorted = false;
    for (let i = 0; i < arr.length; i++) {
      let a = arr[i];
      let b = arr[i + 1]
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i+1] = arr[i];
        // (a = arr[i + 1]);
        // (b = arr[i]);

        // (arr[i] = arr[i + 1]) && (arr[i + 1] = arr[i])
        // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        notSorted = false;
      }
    }
    i++;
  }
  return arr;
}

console.log(bubbleSortTemp([4,3,7,5,9,1]));

// ---- Corey: ------------

// let arr = [4,3,7,5,9,1]
// declare function bubbleSort
// make notSorted variable set to true
// while notSorted
// change notSorted variable to false;
  // - to break out of while loop bc eventually this arr is going to be sorted and dont want it to not stop. (~base case.)
//   for (let i = 0; i < array.length; i++) {
//     if arr[i] is greater than arr[i + 1]
//       swap positions
//       set notSorted to true
//   }
// return array

function bubbleSortC(arr) {
  let notSorted = true;
  while (notSorted) {
    notSorted = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1]
        arr[i + 1] = arr[i];
        arr[i] = temp;
        notSorted = true;
      }
    }
  }
  return arr;
}

console.log(bubbleSortC([3,4,6,9,1]));

//------------------------------------
//2. Merge sort:------------------
//this is NOT merge sort. this iss just MERGE.

// declare a merge function. this will take in 2 sorted array.
// variable output
// while each has a length we will compare the first indices
// remove smaller element and push into output array.
// reutrn all arrays with concat.


function merge (arr1, arr2) {
  let output = [];
  while(arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1.shift())
    } else if (arr2[0] < arr1[0]) {
      output.push(arr2.shift())
    }
  }
  return output.concat(arr1).concat(arr2)
}

console.log(merge([8,3,6],[1,9,0]));


// ------------ corey: -------------

function mergeC (arr1, arr2) {
  let output = [];
  while(arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1.shift())
    } else {
      output.push(arr2.shift())
    }
  }
  // return output.concat(arr1).concat(arr2)
  //or use spread operator:
  return [...output, ...arr1, ...arr2]
}

console.log(mergeC([1,2,4],[3,6,9]));
//[1,2,3,4,6,7,7,9,65,98]


//----------------------------
//4.

// write a mergeSort recursive function.
// reutrn arr when it's length is less than 2.
// find middle of array.
// take left side
// take right side
// call mergeSort on each.
// call merge on result of previous line.

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  if (arr.length % 2 === 0) {
    let m = (arr.length /2) - 1
    // arr1 = [0,...m] , arr2 = [m+1,.. length-1]
  }

  for (let i = 0; i < m; i++) {
  }

  for (let i = m + 1; i < array.length; i++) {
  }


}



// -------  corey: ---------

//4.

// write a mergeSort recursive function.
// reutrn arr when it's length is less than 2.
// find middle of array.
// take left side
// take right side
// call mergeSort on each.
// call merge on result of previous line.

function mergeSort(arr) {
  if (arr.length < 2) return arr
  let midIdx = Math.floor(arr.length / 2);
  let leftSide = arr.slice(0, midIdx);
  let rightSide = arr.slice(midIdx);
  let sortedLeft = mergeSort(leftSide);
  let sortedRight = mergeSort(rightSide)
  return merge(sortedLeft, sortedRight) // sorts here
}

//Recall:
function mergeC (arr1, arr2) {
  let output = [];
  while(arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1.shift())
    } else {
      output.push(arr2.shift())
    }
  }
  // return output.concat(arr1).concat(arr2)
  //or use spread operator:
  return [...output, ...arr1, ...arr2]
}




//
