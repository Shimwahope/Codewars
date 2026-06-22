//Write a function that takes in an array and swaps the positions of the first two elements in an array using destructuring, with default parameters to handle cases where input elements might be missing. The function should return a new array with the swapped elements.
function swap([a,b,...rest]=[]){
    return [b,a,...rest]
}
console.log(swap([2, 3]))