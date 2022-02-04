// Logical Operators
// ? what do you expect each line to print?
// console.log(true && false); //false
// console.log(true || false); //true
// console.log(!true); //false
// console.log(!(true && false)); //true
// console.log(false || !false); //true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
// console.log("" && 0); //undefined
// console.log(undefined || null); //null
// console.log(!``); //true
// console.log(!(1 && "false")); //false
// console.log(!(0 && "false")); //true
// console.log((1 && "false")); //false
// console.log((2 && "false")); //false
// console.log((0 && "false")); //0
// console.log(NaN || !"true"); //false

// ? TO DO: set the age variable equal to a number, then use the conditional operator to construct an expression that returns "full menu" if the age is over 10, and "kids menu" if the age is less than 10
let age = 10;
let menu = (age >= 10) ? "Full Menu" : "Kids Menu";
console.log(menu);

age = 25;
if (age >= 10){
    console.log("full menu");
} else {
    console.log("kids menu");
}

// ? TO DO: using only logical operators (no comparison operators), write an if statement that prints "The number is zero" when num is 0.
let num = 0;
// * your if statement here *
num ? console.log("The number is not zero") : console.log("The number is zero");
//num = 0 ? console.log("The number is Zero"): num != 0 console.log("The number is Not Zero");

!num ? console.log("The number is zero") : null;
// if (num != 0){
//     console.log("the number is zero");
// } else { 
//     console.log("the number is not zero");
// }

// console.log(0 ? true : false);

//WHILE LOOP EXAMPLE SAME AS FOR 
// create a variable outside of the while loop
// inside the while loop, we keep track of it and re-assign it until the condition becomes false
let x = 1;

// while x is less than or equal to 10,
while (x <= 10) {
  // print x
  console.log(x);

  // increment by one and re-assign x
  // if we forgot this step, x <= 10 always evaluates to true and we create an infinite loop
  x++;
}

let t = "Space";
console.log(t);

//FOR LOOP EXAMPLE SAME AS WHILE
//set i equal to 1
//while i is less than or equal to 10, run the code inside the scope
//after running the code, increase i by 1 and try the loop again
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }