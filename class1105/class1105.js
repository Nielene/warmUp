// WARM UP implement myReduce recursively .

//inductively:
Array.prototype.myReduce = function (callback, initialValue) {
  let counter = 0;
  let accumulator;

  if (initialValue === undefined) {
    counter = 1;
    accumulator = this[0];
  }else {
    accumulator = initialValue;
  }

  for (let i = counter; i < this.length; i++) {
    accumulator = callback(accumulator, this[i])
  }

  return accumulator;
};

// Recursively: mine: -------
Array.prototype.myReduce = function (callback, initialValue) {
  let counter = 0;
  let accumulator;

  if (initialValue === undefined) {
    counter = 1;
    accumulator = this[0];
  }else {
    accumulator = initialValue;
  }

  accumulator = callback(accumulator, this[i])

  return myReduce(accumulator, this[i])

};
//-------------------


//shift mutates the araray. slice makes a copy of the array: so should not use the following. need to be aboe to use the array after going through the reduce process:

//Reeds:
//use ES5 bc that is how you define prototypes.

Array.prototype.myBadReduce = function (cb, acc) {

      //acc mya not be supplied , so making it the first elenmetn.
      // bc shifting, making the second element the new first
      // donet need to increase the arrayeleement by 1. does it automatically.

  if (acc === undefined) {
    acc = this.shift();
  }


      // base case:
  if (!this.length) {
    return acc;
  }
      //inductive / recursive step:
        // call my callback using my accumulaotr and my .shift()
        // making it the accu argumanet
  return this.myBadReduce(cb, cb(acc, this.shift()));
};

let arr = [1,2,3,4];

arr.myBadReduce((acc, el) => {
  return acc * el;
});

console.log(arr); // now empty;


//Corey:

Array.prototype.myReduce = function (callback, acc, startIdx = 0) {
  if (startIdx === this.length) return acc;
  if (!acc) {  // (acc === undefined)
    acc = this[startIdx];
    startIdx++
  }
  acc = callback(acc, this[startIdx])
      //this(above) used to go inside our for loop but not doing that here bc recursive functions are meant to replace an iterative loop; there needs to be an overwhelmingly good reason for using a for loop inside a recursive function;
  return this.myReduce(callback, acc, ++startIdx)
      //the ++ in the front evaluates it first. or startIdx++ if want to modify it before implementing myReduce;
};

let array = [1,2,3,4,5];
array.myReduce((acc, el) => {
  return acc + el;
}, 20);

console.log(array.myReduce());



//

// let arr = [1,2,3,4];
//
// while(arr.length){
//   console.log(arr.shift());
// } // it will continue to do so until the condition is false.
