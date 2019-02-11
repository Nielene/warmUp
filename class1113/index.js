//mine:

// Corey: Hint: fibonacci sequence:

for (let i = 0; i < n; i++) {
  for (let j = 1; j <= 2; j++) {

  }
}
// n = 1;
// 1 step;
// output = 1;
//
// n = 2;
// 1 step + 1 steps
// 2 steps
// output = 2
//
// n = 3;
// 1 step + 1 step + 1 step
// 1 step + 2 steps
// 2 steps + 1 step
// output = 3
//
// n = 4;
// 1 step + 1 step + 1 step + 1 step
// 1 step + + 1 step + 2 steps
// 1 step + 2 steps + 1 step
// 2 steps + 1 step + 1 step
// 2 steps + 2 step
// output = 5



//corey:-----------

// [1,2,3,5,8,13]

const stairCount = n => {
  if (n <= 2) return n;
  return stairCount(n - 1) + stairCount(n - 2)
}

stairCount(3)
stairCount(5)

stairCount(8)

//----------

console.log(30 * 30);
console.log(2**30) //much larger


//modified:

const stairCount = (n, memo = {0:0, 1:1, 2:2} => {
  if (memo[n] !== undefined) {
    console.log(memo[n]);
    return memo[n]
  };

  return memo[n] = stairCount(n - 1, memo) + stairCount(n - 2, memo)
}

stairCount(45)
stairCount(5)

stairCount(8)
