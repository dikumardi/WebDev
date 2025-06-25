// let  a = 10 ;

// let b = 10 ;

// console.log(a+b);

/*
string + string = string (concatenation)
string + int = string

int + int = int (Arithmetic )
*/

// let a = 20 ;
// let b = 10 ;

//console.log("sum of "+ a +" and "+ b + " is "+ (a+b));
 
// type coercion.
console.log(5 * '2'); // 

console.log();

// . Accept and print the answer

// let age = Number(prompt('Enter user age')) ;

//console.log(age);

// Swap two variables via 3 methods

// let a = 10 ;
// let b = 20 ;


/** using 3rd variable
let temp = a ;
a = b ;
b = temp ;
console.log(a , b);

 **/

/** Without using 3rd variable 

a = a + b ; // 10 + 20 = 30 = a
b =  a - b ;  //  30 - 20 = 10 = b
a = a - b ;     // 30 - 10 = 20
console.log(a,b);

**/


/**
 
[a , b] = [b , a];
console.log(a,b);

**/

/**
 —Operators and their questions
 — Arithmetic - ‘+ , - , * , % , /’
 —Relational operator - ‘> , < , ≥ , ≤ , ≠’
 —logical operator - ‘&& , ||’
 —Unary operator - ‘+
 */

 console.log(10 % 2);
 console.log(Math.floor(10/3));
 
 
 console.log(10>20); //false
 console.log(10>=8); // true
 console.log(10<7); // false
 console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10!=20); // true
console.log(10!=10); // false


 
//logical 

console.log(10>8 && 19>5 ); //true
console.log(10<8 && 19>10 ); //false

console.log(10>2 || 18 < 15 ); // true

// Unary operator - ‘+
// let a= 10 ;
// a++;

// pre 
let a = 20 ;
console.log(a++ + ++a);



