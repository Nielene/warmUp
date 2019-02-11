 warmup!! Write a function that accepts two arguments: a string and an array of strings. Capitalize each word in the string UNLESS it's included in the array. Return the new string. For example: capitalizeWithExceptions("bacon and eggs", ["and", "or", "but"]) => "Bacon and Eggs".

let capitalizedArr = wordArr.map(

the callback portion: ```js

 (el) => {
   if (!arr.includes(el)) { // have to optimize or else will have to loop through entire array constantly
     return (el[0].toUpperCase() + el.slice(1));
   } else {
     return el
   }

```
})


strings and arrays are both indexed.


//
An 0-n-squared solution:

5^2 = 25      0(n^2)
[1,2,3,4,5]

1 + 1   one tick of computation;


```js
n = 5

while (n>0) {
  console.log(n);
  n--               // 10 tcs of computation
}

arr = [1,2,3,4,5]

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    console.log([arr[i], arr[j]]);
  }
} //produces 25 results; for el 1, going 12345


// consider y = x^2;

// it exponentially increases along the y axis; so as x (customers) increases into the millions, the function becomes less and less efficient.

//lower down, there is not a major difference between the linear and ... xy change.

//the efficiency of your algorithms determine if you can handle a large amount of traffic. and how much you pay your server per month for server space. and does each of your requests take 50MB of transfer or 2MB of transfer. Are you likely f***'* or not.
//for loop within for loops will not be optimized. How do it without two for loops.

```
going through each index (that is 0 of n; tehn .... and that is (0 of n) squared   )


key DIRECTLY into AN index of the array (wordArr[243000] - much more immediate and optimized) vs using "includes" bc includes runs through E V E R Y element of the array!
