/** 
JS in Data Types
 -Primitive
        -Numbers (10, 10.50) range 2power53-1
        - String('a',"Abc")
        -Boolean(True,false)
        -undefined
        -null
        -symbol
        -BigInt

 -Reference
       -Array
       -Object
       -Function

**/

 var a ='10';
 console.log(a);
  
// The answer you store through a prompt is always stored in the form of a string in JavaScript.

var a ='abc';
var b = 'def';

console.log(a+b);
console.log(a-b);// string me  string minus nahi hote hai
//  + : Add , concatination-when we add two string

// Concatenation means joining two or more strings together to form one single string.

// In JavaScript, you use the + operator to concatenate (join) strings.


var a = '10'
var b= '20'

// console.log(a+b);

// var num1 = prompt('Enter number 1');
// or var num1 = Number(prompt('Enter number 1'));

// var num2 = prompt('Enter number 2');

// console.log(num1+num2);

//here Type conversion  come

// var realnum = Number(num1)+Number(num2)
// console.log(realnum);

// undefined
var undef ;
console.log(undef);

// Nulll

var nu =null ;
console.log(nu);

// Symbol

// BigInt 
var bigno =201455784521251455n; // if you want to make bigint add n in last
console.log(bigno);


// Hoisting
var kuch = 10;
console.log(kuch);

var kuch =10

// Conditionals

var n1 =10 
var n2 =5
if (n1>n2) {
    console.log('hello world');
    // if condition is true this will works if not 

    
}
else{
    console.log('kmlasdaakk');
    // this condion will work if false
    
}

// question : Ask a user age and check if he is Adult or not

// var age = Number(prompt('Enter Your age'))
if (age>18) {
    console.log('You are Adult');
    
}else{
    console.log('You are not adult');
    
}

 // Students marks
/*  var marks = Number(prompt('Enter your marks'))
 if(marks>90){
    console.log('You got A++ Grade');
    
 }else if(marks<80){
    console.log('Average');
    
 }
 else{
    console.log('failed');
    
 }
*/
 /**  Binary Opeators  &&,||
  true-1
  false-0
 
   && (*) And condition work on multiplication
   0   0  =  0 
   0   1  =  0
   1   0  =  0
   1   1  =   1

   || (+) Or condition
 
   0   0  =  0 
   0   1  =  1
   1   0  =  1
   1   1  =  1
 **/

   var age = 30 ;
   if(age >18 && age<60){
    console.log('you can vote');
    
   }else{
    console.log('not vote');
    
   }
   
//    increment 
var  inc = 10 ;

console.log(inc++);  // post increment
console.log(++inc);  //pre increment

// Difference between == and ===  
// == compare values and === compare values and DataTypes
var num1 = 10 ;
var num2 = '10' ;

// if(num1 === num2){
if(num1 == num2){
    console.log('condition is true');
}else{
     console.log('condition False');
}

/**
 * ask a user his bijli ke units and if it is greater than 100 units then calculate  on the basis of 10rs per unit if more than 50 units then calculate on the basis of 8 rs per unit and if less calculate 5rs per unit
 */
var unit = Number(prompt('Enter   unit'));
if (unit>100) {
   var  bill = unit * 10 ;
    
}else if (unit>50){
    bill  = unit * 8;
}else{
    bill = unit * 5;
}
    console.log(bill);


    //Ternary operator
// It is a shortcut for if...else statements. It’s used to write conditions in a more compact way.

// condition ? expression_if_true : expression_if_false;
var x=10
var y=20
x>y ? console.log('hello') : console.log('false hai ye')

// Ternary operator shortcut
console.log(10>5?'is this true':'is this false yhod od ');


/**
 * Loops -- while loop is infinite
 */
var ab =0 ;
while(ab<10){
    console.log(ab);
    ab++;
}

// do while loop First executes the block of code,then checks the condition.
var z=1
 do{
    console.log('hwllo');
    z++
 }while (z<100) 

    //for loops --A for loop is used when you know how many times you want to repeat a block of code.


    for (let i = 0; i < 10; i++) {
        console.log(i);
        
        
    }