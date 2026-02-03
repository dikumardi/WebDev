/** Phase 1 – Basic Logic & Numbers (Confidence Booster)
Do these first. Focus on loops, conditions, counters, and sums.
✅ Goal: Be confident with for loops, if-else, counters, and comparisons. **/

//1. Print numbers 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);   
}

//2.Print all odd numbers from 1 to 20.

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);   
    }   
}

//3.Print all even numbers from 1 to 20.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);   
    }   
}

//4.Sum of numbers 1 to 50.

let sum = 0 ;
for (let i = 1; i <= 50; i++) {
   sum += i ; 
}

//5. Sum of all even numbers 1 to 50.

let sumEven = 0 ;
for (let i = 1; i <= 50; i++) {
   if (i % 2 === 0) {
    sumEven += i ;
   }; 
}
console.log(sumEven);

//6.Count numbers divisible by 5 between 1 and 50.

let countNumber = 0 ;
for (let i = 1; i < 50; i++) {
    if (i % 5 === 0) {
        countNumber++;
    }   
}
//7.Find the largest of 3 numbers.

let a = 10 ;
let b  = 17
let c = 21 ;
if (a >=b && a>=c) {
    console.log(a);
}else if (b >=a && b >=c) {
    console.log(b);
}else{
    console.log(c);    
}

//8. Find the smallest of 3 numbers.

if (a <= b && a<=c) {
    console.log(a);
}else if (b <=a && b <=c) {
    console.log(b);
}else{
    console.log(c);
    
}
