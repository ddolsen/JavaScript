/*
================
== Solution 1 ==
================
- Starting at the last character of the string passed to the function, build reversedStr from str
- During each iteration of the for loop, concatenate reversedStr with itself and the current character
- Return the final value of reversedStr
*/
function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}


/*
================
== Solution 2 ==
================
- Split the string by characters using split(""); this tells the function to split the string by each character
- Using split() will turn the string into an array of characters
- Chain the reverse() function, which takes the array of characters and reverses it
- Chain join("") to put the characters back together into a string; using no spaces in the argument for join ensures the array of characters is joined together by each character
*/
function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("");
}