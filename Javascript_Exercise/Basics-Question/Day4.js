/**Day 4 — Objects & References **/

// Q1 — Predict output
const a = { x: 1 };
const b = a;

b.x = 2;  
console.log(a.x); //2

// Q2 — Predict output with shallow copy
const a2 = { x: 1 };
const b2 = { ...a2 };
b2.x = 2;
console.log(a2.x); //1

// Q3 — Fix mutation
function updateUser(user) {
  return {
    ...user,
  age : 30,
  }
}

// Q4 — Shallow copy correctly
