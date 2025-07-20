
/* ** Topics Covered
  console
      -log
      -warn
      -error

   var 
     -Declaration
     -Initialization
     -update

     Arthemetic operators
     - + 
      - -
      - *
      - / 
      - %
      - ++
      - --

      alert
      confirm
      prompt

      var,let,const difference
  ***/  

console.log("hello world");
console.warn('This is warning');
console.error('this is error');

// variables in js
// Variables in JavaScript are containers that hold reusable data
var a; // declaration
a = 10; // initialization 

var a = 410 ;
console.log(a);
 console.log('heheh');

//  Dynamic languages  
// ---  We don't need to define the data type
// --- The type is decided at runtime based on the value assigned.


//Static Languages
 // ---Languages like Java, C, C++ are statically typed.
 // ---You must declare the type of a variable, and it cannot change.

 var a = 'hello'
 var b = 10;
 console.log(a);
 console.log(b);
 
 // Arithmetic operators 
 
var a = 50
 var b= 5;
var c= a+b;

  // or

 console.log();
 console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a+b);
console.log(a++);// increment
console.log(a--);//decrement operator



var name = 'lala'
var name2= 'haha';
console.log(name,'add',name2);

console.log('value of a is');

//Alert
// var aa=123
// alert("not found",a) // alert for message
// var ans = confirm("are you sure  ") // confirm yes/no

// var ans = prompt("Enter yoour name");// write or enter message or answer
// console.log(ans);

// var user = prompt('Enter username')
// var age = prompt('Enter your age')

// console.log(user,age);

// let , const and var these three of them are   used to make  use to make variable 

// var go to window object means global object
// when you declare a variable using var outside any function, it becomes a property of the global object...

// You cannot reassign the variable once it’s been assigned.

// The value becomes a constant (cannot be re-initialized).

// const x = 10;
// x = 20; // ❌ Error: Assignment to constant variable
//  console.log(x);
 

 var dulha ='salaman';
 var dulhan='kat';
  dulha = 'vikky'
  console.log(dulha,'weds',dulhan);
  
/*

   const dulha ='salaman';
  var dulhan='kat';
   dulha = 'vikky'
   console.log(dulha,'weds',dulhan);
  **/
 if (10>5) {
    let ab = 30 //when you use let  inside  the function you log the variable outside it cannot be done let can be used inside the function it cannot be know outside the function but in var it can be used  inside but not  outside
 }
 console.log(ab);

 /** let is block scoped
It only works inside the block {} where it is declared.

Outside the block, it is not accessible.

 var is function scoped
It works inside the function where it's declared.

But if declared outside a function, it becomes global.
*/
