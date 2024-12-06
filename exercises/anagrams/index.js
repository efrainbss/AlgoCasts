// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {

//     const charsMapA = {};
//     const charsMapB = {};
  
//     stringA = stringA.replace(/[^\w]/g, '');
//     stringB = stringB.replace(/[^\w]/g, '');
  
//     for (let char of stringA) {
//       charsMapA[char] = charsMapA[char] + 1 || 1;
//     }
  
//     for (let char of stringB) {
//       charsMapB[char] = charsMapB[char] + 1 || 1;
//     }
  
//     if(Object.keys(charsMapA).length !== Object.keys(charsMapB).length){
//       return false;
//     }
  
//     for (const property in charsMapA) {
//       //letter count match
//       if(charsMapB[property] !== charsMapA[property]){
//          return false;
//       }
//     }
  
//     return true;
// }

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
