              /**create, access , modify arrays **/

// let arr = new Array() // Create array

let marks = [ 10 , 42 , 23 , 44] ; // created array
marks[2]; // accessing marks


//modify array
/** let arr = [1 , 2 , 3 , 4 , 5];
arr[2]=12;
console.log(arr); **/

/**Arrays methods: push , pop , shift , unshift , splice , slice , reverse , sort ,  **/

var arr = [1, 2, 3, 4, 5];
arr.push(6); // means add new value to last line
arr.pop(); // means remove a value from the last
arr.shift(); //remove value from first
arr.unshift(0) // it added new value to the start
let a = [10, 20, 30, 40, 50];
a.splice(2,2) // remove value from the middle and first value is from where to how many value remove 

let val = [1, 2, 3, 4, 5];
let newval = val.slice(0, 3);// to see answer we have to create a new variable and set where to remove and upto to how many but if you can 4 then it delete value upto 3 and your val will not be change
console.log(newval);

var arr = [1, 2 , 3, 4 , 5, 6, 7]
arr.reverse();// reverse the valur from backward to front
console.log(arr);

var arr = [21 , 24 ,7 , 32 , 10 ,17]
let ans = arr.sort(function (a , b) {
    return a - b ; // a -b is ascending order and b-a is descending order

    // when we use sort inside it it created a function and then return the ascending or descending order you want
});
console.log(ans);

/** map , filter , reduce , find , some , every(intro level) **/

var arr = [11 , 62 , 3 , 4 , 25];

//forEach
arr.forEach(function (val) {
    console.log(val + 5);  
})

// Map : we use map when we have to create a new array and based on previous data
// when you see a map think it is a blank array
let answer = arr.map(function (val) {
 if (val > 10)  return val; 
});
console.log(answer);
//whenever you see a case whene an array create a new array and that new array store some value here we use map 

//filter
var arr = [1, 2,3,4,5,6,7,8]
 arr.filter(function (a) {
    if (val > 4) return true ; 
 })

//reduce
var arr = [1, 2, 3, 1, 3,4,5,6]
let ans1 = arr.reduce(function (accumulator,val) {
    return accumulator + val ;
}, 0);

//find
 let aa = arr.find(function (val) {
    return val  === 3 ;
})
console.log(aa);

//some
let score = [10, 30 , 32 ,90]
let scoreAns = score.some(function (val) {
    return val > 85 ;
})

console.log(scoreAns);

//Every
let scoreans = score.every(function (a) {
    return a > 1 ;
})
console.log(scoreans);



/**Destructuring , **/
var arr = [1,2,3,4,5];
let [x,y,,,z] = arr ;


// spread operator
// var arr = [1,2,3,4,5,6,7,8,9];
// let arr2 = [...arr] ;
// arr2.pop()
// console.log(arr2);

//Question
/**Create an array with 3 fruits and print the second fruit **/

// let fruits = ["apple","guava","banana"];

// console.log(fruits[2]);

/** Add "guava to the end and "Pineapple" at the begining of the array**/

// fruits.push("Mango");
// fruits.unshift("Pineapple");
// console.log(fruits); 


/**Replace "banana"  with "Kiwi" in the array above**/
let fruits = ["apple","banana"];

fruits.pop();
fruits.push("Kiwi")

/**What is difference between .push() and .unshift ?
 * Answer: .push() means adding new value at the last array and .unshift() means adding new value at the begining
  **/

/**Remove the last item from this array using a method**/
let numbers = [1,2,3,4];

numbers.pop()
console.log(numbers);

/**Insert "Red" and "Blue" at index 1 in this array **/
let colors = ["Green","yellow"]
 colors.splice(1,0,"Red","Blue");

/**Extract only the middle 3 element from this array **/
let items = [1,2,3,4,5,6];
let newitems = items.slice(2,5)
console.log(newitems);

/**Sort this array alphabetically and then reverse it**/
let names = ["lorem" , "Healan" , "Bowow" ,"Abbas"]
names.sort().reverse();
console.log(names);

//Use .map() to square each number
var arr = [1, 2, 3, 4];
let Square = arr.map(function (sq) {
    return sq * sq ;
});
console.log(Square);

//Use .filter to keep number greater than 10.
var arr = [5, 12, 8 , 20 , 3];
var greaterno = arr.filter(function (val) {
    // if (val > 10) return  val ;
    return val > 10 ;
});
console.log(greaterno);


//Use .reduce() to find the sum of this array
var arr = [10, 20, 30];
let sum = arr.reduce(function (acc,val) {
   return acc + val;
}, 0);
console.log(sum);

//Use .find() to get the first number less than 10

var arr = [12 ,15 ,3 ,8 ,20];
let findLessThan10 = arr.find(function(val) {
    return val < 10 ;
});
console.log(findLessThan10);


//Use .some() to check if any student has scored below 35
let scored = [45, 60, 28, 90];
let studentScoreAns = scored.some(function (val){
    return val < 35 ;
});
console.log(studentScoreAns);

//Use .every() to check if all number are even
let evenNumber = [2, 4, 6 , 8, 10];
let evenNumberAns = evenNumber.every(function (val){
    return val % 2 === 0 ;
});
console.log(evenNumberAns);


// Destructure this array to get firstName and lastName
let fullName = ["your", "name"]
let [firstName,lastName] = fullName;
console.log(firstName);
console.log(lastName);

// Merge two arrays using spread operator
var arr1 = [1,2];
var arr2 =[3,4];

var arrAns = [...arr1,...arr2];
console.log(arrAns);

//Add "India" to the start of this array using spread
let countries = ["USA", "UK"];
let countriesAns =["India", ...countries];
console.log(countriesAns);

//Clone this array properly (not by reference):
var clone = [1,2,3];


var cloneAns = clone.slice(0,3);
console.log(cloneAns);
console.log(clone);

var newclone = clone  ;
console.log(newclone);

var cans= [...clone];
console.log(cans);


