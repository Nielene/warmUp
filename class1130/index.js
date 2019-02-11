//1. ---------- mine: -----------
function secondLargest (arr) {
  let sorted = arr.sort((a,b) => b-a); //[ 10, 7, 4, 2, 1 ]
  console.log(arr, sorted);
  return sorted[1];
}

// console.log(secondLargest([1,2, 7,10,4]));


// ----- corey: ------------

const secondLargestC = (arr) => {
  let biggestNumber = Number.NEGATIVE_INFINITY;
  let secondBiggest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {//the order matters:
      secondBiggest = biggestNumber //Number.NEGATIVE_INFINITY
      biggestNumber = arr[i]; //arr[i]
    } else if (arr[i] > secondBiggest){
      secondBiggest = arr[i]
    }
  }
  return secondBiggest
}

// console.log(secondLargestC([3,7,2,9,0]));

// 2. ----------mine: -----------

function range(low,high) {
  let counter = 0;
  let range = high - low + 1

  if (high) {
    // console.log(range, low, high);
    return;
  }
//idea:
  arr.push(low);
  arr.push(low + 1);
  arr.push(low + 2);
  arr.push(low + 3);
  arr.push(high);

  console.log(arr);
  return arr;
}

// console.log(range(3, 7));

// 2. --------- corey: --------------

const rangeC = (low, high) => {
  if (low > high) {return []}
  let currentLow = low;
  low += 1;
  let output = rangeC(low, high);
  output.unshift(currentLow)
  return output
}

console.log(rangeC(1,1)); // => [1]
console.log(rangeC(1,5));

// -----t'keya: -----------
const recursiveRange = (start, end) => {
  let results = [];
  if (start === end) {
    return results;
  } else {
    results.push(start);
    return results.concat(recursiveRange(start + 1, end));
  }
}

// ------------------------


















//
