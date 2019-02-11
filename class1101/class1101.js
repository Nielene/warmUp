// Write a function ice_cream_shop(flavors, favorite) that takes in an array of ice cream flavors available at the ice cream shop, as well as the user's favorite ice cream flavor. Recursively find out whether or not the shop offers their favorite flavor.

//---------------mine: ------(with Andrew)------

// const ice_cream_shop = (flavors, favorite) => {
//
//   if (favorite === flavors[0]) {
//     return  flavors[0]
//   } else if (favorite !== flavors[0]) {
//     return false;
//   }
//
//   flavors.shift()
//   return ice_cream_shop(flavors.slice(1, flavors.length), favorite)
// }
//
// console.log(ice_cream_shop(["vanilla", "chocolate", "strawberry"], "chocolate"));

// --------corey:------------

const ice_cream_shop = (flavors, favorite) => {
  if (flavors.length === 0) return false;   //inductive step

  let popped = flavors.pop();
  if ( popped === favorite) return true;

  return ice_cream_shop(flavors, favorite)
}

console.log(ice_cream_shop(["vanilla", "strawberry", "blue moon"], " moon"));

// Time complexity of this recursive function:
// since touching each element one time, this , like for loop, is O(n). o of n.

// Time complexity of slice:
// O(n) because looping through it just as a for loop would. slice is linear. negative of slice is we are going through the entire array. 
