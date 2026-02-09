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
