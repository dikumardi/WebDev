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

 //forEach forEach loops sif array pe chalta hai matlab ki jab v tumhare pass array ho ,tab use me kon aata hai forEach loop

 //

 var arr1 = [1,2,3,4,5,6,7,8,9];

 arr1.forEach(function (val) {
  console.log(val + 2 );
  
 })

 //Forin
 //object par loop karne k liye hota hai forin loop

  var obj1 ={
  name:"hehe",
  age:11,
  city:'abc'
  }

  for(var heh in obj1){
    console.log(heh , obj1[heh]);
    
  }

  //do while ---
  do{
console.log("Hello world");
a++
  }while(a < 12)

    //callback function
  // jab v koi asa code bad me chalta hai usse hum e function de dete hai jab complete ho jana aur chalana dena aur wo function jo hum dete hai wo normal function hota hai aur use kahate hai callback function

  setTimeout(function () {
    console.log(" 2 second bad chalow ");
    
  },2000);


  //first class function
  // js me ek concept hai jiska matlab hai ki aap function ko use kar sakte hai as a value

  var arr4 = [1,2,3]

  var yo = {
    name : "username",
    age :54

  }

  delete yo.age;

  /**
   Hofs - Higher order function are the function which accept a function in a parameter or return a function or both

      function abcd(val) {
   }
   abcd(function () {
    
   });


   return

   function abcd() {
  return function () {
    
  }
}
   **/
 

/**  Constructor function --- jab aapke pass asa koi v moka hai

function oreobiscuit() {
  this.name = "fdda";
  this.age = 22;
  
}
var ans = new oreobiscuit(); 

**/

/**iife - immediately invoked function expression --- turant chalana ki tareka hote hai hum koi v private variable bana paye */


(function () {
   let xyz = 12; 

   return {}
})()

/**
  
 
  **/