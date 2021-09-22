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


function findLongestWordLength(s) {
    return s.split(' ')
        .reduce(function (longest, word) {
            return Math.max(longest, word.length)
        }, 0);
}
