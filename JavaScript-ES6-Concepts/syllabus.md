# JavaScript Complete Guide - From Basics to Advanced

---

# Part 1: Basics

## 1. Variables & Constants

* **Variables:** Like boxes to store things. Can change contents.
* **Constants:** Fixed, never change.
* **Keywords:** `let`, `const`, `var`

```javascript
let waterBottle = "Empty";
waterBottle = "Filled";

const pi = 3.1416;
```

## 2. Data Types

* Number, String, Boolean, Undefined, Null, Object, Array

```javascript
let name = "Diku";   // String
let age = 22;        // Number
let isStudent = true; // Boolean
let hobbies = ["Coding", "Reading"]; // Array
let details = {city: "Bhubaneswar", country: "India"}; // Object
```

## 3. Operators

* Arithmetic: `+ - * / %`
* Assignment: `=, +=, -=`
* Comparison: `==, ===, >, <`
* Logical: `&&, ||, !`

```javascript
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a > b); // true
console.log(a < b && b > 2); // true
```

## 4. Conditional Statements

```javascript
let temperature = 35;
if (temperature > 30) {
    console.log("It’s hot outside");
} else if (temperature > 20) {
    console.log("It’s warm outside");
} else {
    console.log("It’s cold outside");
}
```

## 5. Loops

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Hello friend " + i);
}
```

## 6. Functions

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Diku"));
```

---

# Part 2: ES6 Concepts

## 7. Arrow Functions

```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Diku"));
```

## 8. Template Literals

```javascript
let city = "Bhubaneswar";
console.log(`I live in ${city}`);
```

## 9. Default Parameters

```javascript
function greet(name = "Friend") {
    return `Hello, ${name}`;
}
```

## 10. Spread & Rest Operators

```javascript
const arr1 = [1,2,3];
const arr2 = [...arr1,4,5]; // Spread
function sum(...numbers) { // Rest
    return numbers.reduce((a,b) => a+b, 0);
}
```

## 11. Destructuring

```javascript
const person = {name: "Diku", age: 22};
const {name, age} = person;
const [first, second] = [10, 20];
```

## 12. Classes & Inheritance

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  constructor(name, age, roll) {
    super(name, age);
    this.roll = roll;
  }
}
```

## 13. Promises & Async/Await

```javascript
function fetchData() {
  return new Promise(resolve => setTimeout(()=>resolve("Data"),1000));
}
async function getData() {
  const data = await fetchData();
  console.log(data);
}
getData();
```

---

# Part 3: Advanced JavaScript

## 14. Closures

```javascript
function bankLocker() {
  let secretCode = 12345;
  return function() {
    console.log("Accessing locker with secret code: " + secretCode);
  }
}
let myLocker = bankLocker();
myLocker();
```

## 15. Higher-Order Functions

```javascript
const numbers = [1,2,3,4];
numbers.map(n => n*2);
numbers.filter(n => n%2===0);
numbers.reduce((a,b)=>a+b,0);
```

## 16. Callbacks

```javascript
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}
greet("Diku", ()=>console.log("Callback executed"));
```

## 17. Event Loop & Async JS

* JS is single-threaded. Async code runs after main thread finishes.

## 18. `this` keyword

* Refers to object that is calling the function. Changes in arrow vs normal functions.

## 19. Prototype & Prototype Chain

* Objects inherit from prototypes. Enables shared methods.

## 20. Error Handling

```javascript
try {
  throw new Error("Something went wrong");
} catch(e) {
  console.log(e.message);
}
```

## 21. LocalStorage & SessionStorage

```javascript
localStorage.setItem('name','Diku');
console.log(localStorage.getItem('name'));
```

## 22. Fetch API

```javascript
fetch('https://api.example.com/data')
  .then(res=>res.json())
  .then(data=>console.log(data));
```

---

# Part 4: Mini Projects

## 1. Calculator

* Take two inputs and perform +, -, *, /
* DOM interaction + event listeners

## 2. To-Do List

* Add tasks, delete tasks, mark done
* Store in localStorage

## 3. Digital Clock

```html
<h1 id="clock"></h1>
<script>
setInterval(()=>{
  document.getElementById('clock').innerText = new Date().toLocaleTimeString();
},1000);
</script>
```

## 4. Weather App

* Fetch data from OpenWeather API, display temperature and condition

## 5. Quiz App

* Store questions in array, calculate score, show result

## 6. Expense Tracker

* Add expense, store in localStorage, calculate total, delete item

---

# Exercises & Practice

* Make all functions from Parts 1-3 yourself
* Create small projects first, then larger ones
* Try modifying examples with your own ideas



# JavaScript Concepts: Array Methods, Objects, and Async JS

---

## 1. Array Methods

### a) map()

* Creates a new array by transforming each element of an existing array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### b) filter()

* Creates a new array with only the elements that pass a condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### c) reduce()

* Reduces an array to a single value by applying a function.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 10
```

---

## 2. Objects

### a) Copying Objects

* **Shallow Copy:** using spread operator

```javascript
const person = { name: 'Diku', age: 22 };
const copy = { ...person };
copy.name = 'John';
console.log(person.name); // Diku
```

* **Deep Copy:** using JSON methods (simple objects)

```javascript
const person = { name: 'Diku', details: { city: 'Bhubaneswar' } };
const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.details.city = 'Delhi';
console.log(person.details.city); // Bhubaneswar
```

### b) Destructuring

* Extract values from objects or arrays.

```javascript
const person = { name: 'Diku', age: 22 };
const { name, age } = person;
console.log(name, age); // Diku 22
```

### c) Updating Nested Objects

```javascript
const person = { name: 'Diku', details: { city: 'Bhubaneswar', country: 'India' } };
const updatedPerson = {
  ...person,
  details: {
    ...person.details,
    city: 'Delhi'
  }
};
console.log(updatedPerson.details.city); // Delhi
```

---

## 3. Async JavaScript

### a) Promises

* Represent a value that will be available in the future.

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data fetched!'), 1000);
});

fetchData.then(data => console.log(data)); // Data fetched!
```

### b) Async/Await

* Syntactic sugar over promises for cleaner asynchronous code.

```javascript
const fetchData = () => {
  return new Promise(resolve => setTimeout(() => resolve('Data fetched!'), 1000));
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData(); // Data fetched!
```

### c) Fetch API

* Used to make HTTP requests.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data));

// Using async/await
async function getTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
}
getTodo();
```

---

These concepts are essential before moving to React, as they help manage state, props, arrays, objects, and API calls effectively.
