//1. recursive: mine: -----------

function even (num) {
  // if (num / 2 === 1) {
  //   return true;
  // } else {
  //   return false;
  // }
  let isEven = false;
  let count = 0;
  if (Number.isInteger(num/2) ) {
    count++
    isEven = true;
    return true;
  } else {
    return false;
  }
  // if (count >= 1) {
  //   return true;
  // }

  return even(num)
}

console.log(even(11));

//------- corey: -------------

const isEven = num => {
  if (num === 0) return true;
  if (num === 1) return false;

  return isEven(num -= 2)
}

console.log(isEven(50));
// --------------------------
