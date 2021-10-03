function reverseString(str) {
    for (let reversedStr = '', i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
console.log(reverseString('foobar'));


// =====================================================================


function reverseString(str) {
    return str
        .split('')
        .reverse()
        .join('');
}
console.log(reverseString('foobar'));