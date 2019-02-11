//1
write a function that takes in an array and returns an array of only the odd numbers. implement using reduce.
// odds([1,2,3,4]) //=> [1,3]


//2
write a funciton that takes in an array and returns an array where the even numbers are now "HEY" and teh odd numbers are now "BYE".
// Do it once with map and then again with reduce.
// helloGoodbye([1,2,3,4]) // => ["BYE", "HEY", "BYE", "HEY"]


//3
write a funciton that takdes in an array and target and returns whether or not that target is in the array. Use REDUCE!


//4
Different ways of sorting without using sort method.


line 136:
//----- DIFFERENT WAYS OF SORTING --------
      // COREY

let arr = [4,3,7,5,9,1]

//1. compare and switch adjacent elements.
// BUBBLE SORT (trey)
n^2 bc for every element, we are going to go through it n times.

```js
let arr = [4,3,7,5,9,1]
declare function bubbleSort
make notSorted variable set to true
while notSorted
change notSorted variable to false;
  for (let i = 0; i < array.length; i++) {
    if arr[i] is greater than arr[i + 1]
      swap positions
      // fast way [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      set notSorted to true
  }
return array
```

//2. QUICK SORT
//3. MERGE SORT
 is a recursive funciton. it splits itself in half into a left and right side and recombines itself after.
 [3,5,2,1] ->  [3,5]  [2,1]   ->   [3] [5] [2] [1]

 base case : looking for arr.length <= 1

 merge function takes 2 sorted arrasy and returns one sorted array.
 [3,5] [1,2]
 compare first index of each array.

 //DIRECTIONS for merge:
 //this is NOT merge sort. this iss just MERGE.

 declare a merge function. this will take in 2 sorted array.
 variable output
 while each has a length we will compare the first indices
 remove smaller element and push into output array.
 reutrn all arrays with concat.


//4.

write a mergeSort recursive function.
reutrn arr when it's length is less than 2.
find middle of array.
take left side
take right side
call mergeSort on each.
call merge on result of previous line.
