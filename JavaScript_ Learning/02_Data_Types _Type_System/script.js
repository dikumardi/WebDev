/** * Data Types -means what type of data it is  there are various type .  There are 2 type 
 * 1.primitive 2. Reference */

// In primitive there a number , string , boolean ,Bigint , undefined , null and symbol . In primitive we can directly copy them . Example below
/*
let a = 12 ;
let b = a ;

console.log(a);
a = a + 2 ;
console.log(a);
console.log(b); */

// here a and both they have separte value if you change or add anything to a it doesn't make changes to b because  b has its own so if we cahnge anything to a it doesn't get effect to b .


//. In Reference there are mainly three array ,object and function [], {} () .  Reference we cannnot copy them directly instead we pass a reference to it . example below

let a = [1,2,3];
let b = a ;

console.log(a);
console.log(b); // here b doesn't hold real value . instead here if you change to the original one it automatically change to b also because both are same 
a.pop();
console.log("we pop a",a);
console.log("we doesn't make change to instead we pop a",a); 
/**     let obj1 = {
        name :'abc',
     }
     let obj2 = obj1 ;
     obj1.name = "xyz"
     console.log(obj1);
     console.log(obj2);
     
      */
// we can make real copy  by spread operator 

/**                           PRIMITIVE DATA TYPES
 * primitive: String , number, boolean, null, undefined, symbol, bigint **/

/** 
 There are three ways to make String   
      ' ' -single quotes
     " " - double quotes,
     ` `  - backticks

     . Basically we wrap inside the quotes  to make them string

     Number - simiply write number i.e  12 or 123.11 both are number 

     bigint - this is the maximun number a number can hold 9007199254740991 . If we try to use this number above it give me not exact value in some case so to correct this we can use bigint
       let  big1 = 9007199254740991n;
    let big2 = 2n;
     console.log(big1 + big2) // it give correct answer 9007199254740993n

      RULE FOR USING bigint
    1.Add n at the end of the number to make bigint
    2.you cannot mix bigint with normal number 
     Boolean - are true or false 
     let abc = true

     null - null is used when we intentionally don't want to give value to something 
     let val = null ; 

     undefined : we declare a variable but don't initialize .js automatically set its value to undefined . js engine give value undefinedb 
     var a ; // declared but not initialize
     console.log(a) // undefined
     
     symbol :  unique immutable value  both are same but unique
  **/
   
     /**                REFERENCE DATA TYPE (array , object and function)
      
      
     in array we can store multiple value inside this bracket let arr  = [1,3,4,3,]

     in object we can make like this key value pair let studentDesc = {

                                                                name:"abc",
                                                                age:21,
                                                                class:12,
                                                                isMarried:false
                                                                }
     
     
     function is heart of js we can make it like function like this function fname(){}
     
     
     **/


/** Dynamic typing : variable don't have fixed type you can change it anytime you want according to you but in other programming language it cannot be done  so this is called dynamic typing **/

/** Type of : we can check  what type of value is  **/

/*** Type of quirks : null, NaN ***/
// typeof null === 'object';
// typeof NaN === 'number';
console.log(typeof null);
console.log(typeof NaN);


/** type coercion :  is the concept in js  here one type automatically converted to other .if string is  added to number it can do both add and concetation but in different operator it work perfectly fine .if want string is minus from a number it minus same work for other operator**/

/** Weird cases 
 *  "hello" - 2 //NaN
 *  true + 1 // 2
 * false *10  //0
 * null +  5  // 5
 * undefined  + 5 ; //NaN
 * 
 * **/

 // Truthy vs falsy values  
//o ,false  " " ,null ,undefined NaN , document.all these all are false 
// beside above anything you write is true
if (null) {
    console.log("true");
    
}else{
    console.log("false");
    
}

//this below is true
if (-12) {
    console.log("true");
    
}else{
    console.log("false");
    
}

/** why NaN is type of number beacuse failed mathematical  operation**/