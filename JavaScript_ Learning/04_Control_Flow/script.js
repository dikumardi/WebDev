        // if else else-if
        if (12>13) {
            console.log("yeye");
            
        } 
        else if(12>14 ){
            console.log("asd");

        }
         else if(12>16 ){
            console.log("aafds");

        }else{
            console.log("eyr");
            
        }


          //switch case

          switch (23) {
            case 1:
                console.log("Case 1");
                break;
            case 2:
                console.log("Case 2");
                break;
            case 3:
                console.log("Case 3");
                break;    
            case 4:
                console.log("Case 4");
                break;
            case 5:
                console.log("Case 5");
                break;
                
            default:
                console.log("non valid default");
                break;

          }

                 //early return pattern

// if our value is less than 100 then return A if less than 75 return B .if less than 50 then return C 

                 function getVal(val) {
                    if (val < 25) return 'D' ;
                    else if(val < 50) return 'C' ;
                    else if(val < 75) return 'B' ;
                     return 'A';
                 }

               console.log(getVal(89));
               


               //Practice Question
 /**  Write a function getGrade(score) that:
  * Takes a student's marks (0 to 100)
  * Return the grade based on this logic:
  * 90-100 A+
  * 80-89 A
  * 70-79 B
  * 60-69 C
  * 33-59 D
  * 0-32 Fail
  * Anything else  Invalid marks
 **/

  // USING IF ELSE
/** function getGrade(score) {
    if (score >=90 && score <=100) {
     return  "A+";    
    }
    else if(score >=80 && score <=89){
     return   "A" ;
    }
     else if(score >=70 && score <=79){
    return "B" ;
    }
    else if(score >=60 && score <=69){
    return "C";
    }
    else if(score >=33 && score <=59){
    return "D" ;
    }
    else if(score >=0 && score <=32){
        return "Fail";
    }else
    {
    return "Invalid Marks"
     }
    }

    console.log(getGrade(7));
   **/  

    // WE CAN ALSO DO IT EARLY RETURN PATTERN
    function getGrade(score) {
    if (score >=90 && score <=100)   return  "A+"; 
     if(score >=80 && score <=89) return  "A"; 
     if(score >=70 && score <=79) return "B" ;
     if(score >=60 && score <=69) return "C";
     if(score >=33 && score <=59) return "D" ;
     if(score >=0 && score <=32)  return "Fail";   
      return "Invalid Marks"
     
    }

    console.log(getGrade(45));
    
    //ROCK-PAPPER-SCISSOR LOGIC
    function rps(user, computer) {
          if (user === computer) return "draw"; 

        if (user === "rock" && computer === "scissor") return "user" ;
         if (user === "scissor" && computer === "paper") return "user" ;
        if (user === "paper" && computer === "rock") return "user" ;

        return "computer"

        
    }
// console.log(rps("rock","scissor"));
console.log(rps("paper" , "scissor"));

/**  if else  **/
let marks = 78 ;
if (marks >=90) {
    console.log("A");
}else if (marks >=75) {
    console.log("B");
}else{
    console.log("C");  
}
// B

/**  switch case **/
let fruit = "apple" ;
switch (fruit) {
    case "banana":
        console.log("This is yellow banana");
        break;
    case "pineapple" :
        console.log("This is yellow pineapple");
        break;
     case "orange" :  
     console.log("This is ORANGE");
        break;
      case "mango" :
        console.log("This is mango");
        break;
         case "grapes" :
            console.log("This is  grapes");
        break;
             case "apple" :  
             console.log("This is apple ");
        break;   

    default:
        console.log("NOT A FRUIT");
        break;
}
//This is apple

/**Early Return pattern **/
function checkAge(age) {
 if (age < 18) return "Denied";
 return "Allowed";
 }

 console.log(checkAge(21)); //Allowed
 