function narcissistic(value) {
        const values=value.toString().split("")
    
    const x=values.length
    let sum=0
    for (let i=0;i<x;i++){
        sum+=Math.pow(Number(values[i]),x)
    }
    if(sum===value){
        return true
    }
    else{
        return false
    }
}
console.log(narcissistic(153))