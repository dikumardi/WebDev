              /**   Practice Question   **/

              // let x = 10 ;
              // let y = 20 ;
              // if (x > 5 && y <25) {
              //   console.log("A"); 
              // }else{
              //   console.log("B"); 
              // }
              //Answer : A

//  let isAdmin = true ;
// let isLoggedIn= false ;
// if (isAdmin || isLoggedIn) {
//   console.log("Access granted"); 
// }else{
//   console.log("Access Denied");
  
// }

//Answer: Access granted

let temp = 35;
if (!(temp<30)) {
  console.log("Hot");
}else{
  console.log("pleasant");
}
//Answer: Hot

// let a = 0;
// if (a) {
//   console.log("Truthy");
// }else{
//   console.log("Falsy"); 
// }
//falsy
            
//Ternary operator question
let score = 78;
let grade = score >=90 ? "A" : score >=75 ? "B" : score >=60 ? "c": "fail";
console.log(grade);
// answer B 

let points = 120 ;
let status = points > 100 ? "Gold" : points > 50 ? "silver" : "bronze"
console.log(status); // gold

let LoggedIn = true ;
let hasToken = false ;

let access = LoggedIn && hasToken ? "Allow" : "Deny";
console.log(access);
// Deny

/**Increment and Decrement question **/
let a = 5 ;
a++;
console.log(a); // 6

let b = 7 ;
++b;
console.log(b); // 8

let  x = 3 ;
let y = x++ ;
console.log(x, y);
        // 4,3

let p = 4 ;
let q = ++p;
console.log(p, q);
         // 5 , 5

         let m =10;
         console.log(m--); // 10
         console.log(m); // 9
         
         let n = 5 ;
         let result = n++ + ++n;
         console.log(result);//12

         let likes = 100;

         function likePost() {
          return ++likes;
         }

         console.log(likePost()); // 101
         console.log(likes);      // 101

         let count = 5 ;
         if (count-- ===5) {
          console.log("Matched"); 
         }else {
          console.log("Not Matched");
         }
         // matched
         
         







                  //1. Predict
  
console.log("10" + 1);       //101    
console.log("10" - 1);       //9
console.log(true + false);   //1  
 console.log(!!"hello")  // true

// 2. Convert using unary +

 let str = "42";
 let num = +str;
 console.log(num);

 //  3. Use ternary
 let age = 17 ;
 let msg = age >=18 ? "Adult" : "Minor" ;
 console.log(msg);  // minor

 //  4. Build a calcula

 function calc(a, b, operator) {
   let ans = a + b ;
    console.log(ans);
    
 }
 calc(2,2)

 //  5. Score logic:
 let marks = 82 ;
 
