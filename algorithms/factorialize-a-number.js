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

/*
================
== Solution 2 ==
================
- The termination condition (AKA, base case) is the condition upon which a recursive function/solution stops recurring. It is the problem in a recursive function that we know how to solve explicitly; the "small" problem to which we know the answer.
- If num == 0, then we return 1, effectively ending the recursion and informing the stack to propagate this value to the upper levels
- If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a stack overflow
*/
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}
console.log(factorialize(5));

/*
================
== Solution 3 ==
================
- Tail recursion is used to optimize the the memory use
- In traditional head recursion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result. In this manner, you don’t get the result of your calculation until you have returned from every recursive call.
- In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of (return (recursive-function params)).
- In this solution, with each evaluation of the recursive call, the factorial is updated. This is different from the head-recursive solution where all evaluation calculations are stored on the stack until the base case is reached.
*/
function factorialize(num, factorial = 1) {
    if (num == 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}

console.log(factorialize(5));

/*
================
== Solution 4 ==
================

- The “reduce” function is used to find the factorial value of the number
- An array is created which has length num, and all elements of the array are filled as undefined (because empty arrays are not reducible). The array can be filled any number of different ways.
- The reduce function’s accumulator is calling product, which is also our final value. The index value is multiplied by/with the product to find factorial value.
- The product’s initial value is set to 1 because if it was zero the product would always be zero
- Also, the factorial value cannot calculate negative numbers (this is tested)

*/
function factorialize(num, factorial = 1) {
    return num < 0 ? 1 : (
        new Array(num)
            .fill(undefined)
            .reduce((product, val, index) => product * (index + 1), 1)
    );
}
console.log(factorialize(5));