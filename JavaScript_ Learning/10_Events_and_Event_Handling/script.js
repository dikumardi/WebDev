let h1= document.querySelector("h1");
h1.addEventListener("click",function () {
    h1.style.color = "red"
})

let p = document.querySelector("p");
function doubleClick() {
    p.style.color= "green"
}
p.addEventListener("dblclick",doubleClick);

p.removeEventListener("dblclick",doubleClick) //for removing eventListener  

//for input : whenever we write something in input 

// let inp = document.querySelector("input");

// inp.addEventListener("input", function (dets) {
//     if (dets.data !== null) {
//      console.log(dets.data);     
// }

// });


let inp = document.querySelector("input");
inp.addEventListener("input", function (a) {
    if (a.data !== null) {
        console.log(a.data);
    }
})

//Change :event raise when the input is  selected or their is something change in textarea 

let h3 = document.querySelector("h3");
let select = document.querySelector("select");
select.addEventListener("change", function (a) {
    //  h3.textContent = a.target.value +` Device selected`
   h3.textContent =`${a.target.value} device selected `; 
   // console.log(a);
    
    
})