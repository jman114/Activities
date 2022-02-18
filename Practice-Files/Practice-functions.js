// Regular Function 
// const greet = function() {
//     return `hello, world`;
// };

// Arrow Function
// const greet = () => `hello, world`;

// //Invoking Function
// const result = greet();
// console.log(result);

// More Complicated Function - Products price + tax * Product price 
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// Same as function above only using Arrow 
// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30], 0.2))

// const name = `shaun`;

// // functions 

// const greet = () => `hello`;

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callbacks & foreach 

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = "50";
//     callbackFunc(value);
// };

// myFunc(function(value){
//     // do something
//     console.log(value);
// });

// above as arrow function 
// myFunc(value => {
//     //do something
//     console.log(value);
// });

// Me Testing With Pizza Size 

// const myFunc = (pizzaSize) => {
//     // do something
//     let value = "Large";
//     pizzaSize(value);
// };

// // Pizza Example Using Arrow
// myFunc(value => {
//     console.log(value);
// });

// myFunc(function(value){
//     // do something
//     console.log(value);
// });


// let people = [`mario`, `luigi`, `ruy`, `shaun`, `chun-li`];

// //Callback Function 
// // people.forEach(function(person){
// //     console.log(person);
// // });

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// // Callback Function Example As Arrow
// people.forEach(logPerson);

//get a reference to the "UL"

const ul = document.querySelector(`.people`);

const people = [`mario`, `luigi`, `ryu`, `shaun`, `chun-li`];

let html = ``;

people.forEach(person => {
// create html template
html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

alert(`Hello, world`);

// const colors = ["blue", "green", "white"];
// function clothes(shirt, index) {
//   console.log(`My shirt is ${shirt} and has ${index} pockets`);
// }
// colors.forEach(clothes);

// // Refactoring the above code looks like this ...
// colors.forEach((shirt, index) => {
//     console.log(`My shirt is ${shirt} and has ${index} pockets`);
// });

// // "blue has index 0"
// // "green has index 1"
// // "white has index 2"

// Map Method Returning Created Array

// let arr = [1, 2, 3, 4];

// let newArr = arr.map((val, i, arr) => {
//   let example = val + 5;
  
  
//   return example;
// });
// console.log(newArr);