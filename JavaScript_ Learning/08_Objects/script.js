// key value structure : key is left side like model,pixel,price and purchaseyear are key and the right side is value oppoA38,50 they are value
let oppo = {
    model: "oppoA38",
    pixel: 50,
    price: 10000,
    purchaseYear:2024,

}

console.log(oppo.model);
console.log(oppo['pixel']);

let newModel = "model";
console.log(oppo[newModel]);

/** Dot vs bracket notation
  eg: oppo.key it used to acces the oppo and search its key 
 
  bracket : oppo['pixel'] inside  the quatation we can find same thing 
 
 *  **/

/** Nesting and deep access **/
const user = {
    name:"yourName",
    address:{
        city: "yourCity",
        pin:123456,
        location:{
            lat: 23.2,
            lng: 77.4,
        },
    },
};
//to access lng we have to write like this
// user.address.location.lng

/** object Destructuring: You can extract values directly: instead of accessing like the above one access like this **/

let {lat,lng} = user.address.location;
console.log(lat);
console.log(lng);


/** Looping: for-in , Object.keys , Object.entries **/

//for-in
var obj = {
    name: "yourName",
    age: 25,
    email: "test@gmail.com"
};
for(let key in obj){
    console.log(key , obj[key]);
}

// let obj = new Object();

//Object.keys :we use Object.key we we want to create a arrays
Object.keys(obj);

// Object.entries
Object.entries(obj);

/**copying objects:spread, Object.assign ,deep clone**/

//spread operator
let obj2 = {...obj};
console.log(obj2);
console.log(obj);

// Object.assign
 let obj3 = Object.assign({price: 10000}, obj);
 console.log(obj3);
 
 //deep clone 
  var object = {
    name: "yourName",
    age: 25,
    email: "test@gmail.com",
    addresss: {
        city: "cityName"
    },
};
// let object2 = {...object};
// object2.address.city = "Delhi";
// console.log(object2);
// console.log(object);

// if there is nested object and when you try to  clone it and if you make any changes to the nested part it automatically change to reference . to avoid this instead of try to clone by spread operator  use deep clone

//deep clone
 // JSON.stringify(object) // this will convert all the object key value pair into string 
// JSON.parse() //here inside () we write the convert string to make it actual real form .so below we have done  all together 
/** let object2 = JSON.parse(JSON.stringify(object))
console.log(object2);

object2.address.city = "helllo";
console.log(object2); **/

/** Optional chaining , **/
    // object?.address?.city

    /**  computed properties **/

    let role = "admin";

     let employee = {
    name: "empName",
    age: 25,
    email: "test@test.com",
    addresss: {
        city: "abx"
    },
    [role]: "empName"
};