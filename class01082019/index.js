const find = (stack, value) => {
  let answer
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] !== value) {
      answer = 'null'
    } else {
      answer = value
    }
  }
  return answer;
}

console.log(find([1,2,3,4,5], 6));
