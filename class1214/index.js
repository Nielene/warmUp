// Implement your own version of QuickSort. Remember, it’s recursive. Choose a pivot. Grab all elemetns left of pivot, and all elements right of pivot. Put together with recursive calls. Good luck!

//----- used Dec 4th Warm Up: -------
function quicksort (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let arrLeft = [];
  let arrRight = [];
  // let newArr;
  let pivot = arr.pop();

  arr.forEach((element, idx) => {
    if (element < pivot) {
      arrLeft.push(element)
    } else {
      arrRight.push(element)
    }
  })
  return quicksort(arrLeft).concat(pivot).concat(quicksort(arrRight));
}
console.log(quicksort([6,3,9,7,1,0,56,45]));


//------- corey : ------------

const quickSortC = arr => {
  if (arr.length <= 1) return arr;

  let pivot = arr.pop();
  let leftSide = [];
  let rightSide = [];

  arr.forEach(el => {
    if (el < pivot) {
      leftSide.push(el)
    } else {
      rightSide.push(el)
    }
  })
  return quickSortC(leftSide).concat(pivot).concat(quickSortC(rightSide))
}
//if its a duplicate el it goes in the right. and the pivot is popped and has to be concated.
// best case: nlogn  worse case: n^2
//sort time complexities chart
console.log(quickSortC([3,5,1,2,7,-2,45]));
