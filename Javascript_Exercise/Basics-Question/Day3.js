/** Day 3 — Arrays (No Methods) **/
// Q1 — Sum even numbers
const arr = [1, 2, 3, 4, 5, 6];
  let sum =0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 ) {
        sum = sum + arr[i];  
    }
}
    console.log(sum);


// Q2 — Maximum value
// const arr2 = [10, 5, 20, 8];
let max=0
for (let i = 0; i < arr2.length; i++) {
    if (max <= arr2[i]) {
        max = arr2[i];
    }
}
console.log(max);





// Q3 — Minimum value
// same arr2
const arr2 = [10, 5, 20, 8];
let min=arr2[0];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] <= min) {
        min = arr2[i];
    }
}
console.log(min);


// Q4 — Count occurrences
const arr3 = ["a", "b", "a", "c", "b", "a"];
let countA = 0 ;
let countB = 0 ;
let countC = 0 ;

for (let i = 0; i < arr3.length; i++) {
 if (arr3[i] === 'a') {
       console.log('a is',countA++);
    
 } else if (arr3[i] === 'b' ) {
       console.log('b is',countB++);
 } else if (arr3[i] === 'c' ) {
       console.log('c is',countC++);
       

 }  
}

console.log('A',countA);
console.log('B',countB);
console.log('C',countC);

// Q5 — Reverse array manually
for (let i = arr.length-1; i < 0; i--) {
    console.log(arr[i]);   
}
