                 /**  DSA — DAY 1 (ARRAYS ONLY) 
                  
                  * Rules for you:*

❌ No Google

❌ No sort()

❌ No advanced methods

✅ Only for, if, variables

Try on your own. Even partial logic is OK.

⏱️ Time Limit

Take 60–90 minutes

Don’t rush

Dry run on paper if stuck

                  * **/

//  Q1. Find the largest number in an array
let arr1 = [12, 5, 8, 20, 3];
let largest = arr1[0]
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest) {
       largest =arr1[i]
    } 
}
console.log("largest : ",largest);

//  Q2. Find the smallest number in an array
let arr2 = [12, 5, 8, 20, 3];
let smallest =arr2[0]
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < smallest) {
        smallest =arr2[i]
    }
    
}
console.log("Smallest number",smallest);



//  Q3. Count how many even numbers are in the array
let arr3 = [1, 2, 3, 4, 5, 6, 8];
let countEven =0 ;
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        countEven++ ;
    }   
}
console.log("Even Number are:",countEven);

//  Q4. Count how many numbers are greater than 10
let arr4 = [5, 12, 3, 25, 7, 18];
let count = 0
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > 10) {
        count++;
    }
}
console.log("Greater than 10 is :",count);


//  Q5. Reverse an array
let arr5 = [1, 2, 3, 4, 5];
let rev = [];
for (let i = arr5.length - 1; i >= 0 ; i--) {
    rev.push(arr5[i]) 
}
console.log("Reverse : ", rev);


// Q6. Check if an array is sorted in ascending order
let arr6 = [2, 4, 6, 8, 10];
let isSorted = true 
for (let i = 0; i < arr6.length - 1; i++) {
   if (arr6[i] > arr6[i + 1]) {
    isSorted = false ;
    break;
   }
    
}
console.log(isSorted);


//  Q7. Find the sum of all elements
let arr7 = [10, 20, 30];
let sum = 0 ;
for (let i = 0; i < arr7.length; i++) {
    sum += arr7[i];   
}
console.log("sum is : ",sum);


//  Q8. Find the second largest number (⚠️ No sorting allowed)
let arr8 = [10, 40, 30, 20];
let largest1 = -Infinity ; 
let sLargest = -Infinity ;
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] >  largest1) {
       sLargest = largest1
       largest1 =  arr8[i];
    }else if (arr8[i] > sLargest && largest1 !== arr8[i] ) {
        sLargest = arr8[i];
    }
    
} 
console.log("Second Largest is ",sLargest);



//  Q9. Count positive, negative, and zero numbers
let arr9 = [0, -1, 3, -5, 0, 2];
let countPositive = 0 ; 
let countNegative = 0 ; 
let countZero = 0 ;
for (let i = 0; i < arr9.length; i++) {
 if (arr9[i] === 0 ) {
        countZero++
     } 
        else if (arr9[i] >= 1) {
                countPositive++;

 }else {
    countNegative++;
 }

}
console.log("countPositive :",countPositive);
console.log("countNegative :",countNegative);
console.log("countZero :",countZero);


// Q10. Move all zeros to the end (order of others same)
let arr10 = [0, 1, 0, 3, 12];
let countZeros = 0
let newarr = []
for (let i = 0; i < arr10.length; i++) {
   if (arr10[i] === 0) {
    countZeros++;
   }else {
       newarr.push(arr10[i])
   }
}
for (let i = 0; i < countZeros; i++) {
   newarr.push(0)
    
}
console.log("New array : ",newarr);

