/** Declare your name and city using const , and your age using  **/
const name = "userName" ;
let city = "abc" ;
let age = 23;

/** 2. Try this and observe the result: 
 let x = 5;
 let x = 10;
 Answer : Redeclaration cannot be done with let it give error SyntaxError : Identifier 'x' has already been declared
 **/

 /** Guess the output: **/ 

  console.log(count);  
var count = 42;
// output : undefined

/** 4. Create a const object and add a new key to it — does it work?**/
const object = {name: "abc"};
object.age= 25 ;
console.log(object);

2
 /** 5. Try accessing a let variable before declaring it — what error do you see
  console.log(a);
let a = 12 ;

Answwer it give it Reference error Cannot access 'a' before initialization
  * **/

/**  6. Change a const array by pushing a value. Will it throw an error?  **/
 const arr = [1 ,2 , 3];
 arr.push(4);
 console.log(arr);
 
 /** 🧠Chapter 2 Data Types + Type System **/