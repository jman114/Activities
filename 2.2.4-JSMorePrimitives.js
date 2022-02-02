// create five variables and assign them values
let day = "Wednesday";
let weather = null;
let time = 2;
let cold = true;
let status;
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof day, typeof weather, typeof time, typeof cold, typeof status);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let currentDay = `Today is ${day} and it is ${time}.`;
console.log(currentDay);

// reassign the value of the variable that references "null"
weather = "cold";

// print the value and its type
console.log(weather);
console.log(typeof weather);

// print a variable that causes a ReferenceError
//console.log(temperature);

// alter the previous line to no longer cause a ReferenceError
let temperature;
console.log(temperature);