/*Arrays and Objects */
var a = 12;
var b = 52;
//var c= 10,11; // not allowed
var c = [2,5,4];


/* An array  is a special variable that can store multiple values in a single variable.

 */

var a = ['hello','namaste','namaskar']; 
/**Why do we use array --To store more than one value */

/**When to use array --- whenever you need to store multiple values
 *
 *** How to use array 
        --How to create array []
        --How to access members of array 
 */
//indexing 0,1,2,3
var arr= [10,17,21];
console.log(arr[2]);

/*We can create arrays in two different ways in JavaScript: */

// 1.for blank array this one below
var arr = [] ;


// make an array put 5 value in it
var arr= [10,17,21];


// 2. Make array whose size is 100
var arr2 = new Array(30);

for (let i = 0; i < 30; i++) {
    arr2[i] = i ;   
}

/* In arrays, we can store multiple values, and those values can be of different data types.

javascript is a non-homogeneous
 */

var arr =[1,2,true,[],"hello",{},function(){}]


/* Object in JavaScript --- {}*/
/* What is Object ? 
  -- An object is just a way to store key-value pairs together.
 
*/
var person = {
 //property:value   
  name: "hehe",
  age:22,
  email:'test@gmail.com',
  
};

var mobile = {
    model:'oppo',
    price:20000,
    
};
/**Why object
 * jab v aapko ek  se jaada value ko ek he elemnt k bare me store karna ho
 * --When you need to store more than one detail about the same item, use an object.


 */

/**How to create object
 * --*We can create Objects in two different ways
 */

var obj = {};

var obj2 = new Object();

//how to access object
var person1 = {
    name:'hey',
    age:22,
    place:'abc',

};
person1.name