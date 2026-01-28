/**Day 6 — Strings & Loops**/

// Q1 — Reverse string "javascript"
let string = "javascript";
let rev = "";
for (let i = string.length - 1; i >= 0; i--) {
  rev = rev + string[i];
}
console.log(rev);
/**  **/

// Q2 — Check if "madam" is palindrome
let word = "madam";
let isPalindrome = true;

for (let i = 0; i < word.length / 2; i++) {
  if (word[i] !== word[word.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome);

// Q3 — Count character frequency in "hello"
let str ="hello";
let h = 0,
    e=0, 
    l =0,
    o=0
for (let i = 0; i < str.length; i++) {
   if (str[i] === 'h') h++ ;
   else if (str[i] === 'e') e++; 
   else if (str[i] === 'l') l++; 
   else if (str[i] === '0') o++; 
}
console.log("h: " , h);
console.log("e: " , e);
console.log("l: " , l);
console.log("o: " , o);

// Q4 — Find first non-repeating character

// Q5 — Count vowels in a string

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 0; i <= 50; i++) {
  sum = sum + i;
}
console.log(sum);


for (let i = 0; i < array.length; i--) {
   
    
}

// let num = Number(prompt('Enter a number'));
// let result = 1 ;
// for (let i = 1; i <= num ; i++) {
//     result = result * i ;
// }
// console.log(result);



let num = Number(prompt('Enter a number'));
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
       if (num % i === 0) {
          isPrime = false;
          break;
       }
        
    }
    }
console.log(isPrime);



