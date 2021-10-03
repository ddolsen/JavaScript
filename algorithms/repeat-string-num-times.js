/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. Do not use the built-in .repeat() method.
*/


/*
================
== Solution 1 ==
================
*/
function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return '';
    }
    let output = '';
    for (let i = 0; i < num; i++) {
        output += str;
    }
    return output;
}

console.log(repeatStringNumTimes('abc', 3));


/*
================
== Solution 2 ==
================
*/
function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';
    while (num > 0) {
        accumulatedStr += str;
        num--;
    }
    return accumulatedStr;
}

console.log(repeatStringNumTimes('abc', 3));


/*
================
== Solution 3 ==
================
*/
function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return '';
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}

console.log(repeatStringNumTimes('abc', 3));


/*
================
== Solution 3 ==
================
*/
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

console.log(repeatStringNumTimes('abc', 3));