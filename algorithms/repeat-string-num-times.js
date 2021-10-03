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


// =====================================================================


function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';
    while (num > 0) {
        accumulatedStr += str;
        num--;
    }
    return accumulatedStr;
}
console.log(repeatStringNumTimes('abc', 3));


// =====================================================================


function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return '';
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}
console.log(repeatStringNumTimes('abc', 3));


// =====================================================================


function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
console.log(repeatStringNumTimes('abc', 3));