function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    const word = str.split()
    let count = 0
    for (const i of word) {
        if (vowels.includes(i))
            count += 1
        return count
    }
    //return 0;
}
console.log(getCount('abracadabra'))