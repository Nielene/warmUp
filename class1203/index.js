function objectivity(array) {
  let object = {};
  for (let i = 0; i < array.length; i++) {
    // Object.keys(object) === array[i][0] ;
    // Object.values()
    console.log("ARR",array[i][0]);
    console.log(object.push(Object.values(array[i][0])));
  }
  return object;
}

// let arr = [
//   ["name", "corey"], ["age", 100]
// ]
//
// let obj = {
//   name: "corey", age: 100
// }

// console.log(objectivity([["name", "corey"], ["age", 100]]));

//------ corey / JonE ------

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

// console.log(objectifyC([["name", "corey"], ["age", 100]]));

//-----------------------Red: --------

function objectifyRed(arr) {
  return arr.reduce((acc, currEl) => {

      let key = currEl[0];
      let value = currEl[1];
      acc[key] = value;

    console.log("acc",acc);
    return acc;
  }, {})
}

console.log("func", objectifyRed([["name", "corey"], ["age", 100]]));

//----- test: ------
function objectifyRedTest(arr) {
  return arr.reduce((acc, currEl)=> {
    let key = currEl[0];
    let value = currEl[1];
    acc[key] = value;
    return acc;
  }, {})
}

console.log("func", objectifyRedTest([["Why", "because"], ["when", "ever"], ["Where", "ever you are"]]));

//-------- corey Reduce -----------

function objectifyRedC(arr) {
  return arr.reduce((acc, currEl)=> {
    let key = currEl[0];
    let value = currEl[1];
    acc[key] = value;
    return acc; //whatever was reutrned in teh last iteration becomes the acc of the next iteration.
  }, {})
}

//----------- corey / max? ------------

function objectifyRedC(arr) {
  return arr.reduce((acc, [key, value])=> {
                      //re: [a, b] = [b, a]
    // let key = currEl[0];
    // let value = currEl[1];
    acc[key] = value; //this is how you assign a key:value pair.
    return acc; //whatever was reutrned in teh last iteration becomes the acc of the next iteration.
  }, {})
}

//re: [a, b] = [b, a]

//--------------------------




















//
