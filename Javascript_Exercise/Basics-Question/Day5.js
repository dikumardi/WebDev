/**Day 5 — Functions & Closures **/

// Q1 — Counter using closure
function counter() {
  let count = 0 ;
  function a() {
    count ++ ;
  }
  a();
  return count ;
}
counter();

// Q2 — Predict output
function test() { console.log(this); }
test(); // window

// Q3 — Predict output
const obj = {
  name: "JS",
  test() { console.log(this.name); }
};
obj.test(); //window k andar name djekoge to name js dhekega

// Q4 — Fix bug
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
