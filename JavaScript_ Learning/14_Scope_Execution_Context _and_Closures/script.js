/** Global,block ,functional **/

// functional scope
function xyz() {
    let a = 10 ;
    console.log(a); // 10
    
}
xyz();
  //  console.log(a); // error it can only acces inside functional scope only


    // block can be used inside this baces only { } if try to acces it outside it gives error .but if you create variable with var it can be access because var doesn't respect curly braces { }  so it can be used any where in the code 

 greet()
 function greet() {
    if (true) {
        let b = 24 ;
        var c = 50 ;
         console.log(b); //  24
         console.log(c); //  50

         
    }
 // console.log(b); // cannot access outside the { } braces
   console.log(c); // 50

 }

 // global scope is we can use anywhere in the whole code


 /**Execution Context: memory and execution phase : 
  * Whenever a js code run  it automatically create a Execution contex (imagine execution context as a container ).and inside it it created a two phase memory phase and execution phase so in memory execution phase it take all the functions and variables and set its value to undefined in next step it goes to execution phase where it run all the code line by line and set it value and if it find function it again it make an new execution context inisde it and does same thing vice-versa after it all running the whole code it  automatically delete the execution and back to the global execution context chaeck if any thing left if not again global ececution will also be deleted  
  *  **/
 

//  Lexical Scope

//Lexical Scope 
function example() {
    let x = 403 // so a here is lexical scope of example because it can be acces it anywhere inside the example  even if it have function iniside function 
}


//dynamic scope


let a = 5 ;
function aaa() {
    console.log(a); //5
    // in other language it support dynamic but in js it does not support so here 45 will not be print
}
function bbb() {
let a  = 45 ; // here if it is dynamic scope even if we are  calling aaa () inside bbb() in dynamic scope it is possible 
   aaa(); 
    
}
bbb();

/**Closures: function inside function and that function return the function can access the parent variable this whole scinerio is called closures  **/
