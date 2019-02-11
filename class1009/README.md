Tues Oct 9 2018

WARM UP - write a code block that takes in an array and logs an object of the count of each element. Exp arr = ["h", "e", "l", "l", "o"]. should give back {h: 1, e: 1, l: 2, o: 1}


Reed:

start with empty object and fill it with stuff

instantuate a new key variable for each new character;

if my obj does not have that key; eg h - and answer does not have that key in h. if it does, then i want to increase the value attached to that key by 1.

(!answer[myArr[i]])
to evaluate things. eval the nested parts first. (re: maths class)

fancy way of saying:
!answer[myArr[i]] === undefined

myArr at i = h
if answer not have key at h (bang operator) then i want to make a key at h

create a key of h and a value of 1. why assign a value of 1? there is no reason to have a value of 0 in my object; bc if it doesnt appear, who cares. if it does not exist, it will not appear.


he mentioned in anw to some question:
dog: "woof" -- dog is a symbol that you can key into with dog.

if h appears a second time, it would already exist and want to add it to the existing h roster.
then increment it by 1.

----

if was a string instead:
CommandClick : change multiple instances of a word. CAN use split.

the arg os split is the char you want to split each string on. so if want to split on a ltter, lose that letter. if split on a space , get the words


answer["h"] === undefined
answer["h"]=== true

answer["h"] = 1
==> my object:
{"h" : 1}

objs are like collections of related variables.

! operator:
!1 = false

answer["h"] = 1
!answer["h"] = 1 ==> False

answer["h"] = 1
answer["h"] += 1
{"h" : 2}


if(!answer[myArr[i]]) {
//     answer[myArr[i]] = 1;
//   }else{
//     answer[myArr[i]] += 1;
//   }

or can flip it:
if it exits (no bang), add to it; else create it:

if(answer[myArr[i]]) {
  answer[myArr[i]] += 1;  
}else{
  answer[myArr[i]] = 1;
}

cant key into words, can only key into characters.


Digital Language Arts - English masters.
OKCorral clone of OKCupid



Q:
an array of integers. target k.
return these pairs in sequential order [0,3], [1,2]

i know that i have to compare two elements in an array of intergers and compare it to target k.
need to loop through the array twice.

arr.length - 1 = to ignore the last element in array:
first loop: 0, 1, 2
second loop: 1, 2, 3

j : arr.length = do want to account for the last element

if (i != j) : bc dont want to add a character with itself

j = i+1:
so when i is 0, j only looks at 2 and 3, and when i is 1, j only looks at 2 and 3

i will never = j bc j will always be greater than i

thus solution is the length of the array time itsself. == the length of the array SQUARED!
SO this solution is brute force and heavy-handed.
for i = 0
0, 1, 2 ,3   comapre to this twice.
0, 1, 2, 3

"overn squared time complexity."

if array is 4 elements = 4^2
if array is 900 billion = 900B^2 things.

which is exponential.


WHITEBOARDING:
collaborative not competitive or adversarial. we are all on the same page, (lets pretend) working together. coworkign session.

waht do you think of this so far.
I think it might be better for me to do the brute force solution first and then come up with optimised solution later.
make open-ending questions first.

your mannerism will invite them to collaborate with you. and if not, they may not be the kinds of ppl you want to wrk for.

89% of devs train you afterward to make you better.

a diff stack from what we use here anyway. bc q one does.

DO NOT GIVE UP!



-- -- -- -- --

NOTES: afternoon Tues Oct 2018

Reed:

a viariable that automatically changes itseft as we moove throgu a for loop.

arrays are indexed. so you can use use i convenientlly. traver a data objects taht has indices

traversing thoug array using i.
keying into the array using i.

see NOTES 1. and 2.

* test driven development: SPECs

EXAM:
run the specs.the no of specs taht you pass corresponds to your grade.

-- -- --- -- -- --- -- --- ---- ---
arrays: no. 13.
JS reads from top to bottom with exceptions.

arrays: no. 15. what we whiteboarded.
console log the indicies (as an array) of the elements that add up to the target k.
the indicies (location of elements) is diff from the elements themeselves.

for (let i = 0; i< arr.length -1; i++){

//dont want my i to be the last element on the array; won't be be
  // console.log("OMG ii's i 1", i));

.
