
function counter(callback) {
    const value=[]
    for (let i = 1; i <= 5;i++ ){
        value.push(i)
    }
    function next(index){
        if(index>=value.length) return;
        console.log(value[index]);
        setTimeout(()=>next(index+1),1000)
    }
    next(0)
}
counter();