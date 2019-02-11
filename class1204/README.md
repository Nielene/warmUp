(I was late)
https://www.youtube.com/watch?v=4H8rYS9AqeU

//1.
Write a bubbleSort function.

``Reminder, while loop and for loop. comparing each element to its neighbor. Switching places if next element is smaller.\
keep track of a sorted variable.
while notSorted iterates and compare adjacent elements. if a swap is made notSorted is true.


``


_if we go all the way through the array and we never swap anything, thenit is safe to assume we have sorted. continue to do (this) pattern WHILE it is not sorted.
need to be able to escape this while loop eventually. if we have not made a swap, make it false (by default). therwiise, going to change sorted back to true and go back through my for loop again._


//2.
Write a merge function that takes in two sorted arrays and returns one sorted array.

exp: merge([3,5,6,8,77,122], [1,4,5,100])
//=> [1,3,4,5,6,8,77,100,122]

_our merge function takes two already sorted arrays and merge them into one sorted array._

_the while loop is checking for a condition while the for loop is about going through the array._


//3.
Write a mergeSort (recursive) that returns a sorted array and uses the merge function.

``Reminder, when is the base case? When is an array for SURE already sorted.
``

_takes in one array. Re: divide and conquer:

3,4     1,2,5
left side then rt side:

[3,4,1]    [2,5]
[3,4], 1
/_

http://www.cs.umd.edu/~meesh/351/mount/lectures/lect6-divide-conquer-mergesort.pdf


[3,4,1,2]
ls [3,4]
rs [1,2]
this doesnt hit our base case:
ls = 3
rs = 4

[3,4]

ls [1]
ls [2]

return the merge of these:
[1,2]

back to :
leftSorted
Rsorted
[1,2,3,4]


**Quick sort**
```js
function quickSort
recursive function.
base case ? When is an array guaranteed to be sorted.
choose a pivot (for now last element in array)
find all el's to left and store as array.
find all el's to right
This should be done in one loop.
return quickSort left concatted with pivot and quickSort right.

```
















//
