// ? TO DO: create a while loop that TOTALS the numbers from 1 to 100 by following these steps...
// 1) create a variable to represent the current number
let num = 100;

// 2) create a variable to represent the current total
let curTot = 0;

// 3) write a while loop that sums the numbers from 1 to 100
let i = 1;
while (i <= num) {
    curTot += i;
    console.log(curTot);
    i++;
}


// create a variable outside of the while loop
// inside the while loop, we keep track of it and re-assign it until the condition becomes false
let x = 1;

// while x is less than or equal to 10,
while (x <= 10) {
  // print x
  console.log(x);

  // increment by one and re-assign x
  // if we forgot this step, x <= 10 always evaluates to true and we create an infinite loop
  x += 2;
}