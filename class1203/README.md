1.a.
Write a function that takes in a 2D array and returns an Object where the insides of the inner array elements are mapped to key value pairs.

objectify([["name", "corey"], ["age", 100]])
//=> {name: "corey", age: 100}

1.b.
solve USING REDUCE.

```js
function objectifyC (arr) {
  let obj = {};
  arr.forEach(miniArray => {
    let key = miniArray[0];
    let value = miniArray[1];
    //loops and prints key:value pair in console
    console.log(key, value);
    //set key/value pair in object

    obj[key] = value;

    // console.log("obj[key]",obj[key], value, obj[value]);
  })
  return obj;
}
```
