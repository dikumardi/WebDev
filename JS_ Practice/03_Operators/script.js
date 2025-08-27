//  What are Operators?
// Operators are special symbols that let us to perform mathematical problem

// 1 .Arithmetic operators (+ , - , /, % , **)
console.log(10 + 20);
console.log(10 - 20);
console.log(10 / 20);
console.log(20 % 4);
console.log(2**3); //8 here ** means power

//2 . Assignment Operator ( += , -= , /=, %= , **=)
var x =10 ;

// x += 5 ;      //  x= x + 5 ;
// console.log(x);

// x -= 5 ;      //  x= x - 5 ;
// console.log(x);

// x /= 5 ;        x = x / 5 ;
// console.log(x);

// x %= 5 ; 
// console.log(x);
var expo = 2
expo **= 3 ;
console.log(expo);

/** 3.  Comparision ( == , ===, != ,!== , > , < , >= , <= )    **/
 // == check it both the operand are same or not .
 console.log("both are equla or not",10== 43);
  console.log("both are equla or not",10== "10");// true because it doesn't care whether it type is string  or number .so if both side has same value it  doesnot matter whether it is type is string in case of ==

  // === it check its value as well as its type 
   console.log("triple equal",10===43);
      console.log("triple equal",10==="10"); // false because === check value as well as its type

// != it doesn't care it tpe .both value ae different then true if both same then false
console.log("2 not equal to 23",2!=23); // true
console.log("2 not equal to 2 ",2!=2); // false
console.log("2 not equal to 2 ",2!="2"); // false

// !== dono value aur type same ho to false  . value ka type m se kuch v alag hoga to true 
 console.log("5 not equal equal to 5",5!=="5"); //  true
console.log("5 not equal equal to 7 ",5!==7);// true
console.log("5 not equal equal to 5 ",5!==5);// false
console.log("hello not double equal to world ","hello"!=="world");// true

console.log(2>5); //false
console.log( 5 <10); //true
console.log(22>=22); // true
console.log(32<=31); //false






//4. Logical (&& , || ,! )
// used to combine two condition at a same time
/** let age = 25 ;
if (age > 18 && age < 40) {
    console.log("you can vote ");
}else{
    console.log("you are not eligile");
    
}
**/
console.log(12 > 10 || 111<450);


//! is if it is true then it will be false .if false then it will be true
console.log("i say not true then ans will false not true ka ulta false",!true);



// unary operator (+ -  ++ -- !  ~ typeof)
// + try to convert its operands into a number
console.log(typeof 12);

// ++ increment
var a = 10
++a ;
console.log(a);
a++ ;
console.log(a);

// -- decrement
var b = 10
b-- ;
console.log(b);
--b ;
console.log(b);


//Bitwise
// Ternary
//Type