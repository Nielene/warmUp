// WARM UP: implement a recursive myFilter method on Arrays prototype.

//Reed's: ---------------

// whenever we are creating a new array in memory : that is an O(n) time complexity: eg myMap, myFilter are not O(1) but are in fact O(n) time complexity.
// that is, via slice or concat.
// accessing via index, or popping/pushing are the only O(1) operations. adding and removing things to the end.
// funnily, adding something to the beginning with shift/unshift , is however O(n)! but it depends on how the ... is implemented. the way JS implements it, these are O(n).

Array.prototype.myFiler = function (cb) {
  if(!this.length) {
    return this;
  }

  let kept = [];

  if (cb(this[0])) { // if i put it into my cb and it is a truthy value, push it (keep it).
    kept.push(this[0]);
  }

  return kept.concat(this.slice(1).myFilter(cb))
};
//this.slice(1) - already dealt with 1st index. now 2,3,4,5. and over and over: 3,4,5 after dealt with (the 1st 2 indices)
// Reed's: [].concat([2].concat([]).concat([4]))

let arr = [1,2,3,4,5]

console.log(  // this is a common callback:
  arr.myFilter(el => {
    return el % 2 === 0  // filtering the odd nos, keeping the even nos.
    // when cb(this[0])= cb(1) => the base case will do nothing with it (the unstated "else" condition will cause it to do nothing with the odd indices.)
  })
);


// 2nd version - less sleek:-------------------

Array.prototype.myFiler = function (cb, idx = 0, newArr = []) {
  if(idx === this.length) {
    return newArr; //our new arr.length cannot be used to keep track of our progress through the original array. it is shorter.
    // for myMap, if newArr.length === oldArr.length it is coorect, but it is extremely unlikely for myFilter which is not going to return every element from the original array.
  }

  if (cb(this[idx])) {
    newArr.push(this[idx]); //O(1) operation only!! :)
  }

  idx++  //Reed makes it really explicit.
  // unless all truthy valuese, this will give us an infinite loop. so idx++ needs to be outside this condition

  return this.myFilter(cb, idx, newArr);
};


let arr = [1,2,3,4,5]

console.log(
  arr.myFilter(el => {
    return el % 2 === 0
  })
);
