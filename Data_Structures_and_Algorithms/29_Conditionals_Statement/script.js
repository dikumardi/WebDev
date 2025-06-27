
// year  is divisible by 4 
// divisible by both 100 , 400


// let year = Number(prompt("Enter a year"))
// let isLeap = false ;

// if (year%4==0  ) {
//     if (year%100==0) {
//          if (year% 400 ==0){
//             isLeap = true
//           } else {
//             isLeap = false
//         }
//     }else{
//         isLeap=true;
//     }
// }else {isLeap =false
//       }
// console.log(isLeap? " leap year":"not a leap year");


// Second approach

/**
 if (year% 4 ==0 && year %100 !=0) {
    console.log("leap year");
    
}else if (year % 400==0){
    console.log("leap year");
    
}else{
    console.log("no leap year");
    
} */

    
    /**Shop discount
     * Amount        Discount
     * 0-5000            0%
     * 5001-7000         5%
     * 7001-9000         10%  
     * more than 9000    20%
      
      
          let amount = Number(prompt("Enter a amount"))
if (amount>=0 && amount <=5000) {
    console.log(amount);
}else if (amount > 5001 && amount <=7000){
    console.log(amount-(5*amount)/100);
} else if (amount > 7001 && amount <=9000){
    console.log(amount-(10*amount)/100);
}else if (amount > 9000 ){
    console.log(amount-(5*amount)/100);
}else{
    console.log("invalid input");
    
} 
     
     */

//  let amount = Number(prompt("Enter a amount"));
//  let disc = 0
// if (amount>=0 && amount <=5000) {disc = 0} 
// else if (amount > 5001 && amount <=7000){disc = 5}
// else if (amount > 7001 && amount <=9000){disc = 10}
// else if (amount > 9000 ){disc = 20}
// else{console.log("invalid input")}

//  console.log(amount-(disc*amount)/100);


 /**.Bijli Bill
      Unit             Price
   up to 100         Rs 4.2/unit
   101-200           Rs 6/unit
   201-400           Rs 8/unit
   more than 400     Rs 13/unit   


   let unit = Number(prompt("Enter a unit"))
let amot = 0

if (unit > 0 && unit <=100) {
    amot = unit *4.2;
}else if(unit > 100 && unit <=200){
    amot = (100 * 4.2) + (unit-100)*6 ;
}else if(unit > 200 && unit <=400){
    amot = (100 * 4.2) + (  100 * 6) + (unit-200)*8 ;
}else if(unit > 400){
    amot = (100 * 4.2) + (100 * 6)  + (  100 * 8)+(unit-400)*13 ;
}
console.log(amot);

  **/

/**let unit = Number(prompt("Enter unit"))
let amount = 0
if (unit > 400) {
   amount = (unit - 400) *13;
   unit = 400
}
if (unit >200 && unit<=400) {
    amount = amount + (unit-200)*8;
    unit = 200;

}
if (unit >100 && unit <=200) {
    amount = amount + (unit-100)*6;
    unit=100
    
}

amount =amount + unit*4.2 ;
console.log(amount);
 */

//Loops

