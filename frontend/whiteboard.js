/*

Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation if they meet the prior criteria.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
sumOfOdds(5,10) => 21 5,6,7,8,9,10
sumOfOdds(5,11) => 32
sumOfOdds(10,11) => 11

function sumOfOdds(a,b)

*/

const sumOfOdds = (a,b) => {
    let sum = 0;

    for(let i = a; i <= b; i++){
        if(i % 2 !== 0){
            sum += i;
        }
    }

    return sum;
}

console.log(sumOfOdds(10,11))