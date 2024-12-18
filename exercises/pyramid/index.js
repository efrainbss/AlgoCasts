// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const colsPerRow = n + (n - 1);
//     let octothorpeCount = 0;
//     let spacesCount = 0;
  
//     for (let row = 0; row < n; row++) {
      
//       let level = "";
//       octothorpeCount = (row == 0) ? 1 : octothorpeCount + 2;
//       spacesCount = (colsPerRow - octothorpeCount) / 2;
      
//       for (let col = 0; col < colsPerRow; col++) {
        
//         if(col <= spacesCount - 1){
//           level += " ";
//         }
//         else if(col >= (octothorpeCount + spacesCount)){
//           level += " ";
//         }
//         else{
//           level += "#";
//         }
//       }
  
//       console.log(level);
//     }
// }

// function pyramid(n) {
    // const midpoint = Math.floor((2 * n - 1) / 2);

    // for (let row = 0; row < n; row++){
    //     let level = '';
    //     for (let column = 0; column < 2 * n - 1; column++){
    //         if(midpoint - row <= column && midpoint + row >= column){
    //             level += '#';
    //         }else{
    //             level += ' ';
    //         }
    //     }

    //     console.log(level);
    // }

// }

function pyramid(n, row = 0, level = '') {
    if(row === n){
        return;
    }

    if(level.length === 2 * n - 1){
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;

    if(midpoint - row <= level.length && midpoint + row >= level.length){
        add = '#';
    }
    else{
        add = ' ';
    }

    pyramid(n, row, level + add);
}
module.exports = pyramid;
