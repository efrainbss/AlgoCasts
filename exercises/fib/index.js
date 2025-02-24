// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// my solution
// function fib(n) {
//     let result = 0;
//     let secuence = new Array(n);

//     for(let i = 0; i < n; i++){
//         if(i <= 1){
//         	secuence[i] = i;
//         	result = 1;
//         }
//         else{
//         	secuence[i] = secuence[i - 2] + secuence[i - 1];
//             result = secuence[i - 1] + secuence[i];
//         }      
//     }

//     return result;  
// }

// iterative sol
// function fib(n) {
//     const result = [0, 1];

//     for(let i = 2; i <= n; i++){
//        const a = result[i - 1];
//        const b = result[i - 2];

//        result.push(a + b);
//     }

//     return result[n];  
// }

function memoize(fn){
    const cache = {};

    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function fib(n){
    if (n < 2){
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
