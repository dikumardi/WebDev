

// const obj = {
//     player:'bobby',
//     experience:100,
//     wizardLevel:false
// }

// obj.player='sss'
// console.log(obj);

//Destructuring
/** const player = obj.player
const experience = obj.experience
const wizardLevel = obj.wizardLevel **/

//Destructuring
const {player,experience} = obj

/**Declaring new ways of object properties **/
// const name ='john snow'
// const obj = {
//     [name]:'hello',
//     ['ray + smith']: 'hehe'
// }

// const a ='simon'
// const b= true;
// const c= {}
// const obj = {a,b,c}

// Templaate Strings
// const greeting = "hello" + name + "you seem to be doing" + greeting + "!"

// const name = 'hehe'
// const age = 34;
// const pet = 'cat'
// const greetingBest = `hello ${name} you seem to be ${age}. what a lovelly ${pet} you have `

//default arguments
function greet(name='',age= 30,pet='cat') {
    return `hello ${name} you seem to be ${age}. what a lovelly ${pet} you have `
}
greet(name='hehe',age=18)

//Symbol
var sym1= Symbol()
var sym2= Symbol('foo')
var sym3= Symbol('foo')

//arrow function
function add(a,b) {
    return a + b;
    
}
const add2 = (a,b) => a+ b ;


// change everything below to the newer Javascript!

// let + const
var a = 'test'; let a ='test'
var b = true; // let b = true;
var c = 789; // const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
// let {firstName,lastName,age,eyeColor} =person

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;
// let eyeColor = person.eyeColor;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};
// let okObj = {a,b,c};
 
  


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
// let message =`hello + ${firstName} have I met you before? I think we met in " ${city}  " last summer no???";`

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
//   const isValidAge =(age=10)=> age;


// Symbol
// Create a symbol: "This is my first Symbol"
//let sy =Symbol("This is my first Symbol")

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
const whereAmI= (username,location)=>{
 if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
whereAmI('hehe','jaipur')