// reed [9:46 AM]
// @channel WARM UP! Create a function `removeOneOk`, that accepts a string and returns true if you can remove one character and have the character count be equal between different characters. (edited)
//
// For example, `aab` is `true`, because you can remove an `a` and you have `ab`, which has the same number of characters.
// You might remember this from your Justworks whiteboarding :slightly_smiling_face:

function removeOneOk (str) {
  let items = [];
  let length;
  let splitString = str.split('').sort()
  // return splitString

  // items.key('str') = items.value('quantity');

  for (let i = 0; i < splitString.length; i++) {

    if (splitString[i] = splitString[i+1]) {
      length = splitString[i] + ': ' + splitString[i].length
    }
  }

  return length;


}

console.log(removeOneOk('aabbaa'));
