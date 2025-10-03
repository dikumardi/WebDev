//Map

let arr1 = [2,5,7,10];
// using by  normal function
// let arr2 = arr1.map(function (a) {
// return a * 2;    
// });

let arr2 = arr1.map(x => x * 2); //arrow function
console.log(arr2);

// let ans =arr1.filter(function (p) {
// return p % 2 == 0 ;  
// })

let ans =arr1.filter( a => a%2 == 0);
console.log(ans);
