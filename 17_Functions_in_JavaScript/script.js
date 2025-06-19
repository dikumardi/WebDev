/**
 * What is function ?
 * --- Block of code that performs a specific task. which you can reuse and run  it whenever you want by calling the function
 * 
 * syntax ---
 * function abcd(){
     // code
     }
 */

     function kuchv(){
        console.log('hello world');
        
     }

      kuchv();     
     kuchv();
     kuchv();
     kuchv();

    /**Why function ?
     * "Whenever you don't want your code to run immediately, and you also want to reuse that code later, you create a function."

    --- to reuse some code which is very long to re-write

    WET-Writing Everything twice
    DRY-Don't repeat yourself
   */


function abcd() {
console.log('heyyy ! how are you');
}    
abcd(); //function call

function makechai() {
    console.log('Boil 1 cup water');   

    console.log('Add 2 tsp tea leaves');

    console.log('Add ginger/cardamom (optiona');
       
    console.log(' Add 1 cup milk');

    console.log('Add 2 tsp sugar');

    console.log(' Boil for 2–3 mins');

    console.log(' Strain into cups');

    console.log(' Serve hot ✅');


}

makechai();

/*How to call function */
function abcd() {
console.log('heyyy ! how are you');
}    
abcd(); //function call


/*What is parameter */
/*How to pass parameter to a function */

function usergreet(hehe) {
    console.log(hehe);
}

usergreet('kaise ho') // value ko  bhej rahe hai 
usergreet('hello ');
usergreet('namaskar')

function fafa(a,b,c,d) {// abcd is parameter
   console.log(a,b,c,d);
    
}
fafa(1,2,3);// 123 is argument 




/* There are 6 types of function  we can write*/

// 1. Function Statements--- common ways to make function
 function ab() {
    console.log('oho..');
}

ab();


var  aa = function(){
// 2. When a function is assigned to a variable, it is called a Function Expression.

}

/** 3. An anonymous function is a function without a name.

 
function(){
    //anonymous function
}

 */

/* 4. Fat arrow function 
  ()=>{

   }

   */
  /*5.Fat arrow with one parameter */

  var abc= a=>{
      console.log(a);
   }
   abc(12);

   /*6.Fat arrow with explicit return 
   
   Jab aap return keyword likh kar clearly specify karte ho ki kya value wapas bhejni hai — usse kehte hain explicit return.


   */
   
    //   function xyz() {
    //     return "ye return wapas jayega jaha se call hua ha  ";
    //   }

    //   var ans=xyz();
    //   console.log(ans);
  

    // 7 .This is fat arrow with implicit return... khud se return hota hai 
    var abcdef= ()=>"hello world";

   var anss= abcdef();
   console.log(anss);

   //Rest parameter(... ko rest kahate hai)
   function hehe(a,b,c,...rest_anythingwrite){
console.log(a,b,c,rest_anythingwrite);
   }
   hehe(1,2,3,4,5,6,7,8)

    //Hoisting
   // ye top pe chale jata hai 
   // var a;
   
  
console.log(a);
var a=20;
// a=20; ho jayega

   //iife

   //hofs

   //call back function ---also know as anonymous function

   // First class function

   // Pure function

   // Impure function

   // global scope

   // local scope
   