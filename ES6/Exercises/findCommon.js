function findCommon(a,b){
    let result=[]
    for (const as of a){
        if(a.includes(as)&&b.includes(as))
        result.push(as)
    }   
    return result
}
console.log(findCommon([1, 2, 3], [2, 3, 4])); 