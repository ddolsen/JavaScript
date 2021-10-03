function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding('foo bar', 'bar'));


// =====================================================================


function confirmEnding(str, target) {
    let re = new RegExp(target + '$', 'i');
    return re.test(str);
}
console.log(confirmEnding('foo bar', 'bar'));


// =====================================================================


function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}
console.log(confirmEnding('foo bar', 'bar'));