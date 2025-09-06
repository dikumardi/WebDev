/**DOM manipulation
 * Html se element select karna 
 * text badalna
 * htnl badalna
 * css badalana
 * attribute 
 * event listener
 *  **/
// let abc = document.getElementsByClassName("abc");
// console.log(abc);



// let idName =document.getElementById("idName")
// console.log(idName);
// console.dir(idName);

// // let ans = document.querySelector("h1")
// let ans1 = document.querySelectorAll("h1")

// let h1= document.querySelector("h1");
// // h1.textContent = "Heyy ! ... . How are you ? "

// h1.innerHTML = "<i>hey you whatupp ?</i>"
// h1. hidden =  true;

// h1.innerText = "yo yo"

//  h1 .outerText = "hey you hey "

// console.dir(h1)

/** Attribute manipulation **/
// let aTag = document.querySelector("a")
// aTag.href = "https://www.google.com"

            /**setAttribute**/
// aTag.setAttribute("href" , "https://www.google.com")
// console.dir(aTag);

// let a = document.querySelector("a")

        /**getAttribute**/
// console.log(a.getAttribute("href"));
 
       /**removeAttribute**/
    //    a.removeAttribute("href")


       /** ### Dynamic DOM manipulation:createElement,appendChild,removeChild,prepend,append  ### **/

//    let h1= document.createElement("h1")
//    h1.textContent = "Hello Everyone"
// //    document.body.append(h1)
//           //or
//           document.querySelector("body").append(h1)
//              console.log(h1);
   


                   /**appendchild**/
                //   let h1 = document.createElement("h1")
                //   h1.textContent = "Hello ! ... I am from js."

                // let div =  document.querySelector("div")
                // div.appendChild(h1);
                 
                          //or similar above and below

                // document.querySelector("div").prepend(h1)

                 /**### Style updates via .style and classList(add,remove,toggle)**/

                 // Chainging css by the help of js
                //   let h1 = document.querySelector("h1");
                //   h1.style.backgroundColor = "red"
                //   h1.style.color = "white"
                //   h1.style.fontFamily = "Bradley Hand ITC"
                //   h1.style.accentColor = ""
                //   console.dir(h1);
                  
                     /** classList(add,remove,toggle)**/
                     let h1 = document.querySelector("h1")
                    //    h1.className = "styling" if in h1 there is class it will replace by by this class.

                //    h1.classList.add("styling") // we can do that no effect will be happen if the class existing is there 
                     console.dir(h1);
                     
                     //remove
              //       h1.classList.remove("styling")

                        //toggle
                     h1.classList.toggle("styling")


                     // What is DOM ? How does it represent the HTML structure?
     // whatever written inside html is called DOM . It represent as the tree 
     
           //Name the types of nodes in the DOM tree ?
     // There are node, element ,text and comment

    //Difference between an element node and a text node?
    // element node is basically a tag element node can have child and text node is a content inside a tag .text node doesn't have children

    //Inspect the following HTML in the browser and identify each node:
    /**<div>
    hello <span >World</span>
</div>
 **/

// div is a element node and span  children of div node element

//whta is difference between  getElementById and querySelector
// basicallly getElementById can be selet by is id .querySelector is multi purpose it can selct by tag id class  or attribute if 


    

