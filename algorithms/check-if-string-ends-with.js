// Check if a string (first argument, str) ends with the given target string (second argument, target)

// =======
// == 1 ==
// =======
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding("foo bar", "bar"));


// =======
// == 2 ==
// =======
function confirmEnding(str, target) {
    let re = new RegExp(target + "$", "i");
    return re.test(str);
}
console.log(confirmEnding("foo bar", "bar"));


// =======
// == 3 ==
// =======
function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}
console.log(confirmEnding("foo bar", "bar"));
