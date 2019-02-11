reed [9:58 AM]
@channel WARM UP!!!! Back to fundamentals. Implement a function `reverseAndDisemvowel` which does just that -- accepts a string as an argument, reverses it, and removes all vowels!

```js
const reverseAndDisemvowel = (str) => {
  let arrOfVowels = ["a", "e", "i", "o", "u"];

  let strArr = str.split("");
  let answer = [];

  for (let i = strArr.length; i >= 0; i--) {
    if (!arrOfVowels.includes(strArr[i])) {
      //reed: is 'd' in my array of vowels.
      //includes: O(n) operation. it is inside a for loop (another O(n) operation. but the array of vowels is of finite length so not bothered by it. so it becomes an O(1) operation - fixed/finite)
      answer.push(strArr[i]);
    }
  }
  return answer.join("");
}

console.log(reverseAndDisemvowel("reed"));
```

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

```
