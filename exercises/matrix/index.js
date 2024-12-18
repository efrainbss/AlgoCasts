// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {

//  // Create an empty NxN matrix
//     const matrix = Array.from({ length: n }, () => Array(n).fill(0));
 
//     let top = 0, bottom = n - 1;
//     let left = 0, right = n - 1;
//     let num = 1;

//     while (top <= bottom && left <= right) {
//         // Fill top row
//         for (let i = left; i <= right; i++) {
//             matrix[top][i] = num++;
//         }
//         top++;

//         // Fill right column
//         for (let i = top; i <= bottom; i++) {
//             matrix[i][right] = num++;
//         }
//         right--;

//         // Fill bottom row
//         for (let i = right; i >= left; i--) {
//             matrix[bottom][i] = num++;
//         }
//         bottom--;

//         // Fill left column
//         for (let i = bottom; i >= top; i--) {
//             matrix[i][left] = num++;
//         }
//         left++;
//     }

//     return matrix;

// }

function matrix(n) {
    const results = [];
  
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
  
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
  
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  
      // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
  
      // start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
  
    return results;
  }
  

module.exports = matrix;
