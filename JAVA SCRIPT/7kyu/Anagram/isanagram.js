function isAnagram(test,original){
    const tester=test.toLowerCase()  .split("").sort().join("")
    const og=original.toLowerCase()  .split("").sort().join("") 
    return tester===og
}
console.log(isAnagram("test","estt"))