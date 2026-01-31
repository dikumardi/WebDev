                       /** JavaScript Beginner Practice **/


// ============================================
// 1️⃣ Print numbers from 1 to 10

// ============================================
// 2️⃣ Print all odd numbers from 1 to 20


// ============================================
// 3️⃣ Print all even numbers from 1 to 20


// ============================================
// 4️⃣ Sum of numbers from 1 to 50


// ============================================
// 5️⃣ Sum of all even numbers from 1 to 50

// ============================================
// 6️⃣ Count numbers divisible by 5 between 1 and 50

// ============================================
// 7️⃣ Largest of 3 numbers


// ============================================
// 8️⃣ Count vowels in a string


// ============================================
// 9️⃣ Reverse a string


// ============================================
// 🔟 Check if a string is palindrome



                         /** JavaScript Intermediate Beginner Practice **/
                         
// ============================================
// 1️⃣ Print all elements of an array
let arr1 = [2, 4, 6, 8, 10];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}


// ============================================
// 2️⃣ Sum of elements in an array
let arr2 = [1, 2, 3, 4, 5];

let sum = 0 ;
for (let i = 0; i < arr2.length; i++) {
    sum = sum + arr2[i];
}
console.log(sum);

// ============================================
// 3️⃣ Find the largest element in an array
let arr3 = [12, 7, 25, 18, 10];
let largest = arr3[0] ;
for (let i = 1; i < arr3.length; i++) {
    if (largest <= arr3[i]) {
         largest = arr3[i]         
    }
 }
         console.log(largest);

// ============================================
// 4️⃣ Find the smallest element in an array
let arr4 = [12, 7, 25, 18, 10];
let smallest = arr4[0];
for (let i = 1; i < arr4.length; i++) {
   if (arr4[i] < smallest ) {
    smallest = arr4[i];
   }
    
}
console.log(smallest);

// ============================================
// 5️⃣ Reverse an array
let arr5 = [1, 2, 3, 4, 5];
let rev = [];
for (let i = arr5.length - 1 ; i >= 0 ; i--) {
      rev.push(arr5[i])
}
console.log(rev);


// ============================================
// 6️⃣ Count even and odd numbers in an array
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];

let countEven = 0 ;
let countOdd = 0 ;

for (let i = 0; i < arr6.length; i++) {
    if ( arr6[i] % 2 === 0) {
        countEven++;
    }else {
     countOdd++;
    }
}
console.log('Even count', countEven , "odd count", countOdd);



// ============================================
// 7️⃣ Sum of all elements divisible by 3 in an array
let arr7 = [3, 5, 6, 9, 10, 12];
let sumDiv3 = 0 ;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] % 3 === 0) {
     sumDiv3 += arr7[i]
  }    
}
console.log('Sum of element divisible by 3 is :',sumDiv3);



// ============================================
// 8️⃣ Reverse a string using array method
let str1 = "javascript";
let reverse = str1.split('').reverse().join('') 
console.log(reverse);

// ============================================
// 9️⃣ Count vowels in a string using loop
let str2 = "programming";
let countVowels = 0;
for (let i = 0; i < str2.length; i++) {
    if ('aeiou'.includes(str2[i])) {
        countVowels++;
        // str2[i] === 'a' ||
//         str2[i] === 'e' ||
//         str2[i] === 'i' ||
//         str2[i] === 'o' ||
//         str2[i] === 'u'
    }
    
}
console.log(countVowels);



// ============================================
// 🔟 Check if a string is a palindrome (array method)
let str3 = "madam";
let revStr = str3.split('').reverse().join('');
let isPalindrome = (str3 === revStr)
console.log(isPalindrome);


// ============================================
// 1️⃣1️⃣ Find duplicate elements in an array
let arr8 = [1, 2, 3, 2, 4, 5, 3];
let duplicate = [] ;
for (let i = 0; i < arr8.length; i++) {
    
    for(j = i + 1 ; i < arr8.length; i++){
        if (arr8[i] === arr8[j] && !duplicate.includes(arr8[i])) {
            duplicate.push(arr8[i])
        }
    }
    
}
console.log('Duplicate :', duplicate);




// ============================================
// 1️⃣2️⃣ Merge two arrays
let arr9 = [1, 2, 3];
let arr10 = [4, 5, 6];
let mergeArrays = arr9.concat(arr10);
console.log(mergeArrays);

// ============================================
// 1️⃣3️⃣ Find sum of numbers in mixed array (numbers + strings)
let arr11 = [1, "a", 2, "b", 3];
let sumNumber = 0 ;
for (let i = 0; i < arr11.length; i++) {
    if (typeof arr11[i] === 'number') {
        sumNumber += arr11[i]
    }
}

console.log(sumNumber);

















