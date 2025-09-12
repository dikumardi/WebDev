/** let inp =document.querySelector("input"); 

let forms = document.querySelector("form");

forms.addEventListener('submit', function (a) {
    a.preventDefault();
 let ta = document.querySelector("textarea");
   console.log( ta.value );


    if(inp.value.length <= 2){
    let sm = document.querySelector("small")
    sm.style.display = "initial"
    console.log(sm.value);

    }
    
  
}); **/


let nm = document.querySelector("#username");
let em = document.querySelector("#email");
let pw = document.querySelector("#password");
let forms = document.querySelector("#myForm");

forms.addEventListener("submit",function (dets) {
   dets.preventDefault();
   
// Only letters (for name fields)
const nameRegex = /^[A-Za-z\s]+$/;
let nameRegexAns =nameRegex.test(nm.value)
//  console.log(nameRegexAns);
 
// Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailRegexAns =emailRegex.test(em.value)
//  console.log(emailRegexAns);


// Password: Minimum 8 chars, at least one letter and one number
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let passwordRegexAns =passwordRegex.test(pw.value)
//  console.log(passwordRegexAns);

 let isValid = true;
  nm.value = ""
     em.value = "";
      pw.value = "";

  if (!nameRegexAns) {
      let err = document.querySelector(".error");
  err.textContent = "incorrect username .Only letters Required"
    err.style.display = "initial";
        err.style.color = "red"

        isValid = false ;


  }  if(!emailRegexAns) {
    let emailerror = document.querySelector(".email-error");
      emailerror.textContent = "incorrect E-mail @ symbol Required";
      emailerror.style.display = "initial";
      emailerror.style.color = "red";

              isValid = false ;



  }  if (!passwordRegexAns) {

      let passworderror = document.querySelector(".password-error");
      passworderror.textContent = "Password incorrect  Minimum 8 chars, at least one letter and one number Required";
      passworderror.style.display = "initial";
      passworderror.style.color = "red";

              isValid = false ;

  }

  if (isValid) {
    let resultmessage =document.querySelector(".result-message");
    resultmessage.textContent = "Registered Successfully Done"
    resultmessage.style.display = "initial"
    
  }
   

});