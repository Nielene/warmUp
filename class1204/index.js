//1. Write a bubbleSort function. (corey:)

const bubbuSort = arr => {
  let notSorted = true;
  while(notSorted) {
    notSorted = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        notSorted = true
      }
    }
  }
  return arr;
}

console.log(bubbuSort([3,5,2,3]));


//2. Write a merge function that takes in two sorted arrays and returns one sorted array. (corey:)

function merge(arr1, arr2) {
  let output = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1.shift())
    } else {
      output.push(arr2.shift())
    }
  }
  return output.concat(arr1).concat(arr2);
}

console.log(merge([1,3],[2]));
console.log(merge([1,1],[1]));

//3. Write a mergeSort (recursive) that returns a sorted array and uses the merge function. (corey:)

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let midIdx = Math.floor(arr.length / 2);
  let leftSide = arr.slice(0, midIdx);
  let rightSide = arr.slice(midIdx);
  let leftSorted = mergeSort(leftSide);
  let rightSorted = mergeSort(rightSide);
  return merge(leftSorted, rightSorted)
  //sorting them once they hit a length of 1.
}

console.log(mergeSort([454,2,33,4,1,88]));



//Quick sort: mine: -----

function quickSort (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let arrLeft = [];
  let arrRight = [];
  let newArr;
  let pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      arrLeft.push(arr[i])
    } else if (arr[i] >= pivot) {
      arrRight.push(arr[i])
    }
  }
  return newArr;
}

// console.log(quickSort([433,56,89,2,5]));

//-------- quick Sort corey: ------

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr.pop();
  let leftOfPivot = [];
  let rightOfPivot = [];
  arr.forEach(el => {
    el < pivot ? leftOfPivot.push(el) : rightOfPivot.push(el);
  })
  return quickSort(leftOfPivot).concat(pivot).concat(quickSort(rightOfPivot));
}
console.log(quickSort([34,3,2,77,8]));














//
