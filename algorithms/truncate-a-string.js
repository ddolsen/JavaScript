function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}
console.log(truncateString('Lorem ipsum dolor sit amet', 8));
console.log(truncateString('Lorem ipsum dolor sit amet', 35));


// =====================================================================


function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
console.log(truncateString('Lorem ipsum dolor sit amet', 8));
console.log(truncateString('Lorem ipsum dolor sit amet', 35));