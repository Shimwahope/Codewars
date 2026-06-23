//Write a function sumBy that takes an array of objects and a key, and returns the total sum of the values associated with that key.
function sumBy(arr, key) {
    return arr.reduce((acc, curObj) => {
        return acc + (curObj[key] || 0);
    }, 0)
}
const data = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 }
];

console.log(sumBy(data, "id"));