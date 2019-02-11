WARM UP! // Write a method, `digital_root(num)`. It should Sum the digits of a positive
// integer. If it is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
//
// You may wish to use a helper function, `digital_root_step(num)` which performs
// one step of the process. Challenge yourself and solve it recursively!!!!

```js
function digitalRoot(num) {
  if (int < 10) {
    return int;
  }
  return digRootRecursive(Math.floor(int / 10) + (int % 10))
}
```


Terminal:
48 % 10
8

48 / 10
4.8

math.floor(48 / 10)
4


N.B.:
the Math.floor will resolve first bc it is inside the nested brackets. RE: Maths class.


34 + 5 = 39
3 + 9 = 12
1 + 2 = 3

345
root = 5

0 += 5
num = 34  --> goes through the cycle too









//
