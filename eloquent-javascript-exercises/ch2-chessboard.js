/*
Write a program that creates a string that represents an 8×8 grid, using new-line characters to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/


/*
================
== Solution 1 ==
================
*/
function createGrid(x, y) {
    let output = '';
    for (let i = 1; i <= y; i++) {
        if (i % 2 == 0) {
            let char = '#';
            for (let j = 1; j <= x; j++) {
                output += char;
                char = (char == '#') ? ' ' : '#';
            }
        } else {
            let char = ' ';
            for (let j = 1; j <= x; j++) {
                output += char;
                char = (char == '#') ? ' ' : '#';
            }
        }
        output += '\n';
    }
    console.log(output);
}

createGrid(8, 8);
createGrid(10, 10);
createGrid(15, 30);
createGrid(30, 15);
createGrid(50, 50);


/*
================
== Solution 1 ==
================
*/
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);
