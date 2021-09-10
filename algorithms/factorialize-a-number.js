/*
================
== Solution 1 ==
================
- Since the return values for the function will always be greater than or equal to 1, product is initialized at 1
- For the case where the number is 0, the for loop condition will be false, but since product is initialized at 1, it will have the correct value when the return statement is executed
- For all numbers passed to the function which are greater than 1, the for loop will decrement num by 1 each iteration and recalculate product down to the value 1
*/
function factorialize(num) {
    for (var product = 1; num > 0; num--) {
        product *= num;
    }
    return product;
}
console.log(factorialize(5));
