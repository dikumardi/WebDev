/**Repeating is called loop
 * eg: 1 1 1 1 1 1 1 1 1 1 1 1 
 * eg: 1 2 3 4 5 6 7 8 9 
 * both are loop because both are repeating in first one print and 1 is repeating but in second one print is repeating so second one is also a loop
 *  **/

//1-100 print
// for loop from where , to where  and how
// for (let i = 1; i <= 100; i++) { 
//  console.log("i");
// }

//  while loop (when to start -- when to stop --- How to go)
/** start
  while (end) {
   //code
   change 
        } 
   **/
  // 1 - 32
//   let a = 1 ;
//   while (a <= 32) {
//     console.log("While loop",a);
//     a++;
//   }

  // do while
 /** 
  start
  do {
    // code
    change
  } while (end);
    **/
//    let x = 12
//   do {
//     console.log("hello do while loop");
//      x++;
//   } while (x < 9);

  // atleast one time it will run if the codition is false next time it will no work

  //Break
  /** for (let i = 1; i <= 50; i++) { 
    if (i === 10) {
         break; // it will stop because of the *-  given condition in break
        //continue; // ignore 10 and print all exect 10
    }
 console.log(i);
} **/

 //Q.1 Print numbers from 1 to 10 using a for loop
/**  for(i =1 ; i <=10; i ++){
    console.log(i);
    
 } **/

//Q2.Print numbers from 10 to 1 using while loop
/** let  i = 10 ;
while(i >= 1){
    console.log(i);
    i--;  
} **/

//Q3. Print even numbers from 1 to 20 using a for loop
/** for(let i = 1; i <= 20; i++){
    if (i % 2 ==0) {
        console.log("Number is even "+ i);     
    }
} **/

//Q.4 Print odd numbers from 1 to 15 using a while loop
/** let i = 1 ;
while(i <= 15){
    if (i % 2) {
        console.log("odd Number are :" ,i);    
    }
    i++;
} **/

//Q.5 Print the multiplication table of 5 (i.e 5 * 1 = 5 ... 5 * 10 =50)
/** 
for (let i = 1; i <= 10; i++) {
    let temp = 5 ;
    let ans = temp * i ; // or temp = temp * i
     console.log("5 *",i ,"= ",ans);       
} **/

//Q6. Find the sum of number from 1 to 100 using a loop
/**     let sum = 0 ;
for (let i = 1; i <= 100; i++) {
   sum = sum + i ;
}
console.log(sum);
 **/

//Q7.Print all numbers between 1 to 50 that are divivsible by 3
let i = 1 ;
while(i <=50){
    if (i % 3 === 0) {
        console.log("Divisible by 3 number are: "+i);
    }
    i++;
}

//Q.8 Ask the user for a number and print whether each numbers from 1 to that number is even or odd.(e.g : "1 is odd" , "2 is even", ...)

/** let num = prompt("Enter a Number");
for (let i = 1; i <= num ; i++) {
    if (i % 2 == 0) {
        console.log(i+ ":is Even");   
    }else{
        console.log(i+ ": is Odd");
        
    }
} **/

//Q.9 Count how many numbers between 1 to 100 are divisible by both 3 and 5 . // 13579
// for (let i = 1; i <= 100; i++) {
//     if (i %3 == 0 && i %5 == 0 ) {
//         let count = 0; 
//         count ++ ;
//         console.log(i);
        
//     }
// }

             //Question based on break and continue
/** Q1. Stop at first Multiple of 7
 * Write a loop from 1 to 100 that:
 * print each number
 * stops completely when it find the first number divisible by 7  **/

// for (let i = 1; i <= 100; i++) {
//      console.log(i);
//     if (i %7 === 0) {
//         break ;     
//     }
// }

/** Q.2  Skips Multiple of 3 
 * Write a loop from 1 to 20 that:
 * Skips numbers divisible by 3
 * print all others
 * Use Continue
 * Expected Output:
 * 1 2 4 5 7 8 10 11 ...(no 3,3,9 etc.) **/
for (let i = 1; i <= 20; i++) {
if (i %3 === 0) {
     continue ;
             
}    
  console.log(i);
}