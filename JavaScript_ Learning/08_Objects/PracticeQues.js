// // Create an object for a student with name, age , and is Enrolled

// let student ={
//     name: "myName",
//     age: 21,
//     isEnrolled: true
// };
// console.log(student);

//Can an object key be a number or boolean ?
let obj = {
    true : "yes",
    24 : "answer"
};
console.log(obj[24]);
//yes  it can be boolean as well as boolean

//Acess the value of "first-name" from this object
// const user = {
//     "first-name": "userName"
// };

//yes by  user["first-name"]
// console.log(user["first-name"]);


//Give a dynamic key let key = "age", how will you access user[key]?
// let key = "age";
// const user = {
//    age:25,
   
// };
// console.log(user[key]);


// From the object below ,print the latitude
// const locations = {
//     city: "abcCity",
//     coordinates:{
//     lat: 23.2,
//     lng:77.4,
// },
// }
// locations.coordinates.lat


// what will happen if coordinates is missing ? hoe can you prevent errors?
const locations = {
    city: "abcCity",
    coordinate:{
    lat: 23.2,
    lng:77.4,
},
}

//optional chaining
console.log(locations?.coordinates?.lat);


//Destructure the city and lat from the location object above

let {city} = locations;
let {lat} = locations.coordinate;
console.log(city);
console.log(lat);


//Destructure the key "first-name" as a variable called firstName
const user = {
    "first-name": "userFirstName"
};

let {"first-name": firstName} = user;

//use for-in to log all the keys in this obkect:
const course = {
    title:"javascript",
    duration:"4 weeks",
    author: "hreda"
};

//solution below
for(let key in course){
    console.log(key);
}

/**use Object.entries() to print all key-value pairs as :
    title:javascript
    duration:4 weeks
    author: "hreda
    **/


    //solution below
     Object.entries(course).forEach(function (val) {
        console.log(val[0]+ ":" + val[1]);
        
       });

       //Copy this using spread operator
       const original =  {a :1, b:2 };

       // below answer
       let newOriginal = {...original}
       console.log(newOriginal);

       //what is problem in this
    //    const obj1 = {info: {score:80}};
     //  const clone = {...obj1};
       //clone.info.score= 100;
       //console.log(obj1.info.score);//100 basically here nested object is there so it effect the obj1 so the deep clone is not been done that why 100 answer
       
       //Deep clone the obj1 safely
      const obj1 = {info: {score:80}};

      let newObj= JSON.parse(JSON.stringify(obj1));
      console.log(newObj);
      newObj.info.score = 100;
      console.log(obj1);
      console.log(newObj);

      //Re-write this safely using optional chaining
      const person = {
      };
      console.log(person?.profile?.name);


      // use a variable to dynamically assign a property
      const key = "role";
      let object = {
        name: "yourName",
        [key]:"admin"
      }
      console.log(object);
      
      
      
       