deadAntCount = function (ants) {
    const noant=ants.replaceAll("ant","")
    const acount=(noant.match(/a/g)||[]).length
    const ncount=(noant.match(/n/g)||[]).length
    const tcount=(noant.match(/t/g)||[]).length
    return Math.min(acount,ncount,tcount)
}
console.log(deadAntCount("...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t"))