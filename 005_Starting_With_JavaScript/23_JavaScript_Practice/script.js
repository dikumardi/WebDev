/**16. Remove duplicate values from an array**/

let arr = [1, 2, 3, 2, 4, 3, 5];

let ans = [...new Set(arr)];
console.log(ans);

/**17. Find the second largest number in an array.**/
// let arr2 =[30,50,10,40,30,10,40,20,50];
let arr2 = [7, 12, 5, 20, 7, 5, 18, 20, 10];


//unique
var ans2= [...new Set(arr2)]

//sort array in descending order
 let newarr = ans2.sort(function(a,b){
    return b-a ; // a-b matlab ascending b-a is descending
});
// 1st arr[1]

console.log(newarr[1]);


//Shortcut
console.log([... new Set(arr2)].sort(function (a,b) {
    return b - a;
})[1]);


/**  Sort an array in descending order.  **/

let num = [5, 2, 9, 1, 5, 6];

console.log(num.sort(function (a,b) {
    return b - a ;
}));

//using fat arrow function
let arr3 = [5, 2, 3, 1, 4,5];

let ans3 =arr3.sort((a,b) => b - a );


/** Reverse an array without using .reverse().**/

var arr6 =  [10, 20, 30, 40, 50];
let arr7 = [];

for (let i = arr6.length-1; i >= 0; i--){
    arr7.push(arr6[i]);
   
}

/* Find the most frequent element in an array**/
let num2 = [3,4,1,3,4,6,7];
let obj = {}

num2.forEach(function (val) {
   // obj[val]  === undefined ? (obj[val] = 1) : obj[val]++ ;
 // or
   if (obj[val] === undefined) {
    obj[val] = 1 ;
   }else{
    obj[val]++;
   }
    
});