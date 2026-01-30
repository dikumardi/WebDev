// 1. Print all the odd numbers from 1 to 20
   for(let i = 1 ; i <= 20; i++){
    if(i % 2 !== 0) {
        console.log("Odd number is",i);   
    }   
}

 // 2.Find the sum of all numbers from 1 to 50
let sum =0;
for (let i = 1; i <= 50 ; i++) {
    sum = sum + i ;
}
console.log(sum);

 //  3.Find the factorial of 4
let factorial = 4 ;
let res = 1 ;
for(let i = 1 ; i<= factorial ; i++){
    res = res * i ;
}
console.log(res);

 /* 4. check if 17 is a prime number
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

 /* 5.Print  them multiplication table of 5  **/

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
let countEven = 0
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        countEven++;  
    }
}
console.log(countEven);

// sum of all even numbers from 1 to 50
let sumEven = 0
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sumEven = sumEven + i 
    }
}
console.log(sumEven);

//count how many numbers between 1 and 50 are divisible by 5
let count = 0 ;
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        count++;
    }
}
console.log(count);


// How many vowels are  in this string
let string = 'javascript'
let countV = 0 ;
for (let i = 0; i < str.length; i++) {
    if (string[i] === 'a' ||
        string[i] === 'e' ||
        string[i] === 'i' || 
        string[i] === 'o' || 
        string[i] === 'u') {
        countV++ ;
    
    }
}
console.log(count);

// Reverse a String
let str = 'hello';
let rev = ''
for (let i = str.length - 1 ; i >= 0; i--) {
    rev = rev + str[i] ;   
}
console.log(rev);


// check isPalindrome
let str2 = 'madam' 
let isPalindrome = false ;
for (let i = 0; i < str2.length / 2; i++) {
    if (str2[i] === str2[str2.length - 1 - i ]) {
        isPalindrome= true
        
    }
    
}
console.log(isPalindrome);





