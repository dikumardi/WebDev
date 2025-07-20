
   //Rest parameter(... ko rest kahate hai)
   function abc(a,b,c,...heheh){
   console.log(a,b,c,heheh);
   }
   abc(1,2,3,4,5,6,7,8)

    /*Hoisting---
    JavaScript moves all variable and function declarations to the top of the code before running it.
    --- it will become
    var a;
    console.log(a);
    a = 20 ;
    so first it will declare means when we print the declare part it will show undefined
    */
   
  
   console.log(a);
   var a=20;


   //iife(immediately invoked function expression) ---
/** */
   var ans = (function abcd() {
   var a = 12;
    return a;
   })();

   // More example on  iife -

   var libans= (function library() {
      return {
         imageEffect: function () {
            console.log('image effect'); 
         },
         mouseFollower: function () {
            console.log('mouseFollower');
            
         }
      }
   })();


   libans.mouseFollower();

   //hofs--- higher order function ---A function that either returns a function, or accepts a function as a parameter, or does both.


   
   // if  return then this
     function ab() {
      return function () {
         return function () {
            console.log('hehehe');
          }
          
      };
     }

   //   var ans = abcd();
   //   ans();

   // single line me likha gya hai upara aur niche wala same hai 
      //   abcd()()();
      console.log(ab());
      

// if not return than this

function abcd(val) {
   val();
}

abcd(function(){
console.log('Hello world  ');

})



   //call back function ---also know as anonymous function call 
/*"A function that is passed as an argument to another function and is later called inside that function is called a callback function."

 */
function abcd(val) {
    // 👆 This is a Higher-Order Function (HOF)
    // because it accepts another function as a parameter.
    
    val(); // We are calling the function passed in
}

abcd(function () {
    // 👆 This is a Callback Function
    // because it is passed as an argument to another function,
    // and it will be called (or "called back") later inside `abcd`
    
    console.log("I am a callback function!");
});


    
   /*First class function 
   

   jaha pe v value  use karte ho waha pe function use hota hai
   */ 

   var a = function name(params) {
      
   }

   // Pure function --- A function without side effects (does not modify external state)
   function add(a, b) {
      return a + b ; // No external modification
   }
   console.log(add(2,3)); //5
   

   // Impure function --- A function that modifies external state
   var x = 10 ;
   function addtox(a) {
      return a + x ;
   }

   console.log(addtox(20));
   
   
   /**  global scope ---A variable declared outside any function is in the global scope.
It can be accessed from anywhere in the code. */
   var a = 10; // global variable

function show() {
  console.log(a); // ✅ can access a
}

console.log(a); // ✅ also works here


   /* local scope --- A variable declared inside a function is in the local scope.
It can be accessed only inside that function. */

 function test() {
  var b = 20; // local variable
  console.log(b); // ✅ works here
}

console.log(b); // ❌ Error: b is not defined

  
   

   // closures

   // function haha() {
   //    var a =212 ;
   //    return function () {
   //       console.log(a);
         
   //    }
      
   // }
   // haah()();
 