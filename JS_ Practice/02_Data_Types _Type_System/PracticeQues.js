/**Practice Question */
console.log(true + false); // 1
console.log(null + 1); // 1
console.log("5" + 5 ); // 55
console.log(!!undefined); //false

/** Predict the output:**/
 
 console.log(null + 1);      //  1
console.log("5" + 3);       // 53
console.log("5" - 3);       // 2
console.log(true + false); // 1

// 2. Check types:
console.log(typeof []); // object
 console.log(typeof null); // object
 console.log(typeof 123n) //  bigint

 // 3. Truthy or Falsy ? console.log(Boolean(0));        
console.log(Boolean(0));   // false  
console.log(Boolean("0"));   // true
console.log(Boolean([]));        // true
 console.log(Boolean(undefined)); //false


 /** 4. Write a function isEmpty(value) that checks if a given value is 
**/



//5. Compare with loose vs strict:
 console.log(5 == "5");   // true ?
 console.log(5 === "5");  //  false