// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let step = '';

//     for (let i = 0; i < n; i++) {
//       step = '#'.repeat(i + 1).padEnd(n, " ");
//       console.log(step);
//     }  
// }

// function steps(n) {
//    for(let row = 0; row < n; row++){
//         let stair = '';

//         for(let col=0; col < n; col++){
//             stair += (col<=row) ? '#' : ' ';
//         }

//         console.log(stair);
//    }

// }

function steps(n, row = 0, stair = ''){
    if(n === row){
        return;
    }

    if(n === stair.length){
        console.log(stair);
        return steps(n, row + 1);
    }

    if(stair.length <= row){
        stair += '#';
    }else{
        stair += ' ';
    }
    
    steps(n, row, stair);
}

module.exports = steps;
