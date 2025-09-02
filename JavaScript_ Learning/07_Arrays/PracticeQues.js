/** 1. Create an array of student names and print each **/
let names = ["userName","YourName","PersonName"];
 names.forEach(function (val) {
console.log(val);
})


/**2.  Filter even numbers from an array **/
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
let numberAns = numbers.filter(function (val) {
    return val %2 === 0 ;
});
console.log(numberAns);
 
//3.Map prices to include GST (18%)
let productPrice = [100, 200 , 300];
let updatedPrice = productPrice.map(function (val) {
    return val * 1.18 ;
})
console.log(updatedPrice);


//4. Reduce salaries to calculate total payroll
let salaries = [20000,30000,25000,40000];
let totalPayroll = salaries.reduce(function(acc,val) {
    return acc + val ;
},0);
console.log(totalPayroll);


//5. Find the first student with grade A
let studentGrade = [
    {name:"abc",grade:"B"},
    {name:"priya",grade:"A"},
    {name:"Amit",grade:"C"},
];

let firstStudentA = studentGrade.find(function (value) {
    return value.grade === "A";
});

console.log(firstStudentA);

//6. Write a function to reverse an array
let rev = [1,2,3,4,5,6,7];
rev.reverse();
console.log(rev);

// 7. Sort array of ages in ascending order
let ages = [23,34,45,18,10];

let asce = ages.sort(function (a,b) {
    return a - b;
});
console.log(asce);

//8.Destructure first two elements of an array

let state = ["Jharkhand", "Bangalore","Chennai","Odisha","Delhi","Mumbai"];

let  [a,b] = state ;
console.log(a);
console.log(b);

//9. Use some() to check if any student failed
let marks =[45, 60, 20 , 80];

let ans = marks.some(function (val) {
    return val < 35 ;
});
console.log(ans);

//10. Use spread to copy and add new item
let subject = ["Maths","Science","English"];

let subjectAdd = [...subject,"History"];
console.log(subjectAdd);
