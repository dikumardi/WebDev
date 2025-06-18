// String 
/**
 * 
 * double quotes - ""
 * single quotes - ''
 * 
 * slice-
 */
// let a = '12'; //ye string hai 

// Slice
// let str = "world";
// let ans = str.slice(0, 2);
// console.log(ans);

// Template Strings

//let str = `apple my age is ${12+2}` 

// split - splits a string into an 
// var str = 'hello world'
// var ans = str.split('o');

// replace -- replace a specified substring with another
// var str = 'hello world'
// var ans = str.replace('o','w');
//  var ans = str.replaceAll('o','w');

//  includes --- checks if a substring exists within a string

// var str = " hello world"
// var ans =str.includes(",") // false beacues it doesn't have ,

/**Conditional Operators in JavaScript */
//if statement
// var x= 10;
// if (x > 5 ) {
//     console.log('heheheheheheh yi eie');
    
// }

//if else

// let a =12;
// if (a>50) {
//     console.log('heyyy'); 
// }else{
//     console.log('hehehehe');
    
// }

// else if 
// let a =112;
// if (a>20) {
//     console.log('yooo'); 
// }else if(a>15){
//     console.log('hehehehe');
    
// }else{
//     console.log('kuch v nahi');
    
// }

//else if ladder
// let marks=58;
// if (marks>=90) {
//     console.log("excellent");
    
// }else if (marks >=80){
//     console.log("good");
    
// }

/*Ternary Operator*
 condition ? expression_if_true : expression_if_false;
condition ? () : ()
*/
1>11?console.log("ye shai hai"):console.log("ye galat hai");

/* Switch Statement

syntax is below
switch (key) {
    case value:
        //code
        break;

         case value:
        //code
        break;

    default:
        //code
        break;
}
        */
// switch ("teacher") {
//     case "teach":
//         console.log('one');     
//         break;
//      case "class":
//         console.log('Two');     
//         break;   
//      case "teacher":
//         console.log('This  is teacher code dsfs ss');     
//         break;     

//     default:
//         console.log('feffef');   
//         break;
// }


// For,while,do while loops -- 


//for loop-- 
// for (let i= 0; i <= 12; i++) {
//   console.log(i);
// }

//Dynamic loop
// var arr=[1,2,3,4,5,6,7]
// for (let i = 0; i < arr.length; i++) {
//    console.log("arr");
   
    
// }

/** while loop
 *            syntax-
 *            start
 *            while(end){
 *            // code
 *            change
 *            }
 * 
 */
// var i =5;
// while(i <12){
//     console.log(i);
//     i++;
// }

//do while loops
var z=10;
do {
    console.log(z);
    z++
    
} while (z <=20);

// loops control statements
    // ---break  it will stop
    // ---continue skip the loop
         for (let i = 9; i < 25; i++) {
            console.log(i);
            if (i === 17) break; 
   
         }

/** */
         for (let i = 9; i < 25; i++) {
            if (i === 17) continue; 
               console.log(i);

         }