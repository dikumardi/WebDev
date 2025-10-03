//Reference and primitive type
// (array,object)are reference and (string and number) are primitive type

let num1 = 100;
let num2 = num1 ;
num2 = 4;
console.log(num1);
console.log(num2);

let person = {
    name:'ewwe',
}
let person2 = {
    ...person,
    
};
person2.name = "ere3"
console.log(person);
console.log(person2);
