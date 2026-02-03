/**Phase 2 – Basic Strings (First Level String Logic)

Practice string manipulation & conditions. **/

// 9.Count vowels in a string.
let string = 'hello'
let countVowels = 0 ;
for (let i = 0; i < string.length; i++) {
if ('aeiou'.includes(string[i])) {
    countVowels++;
}    
}
console.log(countVowels);

//10. Reverse a string (without reverse() method).

let str = 'hello'
let rev = ''
for (let i = str.length - 1 ; i >= 0; i--) {
    rev += str[i]
}
console.log(rev);

//11. Check if a string is a palindrome.
let str1 = 'madam'
let isPalindrome = true ;
for (let i = 0; i < str1.length / 2; i++) {
    if (str1[i] !== str1[str1.length - 1 - i]) {
       isPalindrome = false ; 
    }
}
console.log(isPalindrome);

//12.Count characters in a string.
let str2 = 'characters'
let countCharacters = 0;
for (let i = 0; i < str2.length; i++) {
    countCharacters++;
}
console.log(countCharacters);

//13. Remove spaces from a string.
let str3 = 'hello world'
let result = ""
for (let i = 0; i < str3.length; i++) {
if (str3[i] !== " ") {  
result +=str3[i]
}}

//14 .Replace all vowels in a string with *.
    let str4 = 'javascript'
    let ans = ''
    for (let i = 0; i < str4.length; i++) {
        if ("aeiou".includes(str4[i])) {
        ans +="*"
            
        }else{
            ans +=str4[i];
        }
    }
        console.log(ans);
