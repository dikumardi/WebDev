/**
 * Map
 * Filter
 * Reduce
 */



//Map---used to change all items in an array one by one and give back a new array.
// It does not change the original array.



// var arr = [1,2,3,4];

/*Foreach
arr.forEach(function (val) {
    console.log(val);   
})

In forEach  we cannot return a value
*/

//Map
var arr = [1,2,3,4];

var ans = arr.map(function (value) {
    return 12;
});

// Filter – similar to map, but it keeps only the values that return true
var arr2 = [10, 13, 14, 15, 16, 17, 21];

var ans2 = arr2.filter(function (val) {
    return val > 16;
});

console.log(ans2); // Output: [17,21]


//Reduce---from one array make one value
//reduce() is used when you want to take all items of an array and combine them into a single value (like sum, product, average, etc.).

var arr3 = [1,2,3,4]

var ans3 = arr3.reduce(function (acc,val) {
    return acc + val ;
    
},0)


// JavaScript Question Practice

/** Write a for loop to print numbers from 10 to 1 in reverse. */

// for (let i = 10; i >=  1; i--) {
//     console.log(i);
    
    
// }

/**Use a while loop to print multiples of 3 from 3 to 30 */
var a = 1
while (a <= 10) {
    // a  * i 
    console.log(3 * a);

    a++ ;

}

// OR

let i = 3;
while (i <= 30) {
    console.log(i);
    i+=3;
       
}

/*   Write a program to calculate the sum of numbers from 1 to 100 using a loop.*/

let sum = 0;
for (let i = 0; i <= 100; i++) {
    
    sum = sum + i ;
    
}
console.log(sum);

/** Create a nested loop to print a star pattern. **/


/** Use a for...of loop to iterate over the string "JavaScript  **/

let str = "JavaScript";

for (let i of str ) { 
   console.log(i);
}