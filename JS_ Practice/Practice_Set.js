/*1. 1.	Declare a variable for your name */
let name = "name";
console.log(name);

/**2.	Declare a constant for Pi (3.14). */
const pi = 3.14;
console.log(pi);

/**3.	Check the type of 42, 'hello', true, null, undefined, NaN. */
console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);

/**4.	Convert a string to number and vice versa. */
// let num = Number('12');
// console.log(num);

// let str = String(22)
// console.log(str);

/**5.	Reassign a variable with new value. */
let reasin = 12;
reasin = 25;
console.log(reasin);

/** 6.	What happens if you reassign a const variable?*/
// const ra = 2 ;
// ra = 54 ;
// console.log(ra);
//Output---  Assignment to constant variable.

/**7.	Add two numbers and print result. */

let num1 = 10;
let num2 = 20;
sum = num1 + num2;
console.log(sum);
// 30

/*8.	Subtract, multiply, divide two numbers. */
sub = num1 - num2;
console.log(sub);

mul = num1 * num2;
console.log(mul);

div = num1 / num2;
console.log(div);

/*  Data Types*/

// 1. Predict the output
console.log(null + 1); // 1
console.log("5" + 3); // 53
console.log("5" - 3); // 2
console.log(true + false); // 1

// 2. Check types
console.log(typeof []); // object
console.log(typeof null); // object
console.log(typeof 123n); // bigint

//3. Truthy or Falsy?
console.log(Boolean(0)); //false
console.log(Boolean("0")); //true
console.log(Boolean([])); // true
console.log(Boolean(undefined)); // false

// 4. Write a function isEmpty(value)that checks if a given value is

// 5. Compare with loose vs strict:

console.log(5 == "5"); // true
console.log(5 === "5"); // false

// Operators
//  1. Predict:

console.log("10" + 1); //101
console.log("10" - 1); //9
console.log(true + false); //1
console.log(!!"Sheryians"); //true

//  2. Convert using unary +
let str = "42";
let num = +str;
console.log(num);

//  Use ternary:
let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg);

//   Build a calculator

function calc(a, b, operator) {
  console.log(a + b);
  
}
