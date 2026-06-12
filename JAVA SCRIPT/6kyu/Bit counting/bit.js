function countBits(n) {
let binary=""
let val=n
while (val > 0) {
      binary = (val % 2) + binary; // 1. Get remainder and build string backwards
      val = Math.trunc(val / 2);   // 2. Then divide the number for the next turn
   }
let five=0
for(let i in binary.split("")){
    if(binary[i]==='1'){
        five++
    }
}
   return five ;
}
console.log(countBits(1234))