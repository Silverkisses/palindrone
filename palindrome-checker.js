let isPalindrome = false;
let reverseString = "";
function palindromeChecker(palindromeString){
    for (i = palindromeString.length-1; i>=0; i--){
        reverseString = reverseString + palindromeString[i];
    }
    if(palindromeString === reverseString){
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }
    // Review the following:
    /*isPalindrome = (palindromeString === reverseString) */
    return isPalindrome;
}
palindromeChecker("clearlynotapalindrome");
console.log(isPalindrome);
console.log(reverseString);
