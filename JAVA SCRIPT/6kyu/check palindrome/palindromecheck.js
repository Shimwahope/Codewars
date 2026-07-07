function isPalindrome(x) {
    const reversed=x.split("").reverse().join("")
    if(x.toLowerCase()===reversed.toLowerCase()){
        return true
    }
    else{
        return false
    }
}
console.log(isPalindrome("Bob"))