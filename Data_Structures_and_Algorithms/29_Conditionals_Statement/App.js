/**Variables and  Declaration**/

/*var(Es-5) let ,const(Es-6) */
// var a = 12 ;
// a = 123;

/**Some Practice question based on hoisting */
console.log(nm);
var nm = "hehe";
// output undefined

// console.log(age);
// let age = 21;
// output cannot access age before initialization(Reference error)

// var x = 1 ;
// {
//     var x =2 ;
// }
// console.log(x);
// output 2 because var doesn't respect braces

let a = 10 ;
{
    let a = 20;
    console.log("Inside :", a);  
}
    console.log("Outside :", a);

/*Output
Inside : 20
Outside : 10
 */

/* Practice  */
/*1. Declare your name and city using const , and your age using . */
const name = "cat";
const city = "xyz";
let Age = 22 ;


/**2. Try this and observe the result: */
// let x = 5;
//  let x = 10;
//  console.log(x);
 // OUTPUT - Identifier 'x' has already been declared
 
/** 3. Guess the output: */
 
 console.log(count);  
var count = 42

// OUTPUT  - undefined

/*
 4. Create a const object and add a new key to it — does it work?
 5. Try accessing a let variable before declaring it — what error do you see?
 6. Change a const array by pushing a value. Will it throw an error? */
const object = {
    name : "abc",
    city : "aaa",
}

object.name = "xyz";
// console.log(object(name));


// console.log(acc);
// let acc = 23;
//output---  Cannot access 'acc' before initialization

const obj = [1,2,3,4,5];
obj.push(10);
console.log(obj);


let num = 12 ;
let nums = num ;

num = num +2 ;

/**
 * string ,numbers , boolean null undefined, symbol , bigint
 * arrays , objects , functions 
 */
