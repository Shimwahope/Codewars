
function shorterestTime(n, m, speeds) {
    const [a, b, c, d] = speeds
    const stairs = n * d
    const elevator = (a * Math.abs(m - n)) + (a * n) + (b*2)+c
    const fromM=(Math.abs((n-m)*d))+(a*m)+(b*2)+c
    return Math.min(stairs,elevator,fromM);
}
console.log(shorterestTime(4,3,[2,3,4,5]))