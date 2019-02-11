WARM UP! You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Corey: Hint: fibonacci sequence:

//is it equal to 2, no so keep going
SC(4) = (n-1) + (n-2) = (4-1) + (4-2)

                       SC(5)
             SC(4)       +   SC(3)
      SC(3)    + SC(2)   +   SC(2) + SC(1)
SC(2) + SC(1)             

                        8
              5         +       3
        3    +   2      +     2 + 1
      2 + 1          

    it trickles upward.
    this is redundant bc js works from the left across. for instance, teh 3 has already been done on teh left. why should we have to deal with it on the right! same for 3. so, lets modify the funcion. lines 60 in index.js

time complexity = 2^n
for each call, making 2 calls, and each of tehm is making 2 calls.
separates in 2 then separates in 2 then separates in 2.

2^n is n calls deep. takes longer to grow. adds a whole extra rows at the bottom. doing way more operations.
n^2 is 2 calls deep.


log(n) is better than n
n = 100 => 50 => 25 => ... halfing (it's good)
