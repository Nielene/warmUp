// 33
// Array.prototype.myFlatten - a function on the Array class that takes a multi dimensional array and returns it as one array.

// The Array.isArray() method determines whether the passed value is an Array.

Array.prototype.myFlatten = function () {
  let output = [];

  for (let i = 0; i < this.length; i++) {

    if (Array.isArray(this[i])) {
      output = output.concat(this[i].myFlatten())

    }else{
      output.push(this[i])

    }
  }
  return output;
};

console.log([1,2,[3,4,5,[7,8]]].myFlatten());
