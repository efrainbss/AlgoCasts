// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    let revesedString = "";
    const separatedArr = str.split("");

    // sol #1
    // for(let i = separatedArr.length - 1; i >= 0; i--)
    // {
    //     revesedString += separatedArr[i];
    // }

    // sol #2
    // for(let character of str){
    //     revesedString = character + revesedString;
    // }

    // sol #3

    return str.split('').reduce((reversed, character) => {
        // debugger;
        return character + reversed;
    }, '');

    // return revesedString;
}

// reverse('123');

module.exports = reverse;
