function largestOfFour(array) {
    const resultArray = [];
    array.forEach(subArray => {
        let largest = subArray[0];
        subArray.forEach(element => {
            largest = (element > largest) ? element : largest;
        });
        resultArray.push(largest);
    });
    return resultArray;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));