function findLongestWordLength(str) {
    let maxLength = 0;
    (str.split(' ')).forEach(element => {
        if (element.length > length) {
            maxLength = element.length;
        }
    });
    return maxLength;
}
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));


// =====================================================================


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
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));


// =====================================================================


function findLongestWordLength(s) {
    return s.split(' ')
        .reduce(function (longest, word) {
            return Math.max(longest, word.length)
        }, 0);
}
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));