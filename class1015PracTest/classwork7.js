// Array.prototype.transpose = function (callback) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i)) {
//       output.push(this[]);
//     }
//   }
//   return output;
// };
//
// let arr = [][]


//XAVIER:
// //mtrix is a 2 dimensional array
// function transpose(mtx){
//   //arr = [1,2,3] arr[0] = 1
//   //arr = [[1,2,3], [4,5,6]]  arr[0][1] = 2
//   if (arr[0][1]) => output[0][0]


//COREY:

//mtrix is a 2 dimensional array
function transpose(mtx){
    let grid = [];
    for (let i = 0; i < mtx[0].length; i++) {
      grid[i] = []; //i=inner; j=outer loop;
      for (let j = 0; j < mtx.length; j++) {
        // console.log(grid);
        grid[i][j] = mtx[j][i];
      }
    }
    return grid;
}

let mtx = [[1, 2, 3,9], [4, 5, 6,32]]
// , [7, 8, 9]]
transpose(mtx)
// [
//   [1,4,7],
//   [2,5,8],
//   [3,6,9]
// ]
console.log(transpose(mtx));


//COREY: myREDUCE -----------

Array.prototype.myReduce = function (callback, acc) {
  let startingIdx = 0;
  if (!acc) {
    acc = this[0];
    startingIdx++ // if no acc ->3 acc=0; startingIdx=1;
    // acc = this at 0; when not pass an acc in reduce, the callback takes the first element by default; but if i also (in forloop below) start my currentValue at the first element as well. deal with that now. let default currentValue be set at second value! not let i=0; i=startingIdx.
  }
  for (let i = startingIdx; i < this.length; i++) {
    acc = callback(acc, this[i])
  }
  return acc;
}

let arr = [1,2,5,3,4]

let result = arr.myReduce((acc, currEl) => {
  return acc + currEl
}, 5)

console.log(result);


//--------------- REED - Callbacks -----------

// line 239:











//
