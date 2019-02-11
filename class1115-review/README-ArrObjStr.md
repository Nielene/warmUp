from now on we will not be doing warmUps. we will be doing reviews in the morning.

arrays objects and strings

arrays - store data (datum, singular)
intergers - store one piece of data.

how dow we access thtaa data?

vs integers where you just state it and it returns itself.

Arrays are indexed!

arr = [1,2,3]
arr[1] = 2;

what if i dont know where 2 is? cant give it a specific index.
beyond ability to do.

loops enter here.
the best application of loops is to find something in an array when you dont know were it is.
an array method: forEach: takes a callback function. whose arg is each individual aspect of an array.
the most frequent applicaiton of loops is when you are trying tofind something but you dont know where it si.

key into each value. look at that value. el represents that value. in a forloop, we are workjng with i. each index of array as we set it up.

forEach is a replacement for arr[i] => el inside of a forEach loop.

what if we want he index as well? for each also accepts a second argument tha t gives you the index of el.

```js

arr.forEach( (el, i) => {
  if (el === 2) {
    //do something
  }
})

```
if want to modify array at index 1 to be something else:
```js

arr = [1,2,3]

arr[1] = "blah"

```
keying into index and setting it equal to something else.
```js

arr = [1, "blah", 3]

arr = [1,2,3]
newArr = [];
arr.push()

```

what properties do *strings* have? - they are also indexed.

str = "Reed";
str[i] === "e";

has a .length method. can use a for loop on them.

"R", "e", "e", "d"

split and join:

strings dont naturally separate themselves by word.
when have a string with several words in it is split it on an empty space. separate each substring in my string and separte by empty space.

split(" ")
teh argument of split dies when it separates the string by it.

join(" ")
arg os join is the thihng that joins it up. so if separted it by spance can get those spaces back.

separates strings on substrings. makes string way easier to work with.

split and join are critical to accessing strings.

join is an array method. eg array of strings:

arr = ["Good", "Morning"]
arr.join(" ")
"Good Morning"

can *join* it on an empty space and get he string GoodMoring.

*concat* is a sting method for two strings.

if had two separte variables:


vs push whic modifies the original array even if it is in a separate variable.
concat doesnt do anything to the original array. so have to make new variable to modify theh whole thing.
```js
str1 = "Good";
str2 = "Morning";

str3 = str1.concat(" ")
            .concat(str2);
```


*Objects:*

objects do not have indices. order does not matter with objects. the order of a value in an index is it's key!

the index / the  way that we acess the vaule in an object is the key in the key/value pair.

```js

obj =
{
  dog: "fido",
  cat: "beelzebub"
}

obj["dog"]   or   obj.dog

```
it still returns undefined when there isnt somethin gthere.
eg when using a key that doesnt exist(yes) / or if the value doesnt exist(?).

an empty array in an empty obj is actually a truthy.
can prevent with
```js
if (obj.dog.length) {

}
```
that is a truthy value. so can circumvent it.

can make key more descriptive.

to label.

obj = {
  myName: "Nielene",
  yourName: "Reed",
  hisName: "Corey"
}

when looking for a particular value but dont know what the key is, not as easy.

convert my obj into an array then loop through it. bc cannot loop through an object.

```js
Object.keys(obj)
```
at object, obj


Object is a defined class in JS

a class has a method keys on int

loop through this array, and for each key, i can ...

```js
let keys = Object.keys(obj)
```
=> keys are an array now.

```js
keys.forEach(key => {
  if (obj[key] === "fido") {
    //access to both key and value.
  }
})
```

A circle of life:
object -> Array (Object.key) -> loop thorugh arr -> key into obj -> object


Object.key is a method on the Object class.
to convert the values, use Object.value.

```js
let keys = Object.keys(obj)
        {dog: "fido"}

=> ["dog", "cat"]     
        obj["dog"]

keys.forEach( el => {
  if (obj[el] === "fido")
})



let keys = Object.keys(obj.message)
        {dog: "fido"}
message: {}

=> ["dog", "cat"]     
        obj["dog"]

keys.forEach( el => {
  if (obj[el] === "fido")
})
```

the rule of demeter. do things simply. not too complicated.

obj.data.message.users.address
OR: bracket notation:
obj[data][message][users]address


could just keep keying into it. but dont do that. keying into one obj to key into another. then another part of the object on another line.












//
