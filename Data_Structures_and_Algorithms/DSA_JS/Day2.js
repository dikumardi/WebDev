/** DSA — DAY 2 (ARRAYS)
 * Focus: logic, patterns, edge cases
 */

// Q1. Find the maximum difference between two elements
// (larger element comes after smaller one)
let arr1 = [7, 1, 5, 3, 6, 4];
// Example: 6 - 1 = 5

let minSoFar = arr1[0];
let maxDiff = 0;

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] < minSoFar) {
    minSoFar = arr1[i];
  } else {
    maxDiff = Math.max(maxDiff, arr1[i] - minSoFar);
  }
}

console.log(maxDiff); 


// Q2. Check if array contains duplicate elements

let arr2 = [1, 2, 3, 4, 2];
let isDuplicate = false;

for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] === arr2[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (isDuplicate)
     break;
}

console.log(isDuplicate); 

