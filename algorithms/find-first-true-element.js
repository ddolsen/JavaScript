function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// =====================================================================


function findElement(arr, func) {
    let i = 0
    while (i < arr.length) {
        if (func(arr[i])) return arr[i];
        i++;
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// =====================================================================


function findElement(arr, func) {
    return arr.find(func);
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// =====================================================================


function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// =====================================================================


function findElement(arr, func) {
    return arr.length && !func(arr[0])
        ? findElement(arr.slice(1), func)
        : arr[0];
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));