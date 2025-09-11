// let h1= document.querySelector("h1");
// h1.addEventListener("click",function () {
//     h1.style.color = "red"
// })

// let p = document.querySelector("p");
// function doubleClick() {
//     p.style.color= "green"
// }
// p.addEventListener("dblclick",doubleClick);

// p.removeEventListener("dblclick",doubleClick) //for removing eventListener  

//for input : whenever we write something in input 

// let inp = document.querySelector("input");

// inp.addEventListener("input", function (dets) {
//     if (dets.data !== null) {
//      console.log(dets.data);     
// }

// });


// let inp = document.querySelector("input");
// inp.addEventListener("input", function (a) {
//     if (a.data !== null) {
//         console.log(a.data);
//     }
// })

//Change :event raise when the input is  selected or their is something change in textarea 

// let h3 = document.querySelector("h3");
// let select = document.querySelector("select");
// select.addEventListener("change", function (a) {
//     //  h3.textContent = a.target.value +` Device selected`
//    h3.textContent =`${a.target.value} device selected `; 
//    // console.log(a);
    
    
// })


//mouseover,moverout

/** let  box= document.querySelector(".box")
box.addEventListener("mouseover",function (a) {
    box.style.backgroundColor = "yellow"
    console.log(a);
    
});

box.addEventListener("mouseout",function () {
    box.style.backgroundColor = "red"
}); **/

           //mousemove
// let  box= document.querySelector(".box")

// window.addEventListener("mousemove", function (evet) {
//     console.log(evet.clientX,evet.clientY);
//     box.style.top = evet.clientY + "px"; 
//     box.style.left = evet.clientX + "px";
    
// });


//
let main = document.querySelector(".main")
let nav = document.querySelector(".nav")
let button = document.querySelector("button")

main.addEventListener("click",function () {
   // alert("main clicked")
        console.log("main clicked");

});


nav.addEventListener("click",function () {
   // alert("nav clicked")
    console.log("nav clicked");
    
});


button.addEventListener("click",function () {
   // alert("button clicked")
        console.log("button clicked");

});
