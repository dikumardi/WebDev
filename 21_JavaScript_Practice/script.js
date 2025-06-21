/*1. Log "Hello, JavaScript!" to the console in 3 different ways */

console.log('Hello, JavaScript!');
console.error('Hello, JavaScript!');
console.warn('Hello, JavaScript!');
console.info('your information')
console.table({name:'heeh',age:22})

/*2. Perform 35 * 2 - (10 / 2) + 7 and log the result. */


console.log( 35 * 2 - (10 / 2) + 7);

// OR

var  ans =  35 * 2 - (10 / 2) + 7 ;
console.log(ans);

/*3. Log the data type of "123", 123, true, and null using typeof. */
console.log(typeof("123"));
console.log(typeof(123));
console.log(typeof(true));
console.log(typeof(null));


/*4. 4. Write a program that swaps the values of two variables.*/




//Using 3rd variable
var a = 10 ;
var b = 20 ;
var c

 c= a
 a = b ;
 b = c;
console.log(a,b);

// 
var x=112;
var y=542;  
[x,y]=[y,x]
console.log(x,y);

//without using 3rd
var a = 111;
var b = 124;
a = a + b;
b = a - b;
a = a - b; 
console.log(a,b);



/**5. Use console.group() to organize logs into a group. */
// console.group('hhh')
// console.log('name');
// console.log('meow');
// console.log('22');

/**
 * console.groupCollapsed('Group Name');
console.log('myname');
console.log('yourname');
console.group('new group')
console.log('our name');
console.log(' name');
console.log('our yeyeye name');

console.groupEnd();


 */


/** Variables & Data Types **

6. Declare a const object, modify its properties, and log the updated object

*/
const person = {
    name:'meow',
    age : 100,
    isCat: true,
    live:'abc'
}
    person.age = 32;
    console.log(person);
    


/**>7. Convert "50" (string) into a number using 3 different methods */

var no = Number("50");

console.log();



console.log(typeof +"50");





/**8. Check if "JavaScript" contains "Script" without using .includes() */

// using includes
let str = 'javaScript'
console.log(str.includes('Script'));


//Using index of or can use search of
console.log(str.indexOf("Script") !== -1);



 /**  using if statement
  * if (str.indexOf("Script") === -1) {
    console.log('false');
      
}else{
    console.log(true);
    
}

 */


/**9. Create an array of 5 numbers and log the sum using .reduce(). */

/**10. Explain the difference between undefined, null, and NaN with examples */

//undefined
var abb;
console.log(abb);

//null
var val = null;
console.log(val);

//NaN (Not a Number)--- Mathematical invalid calculation will get you NaN
console.log("heelo"*4);

