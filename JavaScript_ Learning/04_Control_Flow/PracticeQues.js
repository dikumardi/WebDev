/**   1. Student grade logic:
 Write a program that prints A, B, C, D, or F based on marks**/

 let marks = 21 ;

 if (marks >= 90 && marks<= 100) {
    console.log("A");  
 }else if (marks >=70 && marks <= 89) {
    console.log("B"); 
 }else if (marks >= 50  && marks <= 69) {
    console.log("C");
 }else if (marks >= 33 && marks <= 49) {
    console.log("D");
 }else{
        console.log("fail");
 }

 /** 2. Rock-paper-scissors:
 Given player1 and player2's choice, print winner or draw **/
let player1 = prompt("PLAYER 1 ").toLowerCase;
let player2 = prompt("player 2").toLowerCase ;

 if (player1 === player2 ) {
    console.log("Draw Match");  
 }else if (player1 === "rock" && player2 === "scissor"){
   alert("player1 Winner")
 }else if (player1 === "paper" && player2 === "rock"){
   alert("player1 Winner")
 }else if (player1 === "scissor" && player2 === "paper"){
   alert("player1 Winner")
 }else{
   alert("Player2 Winner")
 }


 /**  3. Login message: **/
  let isLoggedIn = true;
 let isAdmin = false;
 // Show different messages based on combination

 if (!isLoggedIn) {
   console.log("Go First Log in");
 }else if (isAdmin) {
   console.log("Admin welcome");
 }else{
   console.log("user welcome");
   
 }

 //  4. Weather advice:
 
 let weather = "rainy";
 // Use switch-case to print what to wear
 switch (weather) {
   case "summer":
      console.log(" wear light and airy clothes like cotten");
      break;
   case "Winter":
      console.log("Wear thick and layered clothes ");
      break;
   case "rainy":
      console.log("Wear waterproof clothes like raincoat ");
      break;
 
   default:
      console.log("Invalid input");
      break;
 }

// 5. Age checker:
  // Return "Kid", "Teen", "Adult", or "Senior
  let age =23;

  if (age >= 1 && age <= 12) {
       console.log("kid");
      }else if (age >= 13 && age <= 19) {
      console.log("Teen" );
      }
   if (age >= 20 && age <= 59) {
      console.log("Adult");
   }else{
      console.log( "Senior");
      
   }