/**Math Function* */

console.log(Math.ceil(10.1)); // 11

console.log(Math.floor(10.9)); // 10

console.log(Math.round(20.4)); // 20
console.log(Math.round(20.5)); // 21

console.log(Math.abs(-50)); // 50
console.log(Math.abs(50)); //50

console.log(Math.trunc(110.54871254450));

console.log(Math.pow(5,2)); // 5 power 2 (5^2=25) = 25

console.log(Math.sqrt(36)); //6
console.log(Math.sqrt(30)); //5.47725575051661

console.log(Math.cbrt(125)); // 5 cuberoot

console.log(Math.max(10,60,15,40)); //60
console.log(Math.min(10,60,15,40)); //10

console.log(Math.random()); //0 to 1

// let a = 234.0987654 ;
// console.log(a.toFixed(3)); // 234.098

// compunt interest

// let p = Number(prompt("Enter principle"))
// let r = Number(prompt("Enter rate"))
// let t = Number(prompt("Enter time"))

// console.log(p * Math.pow((1 + r / 100), t)- p);

//Generate otp
console.log(Math.floor(Math.random()*9000 + 1000)); 
// 1000 to 9000

//  Area of Triangle (Heron’s Formula)
//  let a = Number(prompt("Enter a number"))
// let b = Number(prompt("Enter a number"))
//  let c = Number(prompt("Enter a number"))

 // s=(a+b+c)/2
// = sqrt of s * (s-a) * (s-b) * (s-c);

// if (a+b <=c || a+c<=b ||c+b<=a) {
//     console.log("not possible");
// }else{
//     let s=(a+b+c)/2;
//     console.log(Math.sqrt(s * (s-a) * (s-b) * (s-c)));
    
// }

//Circumference of Circle
//  let r = Number(prompt("Enter a number"))
// console.log(2*Math.PI *r);



//IF-ELSE
/**
 if (condition) {

}else{

}

 */

//Print Greatest of Two Numbers

//  let a = Number(prompt("Enter 1st number"))
//  let b = Number(prompt("Enter 2nd number"))

//  if (a>b) {
//     console.log(a + "is greatest");
    
//  }else{
//     console.log(b + "is greatest");
    
//  }

 // check even or not
// let num = Number(prompt("Enter a num"))
//  if (num % 2 ==0) {
//     console.log("Even");
    
//  }else{
//     console.log("odd");
    
//  }

 //valid voter or not

 let age =Number(prompt("Enter  age"))
  let name =String(prompt("Enter  name"))

  if (age >= 18 ) {
    console.log(name +" Valid user");
    
  }else{
    console.log(name +" nooo");  
  }


  