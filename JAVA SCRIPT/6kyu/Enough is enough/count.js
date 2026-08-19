function deleteNth(arr,n){
  const counter={}
  const result =[]
  for(let i of arr){
    if(counter[i]<n ||(i in counter)===false){
        counter[i]=counter[i]+1||1
        result.push(i)

    }
  }
  return result
}


// function deleteNth(arr,n){
// const result = [];
// for(let i = 0 ; i < arr.length; i++){
//     let char = arr[i];
//     let count = arr.indexOf(char)
//     if(count === arr.lastIndexOf(char)){
//         result.push(char);
//     } else if(count.length > n){
//         result.pop(char);
//     }
// }
// return result
// }
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))