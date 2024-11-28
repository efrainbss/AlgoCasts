// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {

//     const chars = {};

//     for(let char of str){
//         chars[char] = chars[char] + 1 || 1;
//     }

//     let sortable = [];

//     for (let char in chars) {
//         sortable.push([char, chars[char]]);
//     }

//     sortable.sort(function(a, b) {
//         return a[1] - b[1];
//     });

//     const max = sortable[sortable.length - 1][0];

//     return  max;

// }

function maxChar(str) {
    const charsMap = {};
    let max = 0;
    let maxChar = "";
    
    for(let char of str){
        charsMap[char] = charsMap[char] + 1 || 1;
    }

    for(let char in charsMap){
        if(charsMap[char] > max){
            max = charsMap[char];
            maxChar = char
        }
    }

    return maxChar;

}

module.exports = maxChar;
