WARM UP:
Write a function ice_cream_shop(flavors, favorite) that takes in an array of ice cream flavors available at the ice cream shop, as well as the user's favorite ice cream flavor. Recursively find out whether or not the shop offers their favorite flavor.

Time complexity of this recursive function:
// since touching each element one time, this , like for loop, is O(n). o of n.

vs.

// Time complexity of slice:
// O(n) because looping through it just as a for loop would. slice is linear. negative of slice is we are going through the entire array.

You'll need:
Recursive - calls itself
Base case - when to return / end
Inductive step - move towards end condition
```js

const ice_cream_shop = (flavors, favorite) => {
  if (flavors.length === 0) {return false;}   //inductive step

  let popped = flavors.pop();
  if ( popped === favorite) {return true;}  // can use the curly brackets;

  return ice_cream_shop(flavors, favorite)
}

console.log(ice_cream_shop(["vanilla", "strawberry", "blue moon"], " moon"));

```
