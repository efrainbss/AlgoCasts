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

    for(let i = separatedArr.length - 1; i >= 0; i--)
    {
        revesedString += separatedArr[i];
    }

    return revesedString;
}

module.exports = reverse;
