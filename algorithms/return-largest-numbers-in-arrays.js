/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/


/*
================
== Solution 1 ==
================
*/
function largestOfFour(array) {
    const resultArray = [];
    array.forEach(subArray => {
        // let largest = 0;
        let largest = subArray[0];
        subArray.forEach(element => {
            largest = (element > largest) ? element : largest;
        });
        resultArray.push(largest);
    });
    console.log(resultArray);
    return resultArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/*
================
== Solution 2 ==
================
*/
