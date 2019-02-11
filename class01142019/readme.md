reed [9:46 AM]
@channel WARM UP! Create a function `removeOneOk`, that accepts a string and returns true if you can remove one character and have the character count be equal between different characters. (edited)

For example, `aab` is `true`, because you can remove an `a` and you have `ab`, which has the same number of characters.
You might remember this from your Justworks whiteboarding :slightly_smiling_face:

Reed:---------------------------
if there are 1 or 0 characters ins the string, then it returns true.

how do we know which character we want to subtract from.
simply by comparing the character count, we wont know which one to subtract from.

a a b b c -> a a b b (subtract the c)

1. count each character
2. iterate through counts
3. subtract 1 from 1 at a time (a a b b b -> a a b b)
  -> see if each char count is the same.
  -> if so, return true (else, return false)

need to create an object:
eg.: "reed"    ['r', 'e', 'e', 'd']
            {
              'r': 1,
              'e': 2,
              'd': 1
            }

dot notation wouldn't be able to use computed values. values/variables that are not themselves. but instead represent somehting else. cause if you 'charCount.char' it will look for : a character called 'char'.

dot notation interprets the thing after the dot literally, it does not actually compute it.

{
  'r': 1,
  'e': 2,
  'd': 1,
  'char': !!!
}

i am trying to prove that it is true, but until i do, it should be set to false. set 'answer' to false.


```js
const removeOneOk = (str) => {
  let charCount = {};
  let answer = false;

  // iterate all the letters in teh alphabet:
  str.split('').forEach(char => {
    if (charCount[char]) {
        // object[key]  // does the key/value pair exist?
        //if it doesn't, obj['z'] => undefined (will return)
        //charCount ['r']
      charCount[char] ++
    } else {
      charCount[char] = 1
    }
  })
  // iterate through an object representing all the UNIQUE letters in a book:
  let counts = Object.values(charCount)
  counts.forEach((int, i) => {
    let testArray = counts //making duplicate of this array.
    testArray[i]--
    if (testArray.every((ind)) => {
      return ind === testArray[0] //OR if they're all equal to 0
    }) {
      answer = true;
    }

  })
}

```

const = [1,2,1]
testArray = [0,2,1] // these represent the char counts.
testArray = [1,1,1]   'a': 1, 'b': 1, 'c': 1
testArray = [1,2,0]
