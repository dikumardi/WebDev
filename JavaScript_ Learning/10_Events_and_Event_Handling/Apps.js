// let sel = document.querySelector("select");
// let h3 = document.querySelector("h3");

// sel.addEventListener("change",function (dets) {
// h3.textContent = `${dets.target.value} Device Selected`    
// }) 


/**Keyup**/
let container = document.getElementById("box");
let h1 = document.querySelector("h1");

window.addEventListener("keydown", function (dets) {
  //  console.log(dets.key);
  if (dets.key !== " ") {
        h1.textContent = dets.key
        console.dir(dets);
        

  }else{
    h1.textContent = "Spc"
    
  }
    
})


       /**Adding element dynamically **/
       let inputs = document.querySelectorAll("input");

       let forms=  document.querySelector("form");
       forms.addEventListener("submit" ,function name(evet) {
        evet.preventDefault();
        //  console.log(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value);
      //  console.log(card);


       /****/
        let main = document.querySelector(".main")
       
       let card = document.createElement("div");
      card.classList.add("card")

       let profile = document.createElement("div");
       profile.classList.add("profile");

       let img = document.createElement("img");
       img.setAttribute("src" , "Cat03.jpg");


       let h1 = document.createElement("h1");
       h1.textContent = inputs[1].value;

       let h5 = document.createElement("h5");
       h5.textContent = inputs[2].value;

       let p = document.createElement("p");
       p.textContent = inputs[3].value;


       profile.appendChild(img);
       card.appendChild(profile);
       
       card.appendChild(h1);
       card.appendChild(h5);
       card.appendChild(p);

       main.appendChild(card);
 
      inputs.forEach(function (inp) {
        if (inp.type !== "submit") {
          inp.value = ""
        }
      })

       });


   


       

       