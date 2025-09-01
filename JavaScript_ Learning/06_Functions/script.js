
//  function Hby(){
//   console.log("Happy birthday");
//  }
//  Hby();
 


/**function declaration or function statement :This below code is called function declaration or function statement**/

// function abcd() {
//     // function declaration or function statement
// }

/** Function expression : is you creat a variable and put function instead of value is called Function Expression       **/
let fnc = function() {
    console.log("Hello world");  
}
fnc();

/** Fat arrow function :  **/
let abc = ()=>{
    console.log("Hello ");
    
}
abc();

/**Parameters vs Arguments **/
function Wishes(val) {
    console.log( `Good  ${val} all` );  
}
Wishes("Morning")
Wishes("Evening");
Wishes("Afternoon");
Wishes("Night");

// function add(v1 ,v2) { // v1 and v2 are Parameters
//     console.log(`The value are : ${v1 + v2}`);
// }
// add(2 , 2); // 2 and 2 are arguments 
// add(10 , 2);
// add(2 , 20);

/** Default,rest and spread parameters **/

//default
// function add(v1 = 1 , v2 = 1) {
//     console.log(v1 + v2);  
// }
// add(1 , 2); 

/** rest : when you pass lot of argument and for the we have to create same amount of parameter to avoid this we use rest operator i.e ...    **/
// function abcd(...val) {
//     console.log(val);
    
// }
// abcd(1,2,3,4,5,6,7,8,9,10);

function abcd(a,b,c,d,...val) {
    console.log(a, b, c, d, val);
    
}
abcd(1,2,3,4,5,6,7,8,9,10);

//spread : ... is used when we use arrays and objects is called spread operator.

//Return values and early returns
function xyz(v) {
    return 10 + v ;
}
let val = xyz(5);
console.log(val);

//first class function  is treated as a value which can used as a value instead of value we can use function that is called first class function.

function fcf(v) {
    v();
}
  fcf (function () {
    console.log("This is first class function");
    
 })

 //Higher order function(hof):  return function or the accept function  inside its parameter or both return and accept parameter is called hof

/**  function name(a) {
    // name is hof
 }
 name(function () {    
}) **/

function hof() {
    return function (){
        //return function is hof
        console.log("function is hof");  
    }
}
hof()();


/** Pure vs Impure functions **/
// A function which not change outside  value is called pure function
let num = 12 ;
function hello() {
    console.log("hello world");  
    // here there is no change in outside value so it is pure function 
}
// A function which  change outside  value is called pure function
 function increase() {
    a++ ; // here it is effecting outside  value that why it is impure function
 }

 // closures : A function which return a function and use its parents function variable 
 function closures() {
    let a = 32 ;
    return function () {
        console.log(a);
        
    }
 }
 closures()();

 //Lexical scoping :  is something which can be accessible inside that function only .lexical scope fall under a closures so when we a closure is created it can be access inside all its function but inside function cannot the  access  outside  (i.e child can access its parent variable but outside ita parent lexical scope try to access it cannot here error )
    //  function abc() {
    //     let a = 10 ;
    //     function def() {
    //         let b = 32 ;
    //         function xyz() {
    //             let c = 45;
    //         }
    //     }
    //  }

 /** IIFE :(Immediately invoked Function Expression) **/
 (function () {
    console.log("IIFE");
    
 })();
 // this function is called IIFE

 /**Hoisting difference  between declaration and expression: **/

hois(); // declaration
 function hois() {
console.log("This is done by function declaration");
    // in case of function statement or declartion hoisting work  no problem is occured 
 }
// hoisting();
 let  hoisting = function () {
   console.log("This is function function expression");
    // In function expression we try to  hoist it show reference error because we used function expression here so we are treating function as a value that why it show reference error (i.e cannot acces before initialization)
 }

 //Q.1 what is the difference between function declaration and expression in terms of hoisting?
 //Answer is above

//  greet();
//  function greet() {
//     console.log("Hello!");
//  }
 // output: hello!

 /**convert this into an arrow function
   function multiply(a, b) {
    return a * b;
   }
  
    **/
   let multiply = (a, b)=> {
    return a * b;
   };
 
   /**Identify parameter and argument **/
   function welcome(name) {
        console.log(name);
   }
   welcome("Hello")
  //hello is argument
  // name is parameter 

  function demo(a, b, c) {

  }
demo(1, 2);
// 2 argument are ( 1 ,2)
//parameter are 3 (a , b,c)

//predict output:
function sayHi(name = "Guest") {
    console.log("Hi", name);
}
sayHi();
//output Hi Guest

//What does ... operator mean in parameters
// means it is a array

/**Use rest parameter to accept any number of scores and return the total **/
function getScore(...scores) {
    let total = 0;
    scores.forEach(function (val) {
      total = total + val ; 
    });
    return total ;
}
console.log(getScore(10,12,14,18));




/**Fixed this using early return 
function checkAge(age) {
    if (age < 18) {
        console.log("Too Young");
    }else{
        console.log("Allowed"); 
    }
} 
**/
function checkAge(age) {
    if (age < 18) return "Too Young";
    return "Allowed"
}

//what is the retun value
function f() {
    return;
}
console.log(f());
//OUTPUT: undefined

//What does it mean when we say "Functions are first-class citizens"
//It means that function can be treated as value instead of giving a variable its value you can give function

/**Can You assign a function to a variable and then call it? show how **/

let assign = function () {
    console.log("Hello world");
}
assign();

/** Pass a function into another function and execute it inside **/

function x(y) {
    y();
    
}
x(function () {
       console.log("heyyy");        
    })

    //Higher order function
    // is the function which take a function as a  argument or return a function is called hof
    // function f() {
    //     return function () {
            
    //     }
    // }
    // f()

//      function f(va) {
//         va(); 
//     }
//     f(function () {        
//  })

        // Impure or pure function

        // let total = 0;
        // function addTotal(num) {
        //     total += num;
        // } impure function

        //**  conver impure into pure function*/
        let total = 0;
        function addTotal(num) {
            let newTotal = total
            newTotal += num;
        }  
        addTotal(2)

   /** What is Closure ? When it is created
    * Answer: A Closure is which return a function and can acces the inner function outer function variable .It is created when a function return a function and can acces the outer function variable in the inner function **/

   function outer() {
    let count = 0 ;
    return function () {
        count++;
        console.log(count);  
    };
   }
   const counter = outer();
   counter(); //1
   counter(); // 2

   /**Conver this normal function into IIFE 
   function init() {
    console.log("Initialized");
    } 
   **/
(function init() {
    console.log("Initialized");
})();


/**What will be the output here and why? **/
greet();

var greet = function () {
    console.log("Hii...");
    
}

// greet is not a function so type error because when you put a function inside a variable it behaves as a value so when you try to call before initialize it will not work
    
/**Write a BMI Calculator **/
function bmi(weight, height) {
  let result =  weight /(height * height) ;
  if (result < 18.5) {
    console.log("underweight");
  }if (result >=18.5 && result <= 24.9) {
    console.log("Normal Weight");
    
  } else if (result >= 25 && result <=29.9) {
    console.log("Overweight");
  }   else{
    console.log("Obese");
    
  }  
  return result ;

}

console.log(bmi(52,1.5).toFixed(2));
 

/**Create a Resuable discount calculator(Hof) **/

function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100) ;
    }; 
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);
console.log(ten(1200));


/** Closures**/
function counter() {
    let count = 0 ;
    return function () {
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());

let d = counter();
console.log(d());
console.log(d());
console.log(d());

/**Create a pure function to transform a vlaue  **/
function pure(val) {
    return val * val ;
}
console.log(pure(5));


//Use IFFE to islotate variable
(function () {
    const password = "your password"
    console.log(password);
    
}())
