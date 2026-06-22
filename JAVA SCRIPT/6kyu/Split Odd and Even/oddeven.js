function splitOddAndEven(n) {
    const str=n.toString().split("")
    let isEven=""
    let isOdd=""
    for(let i in str){
         const digit = Number(str[i]);
        if(digit%2===0){
            isEven+=str[i]
        }
        else{
           isOdd+=str[i]
        }
        
    }
    let result=[]
    if(isEven!==0 && isOdd!==0){
        result=[Number(isEven),Number(isOdd)]
    }

    else if(isOdd!==0 && isEven===0){
        result.push(Number(isOdd))
    }
    else{
        result.push(Number(isEven))
    }
    return result
}
console.log(splitOddAndEven(111))