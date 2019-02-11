Write a function that returns the second largetst number in an array.

//--------
BIG = 6     another arr el = 8
SECOND = 1

1. second = big = 6
2. big = 8

otherwise:
1. big = 8;
2. second = big = 8    AS WELL!

//--------------------

// write a recursive function that takes in a range and returns an array from that low number to that high number.
// range(3, 8) //> [3, 4, 5, 6, 7, 8]

//-----
if range(2,1) then return an empty array.

range(3,2) // => []

if range(1,1) then return an array containing 1.

range(1,1)// => [1]

TIME COMPLEXITY = the number of calls we have to make = high - low

down call stack. meet not base case. go back up call stack. return.
output becomes [] when base case is reached and function's return => becomes [].


r(1, 3)       [1,2,3]
cl: 1
low: 2
output = r (2,3)    [1,2,3]
          cl: 2
          low: 3
          output = r(3,3)   [2,3]
                    cl: 3
                    low: 4
                    output = r(4,3)   []
