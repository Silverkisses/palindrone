let isPalindrome = false;
let reverseString = "";
function palindromeChecker(palindromeString){
    for (i = palindromeString.length-1; i>=0; i--){
        reverseString = reverseString + palindromeString[i];
    }
    return isPalindrome;
}
palindromeChecker("test");
console.log(isPalindrome);
console.log(reverseString);
