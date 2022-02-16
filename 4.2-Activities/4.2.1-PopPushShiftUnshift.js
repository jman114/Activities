const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn = nums.pop();
console.log(nums);

let popReturn1 = nums.pop();
console.log(nums);
// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn = nums.shift();
console.log(shiftReturn);

// let shiftReturn1 = nums.shift();
// console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6



let unshiftReturn = nums.unshift(1);
nums.unshift(popReturn1);
console.log(nums);