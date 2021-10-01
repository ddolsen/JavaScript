/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/


/*
================
== Solution 1 ==
================
*/
function drawTriangle(lines) {
    for (let i = 0; i < lines; i++) {
        console.log('#'.repeat(i));
    }
}
drawTriangle(7);


/*
================
== Solution 2 ==
================
*/
for (let line = '#'; line.length < 8; line += '#') {
    console.log(line);
}