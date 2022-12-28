// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Input => Number  => Number on that index on the fibonacci sequaence 
// => index of the fibonacci indicated by the input

function fibonacci(num){
    //inicated with fibonacci sequeance => [0,1]
    let fibo = [0,1];
    // For loop => goes from the 2 index to the index indecated by num
    for(let i = 2; i <= num; i++){
    // new indexes that are going to follow fibonacci sequeance 
        fibo[i] =  fibo[i - 1] + fibo[i - 2]
    }
    // return the asked index
    return fibo[num]
}

console.log(fibonacci(2), 1)
console.log(fibonacci(3), 2)
console.log(fibonacci(5), 5)
