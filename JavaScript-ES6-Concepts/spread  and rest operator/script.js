// spread and rest operator

// spread can be used in array as well as object

let arr = [1,2,3]
let arr2 = [...arr,4,5,6,7]
console.log(arr2);

let person = {
   name :"dsa",
}

let newperson = {
    ...person,
    city:'asd',

}
console.log(newperson);


// rest operator : function ka argument me use ho raha hai to usse rest operator kahate hai
function hello(...all) {
    console.log(all);
    
}
hello(1,2,3,4,5,6,7,8,9,10);