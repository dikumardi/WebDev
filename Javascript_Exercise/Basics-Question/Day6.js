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





// let str = 'hello';
// let rev = '';

// for (let i = str.length - 1; i >= 0 ; i--) {
//    rev = rev + str[i];
// }
// console.log(rev);


// let number = 121 ;
// let isPalindrome = true;

// for (let i = 0; i < number.length/2; i++) {
    
//     if (number[i] !== number[number.length-1 - i ])  {
//         isPalindrome = false;
//         break;
//     }
// }
// console.log(isPalindrome);



// let str = 'hello';
// let 
// h=0, 
// e = 0 , 
// l = 0 ,
// o = 0 ;

// for (let i = 0; i < str.length; i++) {
//    if (str[i] === 'h') h++ ; 
//   else if (str[i] === 'e') e++ ; 
//   else if (str[i] === 'l') l++ ; 
//   else if (str[i] === 'o') o++ ; 
    
// }
// console.log('h', h);
// console.log('e', e);
// console.log('l', l);
// console.log('o', o);


/** 
 * factorial of a number
 let n = 5 ;
let result = 1;
for (let i = 1; i <= n; i++) {
    result =result * i;
    
}
console.log(result);


   **/

/**Prime or not 
let n = 1 ;
let isPrime = true ;
if (n < 2){
    isPrime = false
}else{
    for (let i = 2; i < n; i++) {
        if (n % 2 === 0) {
          isPrime =false;
        }
    }
}
console.log(isPrime);
 
**/

/**Find Largest number
 let a = 10 ;
let b = 21 ;
let c = 17;

if (a >= b && a >= c) {
console.log('A is greater',a);    
} else if (b >=a && b >= c) {
    console.log('B is greater',b);
    
}else{
        console.log('c is greater',c);
}
  **/


/** 1. Print all the odd numbers from 1 to 20
   for(let i = 1 ; i <= 20; i++){
    if(i % 2 !== 0) {
        console.log("Odd number is",i);   
    }   
}

 *  2.Find the sum of all numbers from 1 to 50
let sum =0;
for (let i = 1; i <= 50 ; i++) {
    sum = sum + i ;
}
console.log(sum);

 *  3.Find the factorial of 4
let factorial = 4 ;
let res = 1 ;
for(let i = 1 ; i<= factorial ; i++){
    res = res * i ;
}
console.log(res);

 * 4. check if 17 is a prime number
let n = 17 ;
let isPrime = true ;
if ( n < 2) {
    isPrime =false ;
}else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false ;
        }
    }
}
console.log(isPrime);

 * 5.Print  them multiplication table of 5  **/



let n = 5 ;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);   
}


// print all number from 1 to 30 that are divisible by 3
for (let i = 1; i <= 30 ; i++) {
    if (i % 3 === 0) {
        console.log(i);
        
    }
    
}

// count how many even number are there between 1 and 20 
// let count = 0
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         count++;  
//     }
// }
// console.log(count);

// sum of all even numbers from 1 to 50
// let sum = 0
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sum = sum + i 
//     }
// }
// console.log(sum);

//count how many numbers between 1 and 50 are divisible by 5
// let count = 0 ;
// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0) {
//         count++;
//     }
// }
// console.log(count);


// How many vowels are  in this string
// let str = 'javascript'
// let count = 0 ;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a' ||
//         str[i] === 'e' ||
//         str[i] === 'i' || 
//         str[i] === 'o' || 
//         str[i] === 'u') {
//         count++ ;
    
//     }
// }
// console.log(count);

//Reverse a String
// let str = 'hello';
// let rev = ''
// for (let i = str.length - 1 ; i >= 0; i--) {
//     rev = rev + str[i] ;   
// }
// console.log(rev);


// let str = 'madam' 
// let isPalindrome = false ;
// for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] === str[str.length - 1 - i ]) {
//         isPalindrome= true
        
//     }
    
// }
// console.log(isPalindrome);





