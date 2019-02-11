//WARM UP! // Write a method, `digital_root(num)`. It should Sum the digits of a positive integer. If it is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
//
// You may wish to use a helper function, `digital_root_step(num)` which performs
// one step of the process. Challenge yourself and solve it recursively!!!!

//recursive solution:--------------Reed:----

function digitalRoot(num) {
  if (int < 10) {
    return int;
  }
  return digRootRecursive(Math.floor(int / 10) + (int % 10))
}

// student wanted to add something less succinct: --------------
function digitalRoot(num) {
  if (int < 10) {
    return int;
  }

  let lastDig = (int % 10);
  let restOfNum = Math.floor(int / 10)

  return digRootRecursive(Math.floor(int / 10) + (int % 10))
}

// iterative solution:---------------------
// has two connected functions:--------------

function digitalRoot(num) {
  while (num > 10) {
    num = digitalRootStep(num);
    console.log(num);
  }

  return num;  // same as an else statement
}

function digitalRootStep(num) {
  let root = 0;

  while (num > 0) {
    root += num % 10;
    num = Math.floor(num /10);
  }

  return root;
}
//-----------------------------------

// console.log(digitalRoot(346));
// 13 - digitalRoot(346)'s console.log(num)
// 4 - digitalRoot(346)'s console.log(num)
// 4 - from ...

digitalRoot(346);
// 13 - digtalRoot(346)'s console.log(num)
// 4 - digitalRoot(346)'s console.log(num)
