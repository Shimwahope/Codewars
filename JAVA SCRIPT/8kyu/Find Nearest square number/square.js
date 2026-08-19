function nearestSq(n){
    // if(Math.sqrt(n)%1===0)return n;
    // let below=0
    // let above=0
    // for(let i=n;i>=1;i--){
    //     if(Math.sqrt(i) %1===0){
    //         below=i
    //         break;
    //     }
    // }
    // for(let i=n;i<Infinity;i++){
    //     if(Math.sqrt(i) %1===0){
    //         above=i
    //         break;
    //     }
    // } 
    // let near= (Math.sqrt(above)-Math.sqrt(n))<(Math.sqrt(n)-Math.sqrt(below))? above:below
    // return near
    return Math.round(Math.sqrt(n))**2
}
console.log(nearestSq(111))