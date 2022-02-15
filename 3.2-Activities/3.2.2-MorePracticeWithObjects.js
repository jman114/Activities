// bracket and dot notation
const key = "1";
const obj = {
  key: "the key is 'key'",
  1: "the key is 1"
};
// // what will the following lines print?
// console.log(obj[key]);
// //the key is 1
// console.log(obj.key);
// //the key is 'key' 
// console.log(obj["key"]);
// //the key is 'key'

// create an object with at least four properties, each with a different data type
// name one of the four properties "collection" and set its value to an Array or Object

const something = {
    x: "This is x",
    number: 3,
    love: true,
    collection: [1, 2, "love"],
};

// // access a value in in "collection" property
// console.log("All you need is",
// something.collection[2]);

// Nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// fill in your favorite movie and color below
obj["favorites"] = {
  movie: "scream",
  number: 17,
  color: "blue"
};

obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// how many lines will the following for...of statement print?
//5
// what do you expect to see on each line?
for (let key of keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}
//Key is: key and value is: the key is 'key'
// 
//Refer line 31 - console.log(obj.method());

// use a template literal to print a sentence about your favorite movie and color

console.log(
  `My favorite movie is ${obj.favorites.movie}, and my favorite color is ${obj.favorites.color}.`
);

// access the values "b", 4, and 6 from obj.list