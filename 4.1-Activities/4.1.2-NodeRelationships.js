// select the root node
const root = document.querySelector("html");
console.log("Root Node ... ", root);

// select the last child of the root node
console.log("Root Node last child ... ", root.lastElementChild);

// select all the children of the body element
console.log(
  "Children of the body ... ",
  document.querySelector("body").children
);

// select the next sibling of the h2 node
console.log(
  "h2 next sibling ... ",
  document.querySelector("h2").nextElementSibling
);

// select the parent element of the h1 node
console.log("Parent of h1 ... ", document.querySelector("h1").parentElement);

console.log("\n ==============================");