
/**  Write a BMI calculator function

 4. Create a closure counter function
 5. Write a function that returns another function
 6. Use a function to log even numbers in array
 7. Create a pure function to add tax
  **/
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

//2. Create a greet function with default name
function  greet(greet = "hello") {
    console.log(greet);   
}
greet();

// 3. Sum all numbers using rest parameter
// function sum(...val) {
//     return val ;
// }
// console.log(sum(10,20,30)); HALF CODE


// Create a closure counter function
function counter() {
    let count = 0 ;
   return function () {
        count++;
    return count;        
    } ;
}
let a = counter();
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());

let b = counter();
console.log(b());
console.log(b());
console.log(b());
console.log(b());
console.log(a());

//5 Write a function that returns another function
function fn() {
    return function () {
        
    }
}
fn();

// 8. Use IIFE to show welcome message
(function () {
    console.log("Message");
    
})();

