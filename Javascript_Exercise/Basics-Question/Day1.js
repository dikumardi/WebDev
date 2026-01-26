/** WEEK 1 — JavaScript Core
Day 1 — Variables, Hoisting, Scope **/

// Q1
console.log(a);
var a = 10; // undefined

// Q2
console.log(b);
let b = 20; // cannot find b before initialization

// Q3
{
  var x = 5;
}
console.log(x); // 5

// Q4
{
  let y = 10;
}
console.log(y); // y is not defined

// Q5
function test() {
  console.log(a);
  var a = 1;
}
test(); // undefined

// Q6
function test() {
  console.log(a);
  let a = 1;
}
test(); // tdz

// Q7 — Fix the scope bug
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


/** for (let i = 0; i < 3; i++) {
  
  setTimeout( () => {
  console.log(i)
},1000);
  
  
} **/

// Q8 — Rewrite using best practice
var count = 5;
count = 10;
/** 
  let count = 5
  count = 10
  **/

// Q9 — Identify error
const user = { name: "A" };
user = { name: "B" };
// user.name = "B";

// Q10 Why does let have Temporal Dead Zone but var does not?
//var is initialized with undefined during hoisting

// let is hoisted but NOT initialized



var a = 10;
function test() {
  console.log(a);
  a = 20;
}
test();
console.log(a);
//10
// 20