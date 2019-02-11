const removeDupsWithExcept = (str1, str2) => {
  let result = "";
  let str1Ojb = counter(str1)
  let str2Obj = counter(str2)
  for(let i = 0; i < str1.length; i++) {
    if(str1Ojb[str1[i]] < 2 || str2Obj[str1[i]]) {
      result += str1[i]
    }
  }

  return result;

}

const counter = (str) => {
  let count = {};
  for(let i = 0; i < str.length; i++) {
    if(count[str[i]]) {
      count[str[i]]++
    } else {
      count[str[i]] = 1;
    }
  }
  return count
}


removeDupsWithExcept("hello world", "l")


//---------reed's ------------------------

const removeDupsExcept = (str, exc) => {
  let excObj = {};
  let resultObj = {};
  let result = "";

  for (let i = 0; i < exc.length; i++) {
    if (!excObj[exc[i]]) {
      excObj[exc[i]] = true;
      // excObj["l"] = true
    }
  }

  // exc = "ld"
  // excObj = { "l": true, "d": true }
  // excObj["a"] => undefined

  for (let i = 0; i < str.length; i++) {
    if (excObj[str[i]]) {
      result += str[i];
    } else if (!resultObj[str[i]]) {
      result += str[i];
      resultObj[str[i]] = true;
      console.log("this is resultObj, it's helpful: ", resultObj);
      console.log("this is the running result: ", result);
    }
  }

  return result;
};
