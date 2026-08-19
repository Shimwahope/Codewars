function isAnagram(test,original){
    const tester=test.split("").sort().join("").toLowerCase()
    const og=original.split("").sort().join("").toLowerCase()   
    return tester===og
}
console.log(isAnagram("test","est"))