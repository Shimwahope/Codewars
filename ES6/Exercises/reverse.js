/*Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)

```jsx
const originalObj = {aa: "1", bf: "3", cq: "5"};
const reversedObj = reverseObject(originalObj);
// console.log(reversedObj); 
output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Exp
```
*/
function reverse(obj){
    const arr=Object.entries(obj)
    const reversed=arr.map(([key,value])=>[value,key])
    return Object.fromEntries(reversed)
}
const originalObj = {aa: "1", bf: "3", cq: "5"};
console.log(reverse(originalObj))