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
                    // h1.classList.toggle("styling")


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

// div is a element node and span is children of div node element

//whta is difference between  getElementById and querySelector
// basicallly getElementById can be select by is id .querySelector is multi purpose it can selct by tag id class  or attribute if  you use id then by # symbol you should use same for the class

//What does getElementsByClassName return?  It is an array ?

// let color = document.getElementsByClassName("color")
// console.dir(color);

// getElementsByClassName return HTMLCollection. It is very similar to array but not an array.

//Use querySelectorAll to select all buttons with class ".buy-now".
let buynow = document.querySelectorAll(".buy-now")
console.log(buynow);

//Select the heading of a page by ID and change its text to "something else".
let changeText = document.getElementById("changeText")
changeText.textContent = "Changed by the help of js"



//select all <li> elements and print their text in a loop
let list = document.querySelectorAll('li')

/**list.forEach(function (val) {
   console.log(val.textContent);   
})
   **/
  for (let i = 0; i < list.length; i++) {
   console.log(list[i].textContent);
   
  }

  //what is the difference between innerText, textContent and innerHtml?
  // innerText, textContent

  // when  should you use textContent instead of innerText?
  // innerText is slower and textContent is faster so we use textContent and basically textContent  will show or take all the element even the content is hidden whereas innerText only take which is visible

  /**  Select a paragraph and replace its content with: 
      <b>Updated</b> by JavaScript        
   *  **/
  let para =document.querySelector("p");
  para.innerHTML ="<b>Updated</b> by JavaScript";
  
//How do  you get the src of an image using JavaScript?
let image = document.querySelector(".image");
//1st way
console.log(image.src);
//2nd way
console.log(image.getAttribute("src"));

//what does setAttribute() do?
document.querySelector("img").setAttribute( "src","https://set-your-new-url")

// Slect a link and update its href to point to something your choice of your website

let a = document.querySelector("a");
a.href ="your-choice-of-URL"

// Add a title attribute to a div dynamically
let div = document.querySelector("div");
// div.title =" yo ! what up div"
//or
div.setAttribute("title","hehe yo  info of div")

// remove  the disable attribute from a button.
let btn = document.querySelector("button");
btn.removeAttribute("disabled")

// What does createElement() do? What's returned ?
let heading1 =document.createElement("h1");
console.log(heading1);

//what is difference between appendChild() and prepend()
//appendChild() add the element at the last and prepend() add the element at the top/ first.

//can you remove an element using removeChild()?
// document.querySelector("div").removeChild(elementnode)

//Create a new list item <li>New Task</li> and add it to the end of  a <ul>
// let ul = document.querySelector("ul")
// let li = document.createElement("li");

// li.textContent = "New Task";

// ul.appendChild(li);


//Create a new image element with a placeholdr source and add it at the top of a div.

// let newImage = document.createElement("img");
// image.setAttribute("src","SS")
// newImage.prependChild(); 

//Select the fist item in a list and delete it from the DOM.
// let ul = document.querySelector("ul");
// let li= document.querySelector("li");
// ul.removeChild(li)

//How do you change background of an element
// let ul = document.querySelector("ul");
// ul.style.backgroundColor ="red"

// what  is the difference between .classListadd() and.classList.toggle()?
// .classListadd() basically it will add the .classListadd() if the present it doesn't change but in case of .classList.toggle() if the classList is added it remove and if it is not there then it will add 

//Add a  highlight class to every even item in a list
let li= document.querySelectorAll("ul li:nth-child(2n)")
console.log(li);

li.forEach(function (elem) {
   elem.classList.add("highlight")
})

//Set the font size of all <p> element to 18px using. style
let p = document.querySelectorAll("p");
p.forEach(function (elem) {
   elem.style.fontSize = "20px"
})
// p.style.fontSize = "18px";
