// word vs keyword : anything that has meaing in js is called keyword and anyrhing that have not been reserved in js is called  word example 
/**word(hello, hehe ,djask, or anyhing execpt reserved word in js)  vs keyword(let ,cobst for ,while function and more)  **/

// Variable is container where we save the data or a value so that we can you these data or value for future some of the we can create these variable by using these keyword  var let and const

// Declarations and initialization
// var a ; // Declare
// var a = 33 ; // Declare and initailize (initailize means give first value)
/** whenever we create a variable using var :
 * It automatically added to the window
 * It is function scoped to the variable
 * we can re-declare it  with same name and it doesn't give an error 
 *  **/
var a = 21 ;
var a = 32 ; 

// let a = 21 ;
// let a = 2 ; 

// Reassignment , Redeclaration
// Reassignment - Assigning variable its new value it can be done 
// Redeclaration is possible by var it can be redeclare but cannot be done b let it give error  
 
/** Scope(global, block function) **/

//Global scope is outside the function and block scope is called  global scope

// block scope is something that is used inside the curly braces {} . we can used it in if , for ,while inside the braces only if want to access it outside with variable let it give error but if use var it doesn't respect curly braces so it can be acces outside the curly braces

// function scope is it can only be used inside the function only var respect function it cannot be used outside the function

/** Temporal Dead Zone happen when let is being hoisted and the amount of time between the variable declaration and its initialization during which the variable cannot be accessed**/

// Hoisting : can be done by the var and doesn't give error because when try to print before initialization it goes to phase 1 of the Global execution context and it store on a memory phase so if try to acces it give undefined