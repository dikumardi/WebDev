/**Var , let , const 

var a ; // declare
var a = 12; // declare and initialize 
**/



// window me add hota hai
 
/**function scoped hota hai--
  function abcd() {
    if (true) {
         var a = 10;   
    }   
} */

 
/** firse declare kar sakte hai and no error with same name
  var a = 12 ;
  var a = 13 ;

let a = 12 ;
let a = 413 ;

const discount = 12 ;


*/

//Scope(global  , block , functional)


//Reassignment , redeclaration

// var a = 12 ;
// a = 32 ;  // Reassignment

// var a = 111;//redeclaration

// let b = 54 ;
// b= 324;

//Temporal Dead Zone
// console.log(a);
// let a = 12 ;


//DATA TYPES 2TYPES
// PRIMITIVE --- aisi
// REFERENCE


// Hoisting
// console.log(num);
// let num = 45;

/**
 * Primitive = number , string, null , undefined, boolean
  
 
 *** Reference = [ ] , ( ) , { } -- Ase koi v value jisko copy karne par real copy nahi hota , balki us main value ka refernece pass hojata hai usse hum refence value kahate hai...
  
 
 jiska copy karne par real copy ho jaaye wo value  primitive type value hai
 */

//  var a = 12 ;
//  var b = a ; 

// b = b + 2

// var a = [12,13] ;
// var b = a ;

// b.pop();


// var a = [1,2,3,4]; 
// var b = a ;


//push , pop , shift , unshift
let arr = [1,2,3,4]
arr.push(0);
arr.pop();
arr.unshift(0) // add value at the start
arr.shift() // Remove value from the start
//splice
// arr.slice(2,2); // 1,3


//

function hello( ) {
   for (let i = 1; i <12; i++){
     console.log(i);  
   }
   console.log(i);
}

/**
 Js me kaye sare features hai par kuch featrues jo hum use karte hai wo featues wo nahi har par phir v use kar paate hai 
  

  **/
 

 // Execution Context

//  function abcd() {
//    var a = 12;
//    function def() {
//     var b = 32 ;
//      }
//  }
//  abcd();


 // How to copy reference value--- by the spread operator 
 let a = [1,2,3,4,5];
 let b = [...a];
 console.log(a);//[1,2,3,4,5]
 
 b.pop(); //[1,2,3,4]


 // we can do it for object also

 let obj = {name: "hey"};
 let copyobj = {...obj};  

 copyobj.name = 'abc';


 //truthy vs falsy

 /** 0 , -0  , "" , false , undefined , null , NaN  , document.all*/
 if (0) {
  console.log("ye print");
  
 }else{
  console.log("falsy");
  
 }

 //Switch

 