/** Phase 3 – Arrays (Foundation for Problem Solving) 
   Practice arrays, loops, and calculations.  **/

//15.Print all elements of an array.
let arr = [1,2,3,4,5,6,7]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  
}

//16.Sum all numbers in an array.
let sum = 0 ;
for (let i = 0; i < arr.length; i++) {
      sum+=arr[i];    
}
console.log(sum);

//17.Find largest and smallest element in an array.
let num = [10,30,20,50,40];
let largest=num[0];
let smallest=num[0];
for (let i = 1; i < num.length; i++) {
   if (num[i] >= largest) {
     largest =num[i]; 
    }else if (num[i] <= smallest) {
            smallest =num[i];    
    }
}
console.log("Largest Element is :",largest);
console.log("Smallest Element is :",smallest);

//18. Count even and odd numbers in an array.
let number = [7,3,2,6,4,8,5,9]
let countEven = 0 ;
let countOdd = 0 ;
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        countEven++;
    }else {
        countOdd++;
    } 
}
console.log("countEven : ",countEven);
console.log("countOdd : ",countOdd);


//19.Reverse an array.
let array = [1,2,3,4,5,6,7]
let rev = []
for (let i = array.length - 1; i >= 0; i--) {
   rev.push(array[i])
    
}
console.log('reverse : ', rev);

console.log(array.reverse());

//20.Find duplicates in an array.
let array1 = [2,1,3,1,4,2,5,6,7,3];
let duplicate = [] ;
for (let i = 0; i < array1.length; i++) {
   for (let j = i + 1; j < array1.length; j++) {
    
    if (array1[i] === array1[j] &&
        !duplicate.includes(array1[i])
    ) {
        duplicate.push(array1[i])
    }
   }
    
}
console.log(duplicate);

//21 . Merge two arrays and remove duplicates.
let arrays1 = [1,2,3,4] 
let arrays2 = [4,3,6,5] 
let newarray = arrays1.concat(arrays2);

let duplicates = []
for (let i = 0; i < newarray.length; i++) {
  
    if (!duplicates.includes(newarray[i])
    ) {
        duplicates.push(newarray[i])
    }
   
    
}
console.log(duplicates);

//22. Move all zeros in an array to the end.
let array2 = [0, 1, 0, 3, 12];
let result = [];
let zeroCount = 0;

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 0) {
        zeroCount++;
    }else{
        result.push(array2[i]);
    }
}
for (let i = 0; i < zeroCount; i++) {
   result.push(0);
}
console.log("Result : ", result);


//23.Find second largest number in an array.

let numb = [10, 20, 30, 40];



//24.Average of all numbers in an array.
let numbers = [1,2,3];
let sumNumber = 0
for (let i = 0; i < numbers.length; i++) {
    sumNumber +=numbers[i] /2;
    
}
let average = sumNumber / numbers.length
console.log('Avegare is :', average);

//Remove duplicates from array
// [1,2,3,2,4,1] → [1,2,3,4]

let number1 = [1,2,3,2,4,1] 
let unique = []
for (let i = 0; i < number1.length; i++) {
  if (!unique.includes(number1[i])) {
   unique.push(number1[i])
  }
}
console.log(unique);
