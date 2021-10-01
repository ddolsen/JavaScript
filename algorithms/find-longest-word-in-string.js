/*
================
== Solution 1 ==
================
*/
function findLongestWordLength(str) {
    let length = 0;
    let longestStr;
    (str.split(' ')).forEach(element => {
        if (element.length > length) {
            length = element.length;
            longestStr = element;
        }
    });
    // return length, longestStr;
    console.log(`Length = ${length}`);
    console.log(`Longest string = ${longestStr}`);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog this-is-the-longest-word");

/*
================
== Solution 2 ==
================
*/
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

/*
================
== Solution 2 ==
================
*/
function findLongestWordLength(s) {
    return s.split(' ')
        .reduce(function (longest, word) {
            return Math.max(longest, word.length)
        }, 0);
}
