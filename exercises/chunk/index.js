// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk_my_solution(array, size) {
//     let chunks = [];
//     let chunksTotal = (array.length / size);
//     let index = 0;
//     let elarray = [];

//     for(let j = 0; j < chunksTotal; j++){
//         for (let i = 0 ; i < size; i++) {
//             if(array[index]){
//                 elarray.push(array[index]);
//             }
//             index++;
//         }
//         chunks.push(elarray);
//         elarray = [];
//     }

//     return chunks;
// }

// function chunk(array, size) {
//     let chunked = [];
   
//     for(let element of array){
//         const last = chunked[chunked.length - 1];

//         if(!last || last.length === size){
//             chunked.push([element]);
//         }else{
//             last.push(element);
//         }

//     }

//     return chunked;
// }

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length){
        chunked.push(array.slice(index, index + size));
        index += size;
    }
   
    return chunked;
}

// const arr = [1, 2, 3, 4, 5];
// const chunked = chunk(arr, 3);

module.exports = chunk;
