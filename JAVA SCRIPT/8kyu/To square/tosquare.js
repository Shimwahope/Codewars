function squareOrSquareRoot(array) {
//     const arr=[]
//     for (let i of array){
//         if(Math.sqrt(i)%1===0){
//             arr.push(Math.sqrt(i))
//         }
//         else{
//             arr.push(i*i)
//         }
//     }
//   return arr;  
return array.map((x)=>Math.sqrt(x)%1===0? Math.sqrt(x):x*x )
}
console.log(squareOrSquareRoot([4,3,9,7,2,1]))