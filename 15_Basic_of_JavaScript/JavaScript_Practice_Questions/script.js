             /**  JAVASCRIPT PRACTICE **/
/** 1. Age Category Message – Ask the user for their age. If they are 
under 18, print “You are a minor.” If they are between 18 and 60, 
print “You are an adult.” If they are above 60, print “You are a 
senior citizen.” 

var age = Number(prompt('Enter User Age'));
 
if(age<18){
    console.log('you are minor');
    
}else if (age>18 && age < 60){
    console.log('You are Adult');
}else{
    console.log('you are senior citizen');
}
*/
/**
 2. Even or Odd Sum – Take two numbers from the user using 
prompt(). If the sum of both numbers is even, print “Even Sum”; 
otherwise, print “Odd Sum.”
  * 

var num1 = Number(prompt('Enter First Number'));
var num2 = Number(prompt('Enter Second Number'));

var sum = num1 + num2 ;

if (sum % 2 == 0) {
    console.log('Even Sum');
    
}else{
    console.log('Odd Sum');
    
}

*/

/** 3.Character Case Checker – Ask the user for a single character. 
Check if it's uppercase, lowercase, or neither (not a letter) */

var char = prompt('Enter a single Character')

if (char  >= 'a' && char <= 'z') {
    console.log('lowercase means in samll letter');
    
}else if (char  >= 'A' && char <= 'Z') {
    console.log('uppercase means in capital letter');
    
}else{
    console.log('no a letter');
    
}

/**
 * 4. Largest of Three Numbers – Take three numbers as input and 
print the largest number among them without using 
Math.max().
 */

var num1 = Number(prompt('Enter First Number'));
var num2 = Number(prompt('Enter Second Number'));
var num3 = Number(prompt('Enter Third Number'));

if (num1 > num2 && num1 >num3) {
    console.log('First one is largest');
    
}else if (num2> num1 && num2>num3) {
    console.log('Second number is largest');
    
}else{
    console.log('Third one is greatest');
    
}
/**Leap Year Checker – Ask the user for a year and determine if 
it's a leap year or not. */